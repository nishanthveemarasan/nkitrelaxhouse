<?php

namespace App\Http\Controllers;

use Exception;
use Throwable;
use App\Models\User;
use App\Repository\UserRepository;
use App\Service\UserService;
use Illuminate\Http\Request;
use App\Service\APIResponseService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    public $userService;
    public $userRepository;
    public $apiResponseService;

    function __construct(UserService $userService, APIResponseService $apiResponseService, UserRepository $userRepository)
    {
        $this->userService = $userService;
        $this->apiResponseService = $apiResponseService;
        $this->userRepository = $userRepository;
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
            $id = Auth::user()->id;
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
            $userId = Auth::user()->id;
            $data = $request->all();
            $data['user_id'] = $userId;
            $editUserRole = $this->userService->updateUser($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateContactInfo(Request $request)
    {
        try {
            // $userId = Auth::user()->id;
            $data = $request->all();
            // $data['user_id'] = $userId;
            $editUserRole = $this->userService->updateContactInfo($data);
            $response =  $this->apiResponseService->success(200, $editUserRole);
            return $response;
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateJobInfo(Request $request)
    {
        try {
            $data = $request->all();
            $checkUser = $this->userRepository->checkJobUser($data['user_id']);
            if ($checkUser) {
                $jobData = $this->userService->updateJobInfo($data);
                $response =  $this->apiResponseService->success(200, $jobData);
                return $response;
            } else {
                $validation = Validator::make(
                    $data,
                    [
                        'emp_number' => 'bail|required|unique:job|digits:6'
                    ],
                    $messages = [],
                    [
                        'emp_number' => "Employee Number"
                    ]
                );
                if ($validation->fails()) {
                    return $this->apiResponseService->failed($validation->errors(), 500);
                }
                $jobData = $this->userService->createJobInfo($data);
                $response =  $this->apiResponseService->success(200, $jobData);
                return $response;
            }
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
            $userId = Auth::user()->id;
            $path = $request->file('file')->storeAs('profileImage', $imageName, 'public');
            $imageUrl = "https://nkitservice.com/relax/storage/app/public/" . $path;
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
                $resArr['id'] = $user->id;
                $resArr['name'] = $user->name;
                $resArr['role_id'] = $user->roles;
                $data = User::where('id', $user->id)->withCount(['posts', 'comments', 'likes'])->get()->toArray();
                $resArr['posts'] = $data[0]['posts_count'];
                $resArr['comments'] = $data[0]['comments_count'];
                $resArr['likes'] = $data[0]['likes_count'];
                $response =  $this->apiResponseService->success(200, $resArr);
                return $response;
            } else {
                $response =  $this->apiResponseService->failed("Authentication Failed: Incorrect Login Details", 500);
                return $response;
                //return response()->json(['error' => "unAuthorised Access"], 203);
            }
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
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
            // $id = Auth::user()->id;
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
            $update = $this->userService->updatePassword($data['user_id'], $data['password']);
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
