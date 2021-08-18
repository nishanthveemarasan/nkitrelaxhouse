<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Throwable;
use App\Service\LikeService;
use Illuminate\Http\Request;
use App\Service\APIResponseService;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public $likeService;
    public $apiResponseService;

    function __construct(LikeService $likeService, APIResponseService $apiResponseService)
    {
        $this->likeService = $likeService;
        $this->apiResponseService = $apiResponseService;
    }
    public function isPostLiked(Request $request)
    {
        try {
            $userId = Auth::user()->id;
            $data = $request->all();
            $data['user_id'] = $userId;
            $getLikeDetails =   $this->likeService->isPostLiked($data);
            $response =  $this->apiResponseService->success(200, $getLikeDetails);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateLikes(Request $request)
    {
        try {
            $userId = Auth::user()->id;
            $data = $request->all();
            $data['userId'] = $userId;
            $getLikeDetails =   $this->likeService->updateLikes($data);
            $response =  $this->apiResponseService->success(200, $getLikeDetails);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function getUserLikedPosts()
    {
        $id = 1;
        try {
            // $userId = Auth::user()->id;
            $getLikeDetails =   $this->likeService->getUserPostLikes($id);
            $response =  $this->apiResponseService->success(200, $getLikeDetails);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
