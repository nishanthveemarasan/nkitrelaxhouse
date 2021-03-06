<?php

namespace App\Service;

use App\Repository\PostRepository;
use Throwable;

class PostService
{
    public $postRepository;

    function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }
    public function getPostCount()
    {
        try {
            return $this->postRepository->getPostCount();
        } catch (Throwable $e) {
            return $e;
        }
    }

    public function getAllPosts($id)
    {
        try {
            if ($id === "all") {
                return $this->postRepository->getAllPosts();
            } else {
                return $this->postRepository->getSingleUserPosts($id);
            }
        } catch (Throwable $e) {
            return $e;
        }
    }
    public function getUserPosts($id)
    {
        try {
            return $this->postRepository->getUserPosts($id);
        } catch (Throwable $e) {
            return $e;
        }
    }
    public function getSinglePost($id)
    {
        try {
            return $this->postRepository->getSinglePost($id);
        } catch (Throwable $e) {
            return $e;
        }
    }

    public function create($data)
    {

        $createPost =  $this->postRepository->create($data);
        if ($createPost) {
            return array('msg' => "You Post has been Created Successfully !!!");
        }
    }

    public function edit($data)
    {
        $postId = $data['id'];

        unset($data['id']);
        $editPost =  $this->postRepository->edit($postId, $data);
        if ($editPost) {
            return array('msg' => "You Post has been Altered Succesfully!!!");
        }
    }
    public function delete($id, $action)
    {

        $deletePost =  $this->postRepository->delete($id, $action);
        if ($deletePost) {
            if ($action === 'active')
                return array('msg' => "Post has been Enabled Successfully!!!");
            else
                return array('msg' => "Post has been Disabled Successfully!!!");
        }
    }
}
