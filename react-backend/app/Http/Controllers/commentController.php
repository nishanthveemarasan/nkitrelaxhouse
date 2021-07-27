<?php

namespace App\Http\Controllers;

use Throwable;
use Illuminate\Http\Request;
use App\Service\CommentService;
use App\Service\APIResponseService;
use Illuminate\Support\Facades\Validator;

class commentController extends Controller
{
    public $commentService;
    public $apiResponseService;
    function __construct(CommentService $commentService, APIResponseService $apiResponseService)
    {
        $this->commentService = $commentService;
        $this->apiResponseService = $apiResponseService;
    }
    public function getAllCommets($id)
    {
        try {
            $getAllComments = "";
            if ($id === 'all') {
                $getAllComments = $this->commentService->getAllCommets();
            } else {
                $getAllComments = $this->commentService->getUserComments($id);
            }
            $response =  $this->apiResponseService->success(200, $getAllComments);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function getUserComments($id)
    {
        try {

            $getUserComments = $this->commentService->getUserComments($id);
            $response =  $this->apiResponseService->success(200, $getUserComments);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function create(Request $request)
    {
        try {
            $userId = 4;
            $data = $request->all();
            $data['user_id'] = $userId;
            $validation = Validator::make(
                $data,
                [
                    'content' => 'required',

                ],
                $messages = [],
                [
                    'content' => 'Comment',

                ]
            );
            if ($validation->fails()) {
                return $this->apiResponseService->failed($validation->errors(), 500);
            }
            $createComments = $this->commentService->create($data);
            $response =  $this->apiResponseService->success(200, $createComments);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function getPostComments($id)
    {
        try {
            $getUserComments = $this->commentService->getPostComments($id);
            $response =  $this->apiResponseService->success(200, $getUserComments);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
