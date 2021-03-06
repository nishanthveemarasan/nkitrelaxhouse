<?php

namespace App\Http\Controllers;

use Throwable;
use App\Service\PostService;
use Illuminate\Http\Request;
use App\Service\APIResponseService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class postController extends Controller
{
    public $postService;
    public $apiResponseService;

    function __construct(PostService $postService, APIResponseService $apiResponseService)
    {
        $this->postService = $postService;
        $this->apiResponseService = $apiResponseService;
    }

    public function getAllPosts($id)
    {
        try {
            $getAllPosts = $this->postService->getAllPosts($id);
            $response =  $this->apiResponseService->success(200, $getAllPosts);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function getUserPosts($id)
    {
        try {
            $getUserPosts = $this->postService->getUserPosts($id);
            $response =  $this->apiResponseService->success(200, $getUserPosts);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getSinglePost($id)
    {
        try {
            $getUserPosts = $this->postService->getSinglePost($id);
            $response =  $this->apiResponseService->success(200, $getUserPosts);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function create(Request $request)
    {
        try {
            $userId = Auth::user()->id;
            $data = $request->all();
            $data['user_id'] = $userId;
            $validation = Validator::make(
                $data,
                [
                    'title' => 'required',
                    "content" => "required"

                ],
                $messages = [],
                [
                    'content' => 'Post Content',
                    'title' => 'Post Title'

                ]
            );
            if ($validation->fails()) {
                return $this->apiResponseService->failed($validation->errors(), 500);
            }
            $createPost = $this->postService->create($data);
            $response =  $this->apiResponseService->success(200, $createPost);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function edit(Request $request)
    {
        try {
            $data = $request->all();
            $validation = Validator::make(
                $data,
                [
                    'title' => 'required',
                    "content" => "required"

                ],
                $messages = [],
                [
                    'content' => 'Post Content',
                    'title' => 'Post Title'

                ]
            );
            if ($validation->fails()) {
                return $this->apiResponseService->failed($validation->errors(), 500);
            }

            $editPost = $this->postService->edit($data);
            $response =  $this->apiResponseService->success(200, $editPost);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function delete(Request $request)
    {
        try {
            $data = $request->all();
            $delete = $this->postService->delete($data['id'], $data['action']);
            $response =  $this->apiResponseService->success(200, $delete);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
