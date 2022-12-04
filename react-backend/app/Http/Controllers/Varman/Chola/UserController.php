<?php

namespace App\Http\Controllers\Varman\Chola;

use Exception;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Services\APIResponseService;
use App\Services\Varman\Chola\UserService;
use App\Http\Requests\Varman\Chola\CreateChildUserRequest;
use App\Http\Requests\Varman\Chola\ViewChildUserRequest;

class UserController extends Controller
{
    public $service;
    public $apiResponseService;
    public function __construct(UserService $service, APIResponseService $apiResponseService)
    {
        $this->service = $service;
        $this->apiResponseService = $apiResponseService;
    }

    public function createChild(CreateChildUserRequest $request)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->createChild($request->validated());
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function childList(ViewChildUserRequest $request)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->childList();
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
