<?php

namespace App\Http\Controllers\Chola;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use App\Service\Chola\InvoiceService;
use Illuminate\Support\Facades\DB;
use App\Service\APIResponseService;
use App\Http\Requests\SetCompanyNameRequest;
use App\Http\Requests\GenerateInvoicePdfRequest;
use App\Http\Requests\UpdateBankDetailsRequest;
use App\Http\Requests\UpdateBillingDetailsRequest;
use App\Http\Requests\UpdateCompanyAddressRequest;
use App\Http\Requests\UpdateCompanyContactInfoRequest;
use App\Http\Requests\UpdateCompanyDetailsRequest;
use App\Models\CompanyInformation;
use App\Models\CompanyInvoice;

class InvoiceController extends Controller
{
    public $invoiceService;
    public $apiResponseService;
    public function __construct(InvoiceService $invoiceService, APIResponseService $apiResponseService)
    {
        $this->invoiceService = $invoiceService;
        $this->apiResponseService = $apiResponseService;
    }

    public function generatePdf(GenerateInvoicePdfRequest $request, CompanyInformation $companyInformation)
    {
        try {
            return $this->invoiceService->generateInvoicePdf($request->validated(), $companyInformation);
        } catch (Exception $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500, $e->getLine());
        }
    }

    public function setCompanyName(SetCompanyNameRequest $request)
    {
        try {
            DB::beginTransaction();
            $result = $this->invoiceService->setCompanyName($request->validated());
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
            $result = $this->invoiceService->updateCompanyName($request->validated(), $companyInformation);
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
            $result = $this->invoiceService->updateCompanyAddress($request->validated(), $companyInformation);
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
            $result = $this->invoiceService->updateCompanyInfo($request->validated(), $companyInformation);
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
            $result = $this->invoiceService->updateBillingDetails($request->validated(), $companyInformation);
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
            $result = $this->invoiceService->updateBankDetails($request->validated(), $companyInformation);
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
            $result = $this->invoiceService->info();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
