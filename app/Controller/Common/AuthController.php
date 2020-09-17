<?php

/**
 * WeEngine Document System
 *
 * (c) We7Team 2019 <https://www.w7.cc>
 *
 * This is not a free software
 * Using it under the license terms
 * visited https://www.w7.cc for more details
 */

namespace W7\App\Controller\Common;

use Overtrue\Socialite\Config;
use Overtrue\Socialite\SocialiteManager;
use Throwable;
use W7\App\Controller\BaseController;
use W7\App\Exception\ErrorHttpException;
use W7\App\Model\Entity\Setting;
use W7\App\Model\Entity\User;
use W7\App\Model\Entity\UserThirdParty;
use W7\App\Model\Logic\ThirdPartyLoginLogic;
use W7\App\Model\Logic\UserLogic;
use W7\Core\Session\Session;
use W7\Http\Message\Server\Request;

class AuthController extends BaseController
{
	public function user(Request $request)
	{
		$userSession = $request->session->get('user');
		/**
		 * @var User $user
		 */
		$user = UserLogic::instance()->getByUid($userSession['uid']);
		if (!$user) {
			$request->session->destroy();
			throw new ErrorHttpException('请先登录', [], Setting::ERROR_NO_LOGIN);
		}

		$source = [
			'source_name' => '',
			'username' => ''
		];
		$userSourceAppId = $request->session->get('user-source-app');
		if ($userSourceAppId) {
			$userSource = UserThirdParty::query()->where('source', '=', $userSourceAppId)->where('uid', '=', $user->id)->first();
			$loginChannel = ThirdPartyLoginLogic::instance()->getThirdPartyLoginChannelById($userSourceAppId);
			$source = [
				'source_name' => $loginChannel['setting']['name'],
				'username' => $userSource->username
			];
		}
		$result = [
			'id' => $user->id,
			'username' => $user->username,
			'created_at' => $user->created_at->toDateTimeString(),
			'updated_at' => $user->updated_at->toDateTimeString(),
			//判断当前用户是否有密码
			'no_password' => empty($user->userpass),
			'user_source' => $source,
			'acl' => [
				'has_manage' => $user->isFounder
			]
		];

		return $this->data($result);
	}

	public function login(Request $request)
	{
		$data = $this->validate($request, [
			'username' => 'required',
			'userpass' => 'required',
			'code' => 'required',
		], [
			'username.required' => '用户名不能为空',
			'userpass.required' => '密码不能为空',
			'code.required' => '验证码不能为空',
		]);
		$code = $request->session->get('img_code');
		if (strtolower($data['code']) != strtolower($code)) {
			throw new ErrorHttpException('请输入正确的验证码');
		}

		$user = UserLogic::instance()->getByUserName($data['username']);
		if (empty($user)) {
			throw new ErrorHttpException('用户名或密码错误，请检查');
		}

		if ($user->userpass != UserLogic::instance()->userPwdEncryption($user->username, $data['userpass'])) {
			throw new ErrorHttpException('用户名或密码错误，请检查');
		}

		if (!empty($user->is_ban)) {
			throw new ErrorHttpException('您使用的用户已经被禁用，请联系管理员');
		}

		$request->session->destroy();

		$this->saveUserInfo($request->session, $user);

		return $this->data('success');
	}

	public function method(Request $request)
	{
		$redirectUrl = $request->post('redirect_url');
		$setting = ThirdPartyLoginLogic::instance()->getThirdPartyLoginSetting();
		$data = [];
		/**
		 * @var SocialiteManager $socialite
		 */
		$socialite = iloader()->get(SocialiteManager::class);
		//获取可用的第三方登录列表
		foreach ($setting['channel'] as $key => $item) {
			if (!empty($item['setting']['enable'])) {
				try {
					$socialite = clone $socialite;
					$url = ienv('API_HOST') . 'login?app_id=' . $key . '&redirect_url=' . urlencode($redirectUrl);
					$redirect = $socialite->config(new Config([
						'client_id' => $item['setting']['app_id'],
						'client_secret' => $item['setting']['secret_key']
					]))->driver($key)->stateless()->redirect($url)->getTargetUrl();
				} catch (Throwable $e) {
					$redirect = null;
				}

				$data[] = [
					'id' => $key,
					'name' => $item['setting']['name'],
					'logo' => $item['setting']['logo'],
					'redirect_url' => $redirect
				];
			}
		}
		return $this->data($data);
	}

	public function defaultLoginUrl(Request $request)
	{
		$redirectUrl = $request->post('redirect_url');
		$defaultSetting = ThirdPartyLoginLogic::instance()->getDefaultLoginSetting();
		if (!empty($defaultSetting['default_login_channel']) && $setting = ThirdPartyLoginLogic::instance()->getThirdPartyLoginChannelById($defaultSetting['default_login_channel'])) {
			/**
			 * @var SocialiteManager $socialite
			 */
			$socialite = iloader()->get(SocialiteManager::class);
			$socialite = clone $socialite;
			$url = ienv('API_HOST') . 'login?app_id=' . $defaultSetting['default_login_channel'] . '&redirect_url=' . $redirectUrl;
			try {
				return $this->data($socialite->config(new Config([
					'client_id' => $setting['setting']['app_id'],
					'client_secret' => $setting['setting']['secret_key']
				]))->driver($defaultSetting['default_login_channel'])->stateless()->redirect($url)->getTargetUrl());
			} catch (Throwable $e) {
				throw new ErrorHttpException($e->getMessage());
			}
		}

		return $this->data('');
	}

	public function thirdPartyLogin(Request $request)
	{
		$code = $request->input('code');
		if (empty($code)) {
			throw new ErrorHttpException('Code码错误');
		}
		$appId = $request->input('app_id');
		if (empty($appId)) {
			throw new ErrorHttpException('app_id错误');
		}

		$setting = ThirdPartyLoginLogic::instance()->getThirdPartyLoginChannelById($appId);
		if (!$setting) {
			throw new ErrorHttpException('不支持该授权方式');
		}
		/**
		 * @var SocialiteManager $socialite
		 */
		$socialite = iloader()->get(SocialiteManager::class);
		$driver = $socialite->config(new Config([
			'client_id' => $setting['setting']['app_id'],
			'client_secret' => $setting['setting']['secret_key']
		]))->driver($appId)->stateless();

		$user = $driver->user($driver->getAccessToken($code));
		//获取第三方数据
		$userInfo = [
			'uid' => $user->uid,
			'username' => $user->username
		];
		if (empty($userInfo['username']) || empty($userInfo['uid'])) {
			throw new ErrorHttpException('登录用户数据错误，请重试');
		}

		//创建用户和绑定关系
		$loginSetting = ThirdPartyLoginLogic::instance()->getDefaultLoginSetting();
		$thirdPartyUser = UserThirdParty::query()->where([
			'openid' => $userInfo['uid'],
			'username' => $userInfo['username'],
			'source' => $appId
		])->first();

		if (empty($thirdPartyUser)) {
			$thirdPartyUser = UserThirdParty::query()->create([
				'openid' => $userInfo['uid'],
				'username' => $userInfo['username'],
				'uid' => 0,
				'source' => $appId,
			]);
		}

		$username = $thirdPartyUser->username;
		//如果当前第三方用户绑定的用户为空，执行绑定操作
		if (empty($thirdPartyUser->uid)) {
			if (empty($loginSetting['is_need_bind'])) {
				//不需要绑定已有账户的话，直接创建新用户
				$username = 'tpl_' . $userInfo['username'] . $userInfo['uid'];
				$thirdPartyUser->uid = UserLogic::instance()->createBucket($username);
				$thirdPartyUser->save();
			} else {
				$username = $userInfo['username'];
				$thirdPartyUser->uid = 0;
			}
		}

		$localUser = [
			'app_id' => $appId,
			'uid' => $thirdPartyUser->uid,
			'third-party-uid' => $thirdPartyUser->id,
			'username' => $username,
		];

		$request->session->destroy();
		//记录第三方登录app_id
		$request->session->set('user-source-app', $appId);

		//需要绑定已有账户
		if (!empty($loginSetting['is_need_bind']) && empty($thirdPartyUser->uid)) {
			//保存第三方用户信息，触发用户绑定
			$request->session->set('third-party-user', $localUser);
			return $this->data([
				'is_need_bind' => true
			]);
		} else {
			$request->session->set('user-source-app', $appId);
			$this->saveUserInfo($request->session, $thirdPartyUser->bindUser);
			return $this->data('success');
		}
	}

	public function thirdPartyLoginBind(Request $request)
	{
		$data = $this->validate($request, [
			'username' => 'required',
			'userpass' => 'required'
		], [
			'username.required' => '用户名不能为空',
			'userpass.required' => '密码不能为空'
		]);
		$thirdPartyUser = $request->session->get('third-party-user');
		if (!$thirdPartyUser) {
			throw new ErrorHttpException('非法请求');
		}

		$user = UserLogic::instance()->getByUserName($data['username']);
		if (empty($user)) {
			throw new ErrorHttpException('用户名或密码错误，请检查');
		}

		if ($user->userpass != UserLogic::instance()->userPwdEncryption($user->username, $data['userpass'])) {
			throw new ErrorHttpException('用户名或密码错误，请检查');
		}

		if (!empty($user->is_ban)) {
			throw new ErrorHttpException('您使用的用户已经被禁用，请联系管理员');
		}

		UserThirdParty::query()->where('id', '=', $thirdPartyUser['third-party-uid'])->update([
			'uid' => $user->id,
		]);

		$request->session->destroy();
		//记录第三方登录app_id
		$request->session->set('user-source-app', $thirdPartyUser['app_id']);
		$this->saveUserInfo($request->session, $user);

		return $this->data('success');
	}

	public function logout(Request $request)
	{
		$sourceApp = $request->session->get('user-source-app');
		$request->session->destroy();
		if ($sourceApp) {
			$setting = ThirdPartyLoginLogic::instance()->getThirdPartyLoginChannelById($sourceApp);
			if (!$setting) {
				throw new ErrorHttpException('不支持该授权方式');
			}
			/**
			 * @var SocialiteManager $socialite
			 */
			$socialite = iloader()->get(SocialiteManager::class);
			return $socialite->config(new Config([
				'client_id' => $setting['setting']['app_id'],
				'client_secret' => $setting['setting']['secret_key']
			]))->driver($sourceApp)->logout($this->response());
		} else {
			$utl = ienv('API_HOST') . 'admin-login';
			return $this->response()->redirect($utl);
		}
	}

	public function getlogouturl(Request $request)
	{
		$utl = ienv('API_HOST') . 'common/auth/logout';
		return $this->data($utl);
	}

	private function saveUserInfo(Session $session, $user)
	{
		$session->set('user', [
			'uid' => $user->id,
			'username' => $user->username,
		]);
		//用户在修改密码后，删除该值，触发退出操作
		icache()->set(sprintf(UserLogic::USER_LOGOUT_AFTER_CHANGE_PWD, $user->id), 1, 7 * 86400);
	}
}
