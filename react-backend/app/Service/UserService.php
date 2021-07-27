<?php

namespace App\Service;

use Throwable;
use App\Service\MailService;
use App\Repository\UserRepository;

class UserService
{
    public $userRepository;
    public $mailService;
    function __construct(UserRepository $userRepository, MailService $mailService)
    {
        $this->userRepository = $userRepository;
        $this->mailService = $mailService;
    }
    public function getUserCount()
    {
        try {
            return $this->userRepository->getUserCount();
        } catch (Throwable $e) {
            return $e;
        }
    }

    public function getLogs()
    {
        try {
            return $this->userRepository->getLogs();
        } catch (Throwable $e) {
            return $e;
        }
    }

    public function getUserLogs($id)
    {

        return $this->userRepository->getUserLogs($id);
    }
    public function getUser($id)
    {

        return $this->userRepository->getUser($id);
    }
    public function getUsers()
    {

        return $this->userRepository->getUsers();
    }

    public function editUserRole($data)
    {
        $editRole =  $this->userRepository->editUserRole($data['id'], $data['role']);
        if ($editRole) {
            return array('msg' => "User's Role has been changed Successfully!!!");
        }
    }
    public function disableUser($data)
    {
        $status = '1';
        if ($data['currentStatus'] == '1') {
            $status = '0';
        }
        $disaleUSer =  $this->userRepository->disableUser($data['id'], $status);
        if ($disaleUSer) {
            if ($data['currentStatus'] == '1') {
                return array('msg' => "User has been disabled Successfully!!!");
            } elseif ($data['currentStatus'] == '0') {
                return array('msg' => "User has been Enabled Successfully!!!");
            }
        }
    }

    public function updateUser($data)
    {
        // return array('msg' => "Data has been updated Successfully!!!");
        $userId = $data['user_id'];
        unset($data['user_id']);
        $updateUser =  $this->userRepository->updateUser($userId, $data);
        if ($updateUser) {
            return array('msg' => "Data has been updated Successfully!!!");
        }
    }
    public function checkUsername($data)
    {
        $username = $data['userName'];
        $checkUser =  $this->userRepository->checkUsername($username);
        if ($checkUser) {
            return array('msg' => "failed");
        } else {
            return array('msg' => "success");
        }
    }
    public function create($data)
    {
        $create =  $this->userRepository->create($data);
        if ($create) {
            $this->mailService->sendRegisterConfirmEmail($data);
            return array('msg' => "Your Account has been created Successfully!!. Conformation Email has been sent to your mail!!");
        }
    }

    public function updateProfileImage($data, $path)
    {
        $id = $data['userId'];
        $imageUrl = $data['imageUrl'];
        $updateImage =  $this->userRepository->updateProfileImage($id, $imageUrl);
        if ($updateImage) {
            return array('msg' => "http://relaxreact.test/react-backend/storage/app/public/" . $path);
        }
    }
    public function updatePassword($id, $password)
    {
        $update = $this->userRepository->updatePassword($id, $password);
        if ($update) {
            return array('msg' => "Password has been reset successfully!!");
        }
    }
}
