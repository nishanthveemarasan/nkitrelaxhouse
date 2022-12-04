<?php

namespace App\Http\Controllers\Varman\Chola;

use Exception;
use Illuminate\Http\Request;
use App\Models\CompanyInformation;
use Illuminate\Support\Facades\DB;
use App\Services\APIResponseService;
use App\Http\Controllers\Controller;
use App\Services\Varman\Chola\CompanyService;
use App\Http\Requests\Varman\Chola\SetCompanyNameRequest;
use App\Http\Requests\Varman\Chola\UpdateBankDetailsRequest;
use App\Http\Requests\Varman\Chola\UpdateBillingDetailsRequest;
use App\Http\Requests\Varman\Chola\UpdateCompanyAddressRequest;
use App\Http\Requests\Varman\Chola\UpdateCompanyContactInfoRequest;

class CompanyController extends Controller
{
    public $service;
    public $apiResponseService;
    public function __construct(CompanyService $service, APIResponseService $apiResponseService)
    {
        $this->service = $service;
        $this->apiResponseService = $apiResponseService;
    }

    public function setCompanyName(SetCompanyNameRequest $request)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->setCompanyName($request->validated());
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateCompanyName(SetCompanyNameRequest $request, CompanyInformation $companyInformation)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->updateCompanyName($request->validated(), $companyInformation);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateCompanyAddress(UpdateCompanyAddressRequest $request, CompanyInformation $companyInformation)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->updateCompanyAddress($request->validated(), $companyInformation);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateCompanyInfo(UpdateCompanyContactInfoRequest $request, CompanyInformation $companyInformation)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->updateCompanyInfo($request->validated(), $companyInformation);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateBillingDetails(UpdateBillingDetailsRequest $request,  CompanyInformation $companyInformation)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->updateBillingDetails($request->validated(), $companyInformation);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateBankDetails(UpdateBankDetailsRequest $request, CompanyInformation $companyInformation)
    {
        try {
            DB::beginTransaction();
            $result = $this->service->updateBankDetails($request->validated(), $companyInformation);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function info()
    {
        try {
            $result = $this->service->info();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
