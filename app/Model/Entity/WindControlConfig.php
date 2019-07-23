<?php
/**
 * @author donknap
 * @date 19-4-23 下午6:38
 */

namespace W7\App\Model\Entity;


class WindControlConfig extends BaseModel {
	public $timestamps = false;

	public static $errors = [
		'max_number_added_per_day' => '超过每天新增文档的最大数量：',
		'max_number_deleted_per_day' => '超过每天删除文档的最大数量：'
	];

	public static function get($key)
	{
		$config = self::find($key);
		if($config){
			return $config->val;
		}
		return null;
	}

	public static function set($key,$value)
	{
		$config = self::find($key);
		if($config){
			$config->val = $value;
			$config->save();
			return true;
		}
		self::create(['key'=>$key,'value'=>$value]);
		return true;
	}

	public static function drop($key)
	{
		$config = self::find($key);
		if($config){
			return $config->delete();
		}
		return false;
	}
}
