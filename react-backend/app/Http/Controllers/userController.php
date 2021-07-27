<?php

namespace App\Http\Controllers;

use Throwable;
use App\Service\UserService;
use Illuminate\Http\Request;
use App\Service\APIResponseService;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    public $userService;
    public $apiResponseService;

    function __construct(UserService $userService, APIResponseService $apiResponseService)
    {
        $this->userService = $userService;
        $this->apiResponseService = $apiResponseService;
    }
    public function getLogs()
    {
        try {
            $getUserLogs = $this->userService->getLogs();
            $response =  $this->apiResponseService->success(200, $getUserLogs);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getUserLogs($id)
    {
        try {
            $getUserLogs = $this->userService->getUserLogs($id);
            $response =  $this->apiResponseService->success(200, $getUserLogs);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getUser()
    {
        try {
            $id = 1;
            $getUserLogs = $this->userService->getUser($id);
            $response =  $this->apiResponseService->success(200, $getUserLogs);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function getUsers()
    {
        try {
            $getUserLogs = $this->userService->getUsers();
            $response =  $this->apiResponseService->success(200, $getUserLogs);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function editUserRole(Request $request)
    {
        try {
            $data = $request->all();
            $editUserRole = $this->userService->editUserRole($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function disableUser(Request $request)
    {

        try {
            $data = $request->all();
            $disableUser = $this->userService->disableUser($data);
            $response =  $this->apiResponseService->success(200, $disableUser);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function changeProfilePicture(Request $request)
    {

        try {
            $data = $request->all();
            $disableUser = $this->userService->disableUser($data);
            $response =  $this->apiResponseService->success(200, $disableUser);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateUser(Request $request)
    {
        try {
            $userId = 1;
            $data = $request->all();
            $data['user_id'] = $userId;
            $editUserRole = $this->userService->updateUser($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function checkUsername(Request $request)
    {
        try {
            $data = $request->all();
            $editUserRole = $this->userService->checkUsername($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function create(Request $request)
    {
        try {
            $data = $request->all();
            $validation = Validator::make(
                $data,
                [
                    'name' => 'required',
                    'last_name' => 'required',
                    'username' => 'required|unique:users',
                    'email' => 'required|email|unique:users',
                    'password' => 'required|confirmed',
                ],
                $messages = [],
                [
                    'name' => 'First Name',
                    'last_name' => 'Last Name',
                    'email' => 'Email Address',
                    'username' => 'User Name',
                    'phone_number' => 'Contact Number'
                ]
            );
            if ($validation->fails()) {
                return $this->apiResponseService->failed($validation->errors(), 500);
            }
            $editUserRole = $this->userService->create($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateProfileImage(Request $request)
    {
        try {
            $imagePath = $request->file('file');
            $imageName = $imagePath->getClientOriginalName();
            $userId = 1;
            $path = $request->file('file')->storeAs('profileImage', $imageName, 'public');
            $imageUrl = "http://nkservice.test/react-backend/storage/app/public/" . $path;
            $data = array(
                'userId' => $userId,
                'imageUrl' => $imageUrl
            );
            $editUserRole = $this->userService->updateProfileImage($data, $path);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $username = $request['userName'];
            $password = $request['password'];
            if (Auth::attempt([
                'username' => $username,
                'password' => $password
            ])) {
                $user = Auth::user();
                $resArr['token'] = $user->createToken('api-application')->accessToken;
                $resArr['name'] = $user->name;
                $resArr['id'] = $user->id;
                $response =  $this->apiResponseService->success(200, $resArr);
                return $response;
            } else {
                $response =  $this->apiResponseService->success(200, [], 'failed', ['error' => "Authentication failed"]);
                return $response;
                //return response()->json(['error' => "unAuthorised Access"], 203);
            }
        } catch (Throwable $e) {
        }
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }

    public function reset(Request $request)
    {
        try {
            $id = 1;
            $data = $request->all();
            $validation = Validator::make(
                $data,
                ['password' => 'required|confirmed'],
                $messages = ['password' => "Password"],
                []
            );
            if ($validation->fails()) {
                return $this->apiResponseService->failed($validation->errors(), 500);
            }
            $update = $this->userService->updatePassword($id, $data['password']);
            $response =  $this->apiResponseService->success(200, $update);
            return $response;
        } catch (Exception $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function error()
    {
        return $this->apiResponseService->failed(array('error' => "unAuthorised Access"), 201);
    }
}
