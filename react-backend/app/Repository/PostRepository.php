<?php

namespace App\Repository;

use App\Models\Posts;
use App\Models\User;
use SebastianBergmann\Environment\Console;

class PostRepository
{
    public function getPostCount()
    {
        $postCount = Posts::get()->count();
        return $postCount;
    }

    public function getAllPosts()
    {
        // $posts = Posts::withCount('comments')->get();
        $posts = Posts::join('users', 'users.id', '=', 'posts.user_id')
            ->select('users.name', 'posts.*')
            ->withCount('comments', 'likes')
            ->with(['comments' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }, 'comments.users'])
            ->paginate(10);;
        return $posts;
    }

    public function getSingleUserPosts($id)
    {
        $posts = Posts::join('users', 'users.id', '=', 'posts.user_id')
            ->where('users.id', $id)
            ->select('users.name', 'posts.*')
            ->withCount('comments', 'likes')
            ->with(['comments' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }, 'comments.users'])
            ->paginate(10);;
        return $posts;
    }
    public function getSinglePost($id)
    {
        $posts = Posts::join('users', 'users.id', '=', 'posts.user_id')
            ->where('posts.id', $id)
            ->select('users.name', 'posts.*')
            ->withCount('comments', 'likes')
            ->get()->toArray();
        return $posts[0];
    }

    public function getUserPosts($id)
    {
        // $posts = User::withCount('posts')->get();
        $posts = User::find($id)->posts()->paginate(10);
        return $posts;
    }

    public function create($data)
    {
        $create = Posts::create($data);
        return $create;
    }

    public function edit($id, $data)
    {
        $update = Posts::find($id)->update($data);
        return $update;
    }

    public function delete($id, $type)
    {
        $delete = Posts::find($id)->update(['type' => $type]);
        return $delete;
    }

    public function postLikes($id)
    {
        $count = Posts::where('id', $id)->withCount('likes')->get()->toArray();
        return $count[0]['likes_count'];
    }
}
