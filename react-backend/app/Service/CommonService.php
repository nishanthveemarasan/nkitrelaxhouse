<?php

namespace App\Service;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class CommonService
{
    public static function storeItem($key, $data, $expireTime = 160)
    {
        $expireAt = Carbon::now()->addMinutes($expireTime);
        Cache::put($key, $data, $expireAt);
    }

    public static function getItem($key)
    {
        return Cache::get($key);
    }

    public static function checkStoredItem($key)
    {
        if (Cache::has($key)) {
            return true;
        }
        return false;
    }

    public static function clearItem($key)
    {
        Cache::forget($key);
    }

    public static function explodeStr($str)
    {
        $arr = explode(",", $str);
        return json_encode($arr);
    }
}
