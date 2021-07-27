<?php

namespace App\Repository;

use App\Models\User;
use App\Models\UserLogs;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    public function getUserCount()
    {
        $totalUsers = User::get()->count();
        return $totalUsers;
    }

    public function getLogs()
    {
        $userLogs = UserLogs::join('users', 'users.id', '=', 'logs.user_id')
            ->select('users.name', 'logs.*')
            ->paginate(10);
        return $userLogs;
    }

    public function getUserLogs($id)
    {
        $userLogs = User::find($id)->logs()->paginate(10);
        return $userLogs;
    }

    public function getUser($id)
    {
        $userLogs = User::find($id)->toArray();
        return $userLogs;
    }

    public function getUsers()
    {
        $users = User::withCount(['posts', 'comments', 'likes'])->paginate(10);
        return $users;
    }

    public function editUserRole($id, $role)
    {
        $editRole = User::find($id);
        $editRole->roles = $role;
        $editRole->save();

        return $editRole;
    }

    public function disableUser($id, $status)
    {
        $disableUser = User::find($id);
        $disableUser->status =  $status;
        $disableUser->save();

        return $disableUser;
    }

    public function updateUser($id, $data)
    {
        $updateUser = User::where('id', $id)
            ->update($data);
        return $updateUser;
    }

    public function checkUsername($name)
    {
        $checkUser = User::where('username', $name)->count();
        return $checkUser;
    }
    public function create($data)
    {
        $insertData = array(
            'name' => $data['name'],
            'last_name' => $data['last_name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password'  => Hash::make($data['password']),
        );
        $create = User::create($insertData);
        return $create;
    }
    public function updateProfileImage($id, $imageUrl)
    {
        $updateImage = User::find($id);
        $updateImage->profile_photo_path = $imageUrl;
        $updateImage->save();
        return $updateImage;
    }
    public function updatePassword($id, $password)
    {
        return true;
        $update = User::where('id', (int)$id)->update([
            'password' => Hash::make($password),
        ]);
        return $update;
    }
}
