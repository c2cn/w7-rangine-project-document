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

namespace W7\App\Model\Logic;

use W7\App\Model\Entity\Document;
use W7\App\Model\Entity\PermissionDocument;
use W7\App\Model\Entity\User;

class DocumentLogic extends BaseLogic
{
	public function getlist($documents, $userId)
	{
		if ($documents == 'all') {
			$res = Document::orderBy('updated_at', 'desc')->get();
		} else {
			$res = Document::orderBy('updated_at', 'desc')->find($documents['document']);
		}
		return $this->handleDocumentRes($res, $userId, $documents);
	}

	public function getDocUserList($id, $userId, $hasPrivilege)
	{
		$documentUsers = PermissionDocument::where('document_id', $id)->pluck('user_id')->toArray();
		$res = User::select('id', 'username', 'has_privilege')->find($documentUsers);
		$res = $this->handleDocumentRes($res, $userId, $hasPrivilege);
		if ($res) {
			foreach ($res as $k => &$v) {
				if ($v['has_privilege'] || $v['has_privilege'] == 0) {
					unset($v['has_privilege']);
				}
				if ($v['is_show_name']) {
					unset($v['is_show_name']);
				}
			}
		}
		return $res;
	}

	public function getdetails($id, $userId, $hasPrivilege)
	{
		$res = Document::find($id);
		$res = $this->handleDocumentRes([$res], $userId, $hasPrivilege);
		return $res[0];
	}

	public function create($data)
	{
		return Document::create($data);
	}

	public function update($id, $data)
	{
		return Document::where('id', $id)->update($data);
	}

	public function del($id)
	{
		return Document::destroy($id);
	}

	public function search($name, $userId, $hasPrivilege)
	{
		$res = Document::where('name', 'like', '%'.$name.'%')->get();
		return $this->handleDocumentRes($res, $userId, $hasPrivilege);
	}

	public function relation($userId, $documentId)
	{
		$this->user = new UserLogic();
		$user = $this->user->getUser(['id'=>trim($userId)]);
		if ($user['has_privilege'] == 1) {
			return true;
		}
		$document = $this->getdetails($documentId, '', '');
		if (!$user) {
			return '用户不存在';
		}
		if (!$document) {
			return '文档不存在';
		}
		if ($user['id'] != $document['creator_id']) {
			return '只有文档创建者才可以操作';
		}
		return true;
	}

	public function handleDocumentRes($res, $userId, $hasPrivilege)
	{
		$this->user = new UserLogic();
		foreach ($res as $key => &$val) {
			if ($val['is_show'] == 1) {
				$val['is_show_name'] = '发布';
			} elseif ($res) {
				$val['is_show_name'] = '隐藏';
			}

			if ($val['creator_id']) {
				$user = $this->user->getUser(['id'=>trim($val['creator_id'])]);
				if ($user) {
					$val['username'] = $user['username'];
				} else {
					$val['username'] = '';
				}
			}
			if ($hasPrivilege == 'all') {
				$val['has_creator'] = 1;
				$val['has_creator_name'] = '管理员';
			} else {
				if ($userId) {
					if ($val['creator_id'] == $userId) {
						$val['has_creator'] = 2;
						$val['has_creator_name'] = '创建者';
					} else {
						$val['has_creator'] = 3;
						$val['has_creator_name'] = '操作员';
					}
				}
			}
		}
		return $res;
	}

	public function getUserCreateDoc($id)
	{
		return Document::where('creator_id', $id)->first();
	}

	public function getShowList($keyword)
	{
		if ($keyword) {
			$res = Document::where('name', 'like', '%'.$keyword['name'].'%')
						->where('is_show', 1)
						->orderBy('updated_at', 'desc')
						->get();
		} else {
			$res = Document::where('is_show', 1)
						->orderBy('updated_at', 'desc')
						->get();
		}
		return $this->handleDocumentRes($res, '', '');
	}
}
