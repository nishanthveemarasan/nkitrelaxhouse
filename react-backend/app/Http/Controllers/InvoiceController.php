<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Service\InvoiceService;
use Illuminate\Support\Facades\DB;
use App\Service\APIResponseService;
use App\Http\Requests\SetCompanyNameRequest;
use App\Http\Requests\GenerateInvoicePdfRequest;
use App\Http\Requests\UpdateBankDetailsRequest;
use App\Http\Requests\UpdateBillingDetailsRequest;
use App\Http\Requests\UpdateCompanyDetailsRequest;
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

    public function generatePdf(GenerateInvoicePdfRequest $request, CompanyInvoice $companyInvoice)
    {
        try {
            return $this->invoiceService->generateInvoicePdf($request->validated(), $companyInvoice);
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
    public function updateCompanyName(SetCompanyNameRequest $request, CompanyInvoice $companyInvoice)
    {
        try {
            DB::beginTransaction();
            $result = $this->invoiceService->updateCompanyName($request->validated(), $companyInvoice);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateCompanyDetails(UpdateCompanyDetailsRequest $request, CompanyInvoice $companyInvoice)
    {
        try {
            DB::beginTransaction();
            $result = $this->invoiceService->updateCompanyDetails($request->validated(), $companyInvoice);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateBillingDetails(UpdateBillingDetailsRequest $request, CompanyInvoice $companyInvoice)
    {
        try {
            DB::beginTransaction();
            $result = $this->invoiceService->updateBillingDetails($request->validated(), $companyInvoice);
            DB::commit();
            $response = $this->apiResponseService->success(200, $result);
            return $response;
        } catch (Exception $e) {
            DB::rollBack();
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function updateBankDetails(UpdateBankDetailsRequest $request, CompanyInvoice $companyInvoice)
    {
        try {
            DB::beginTransaction();
            $result = $this->invoiceService->updateBankDetails($request->validated(), $companyInvoice);
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
