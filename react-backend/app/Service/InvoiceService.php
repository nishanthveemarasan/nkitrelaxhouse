<?php

namespace App\Service;

use PDF;
use App\Models\User;
use Illuminate\Support\Str;
use App\Traits\InvoiceHelper;
use App\Models\CompanyInvoice;
use Illuminate\Support\Facades\Auth;

class InvoiceService
{
    use InvoiceHelper;

    public function generateInvoicePdf($data, CompanyInvoice $companyInvoice)
    {
        $total = 0;
        $i = 0;
        $array = [
            'data' => [],
            'invoiceDate' => null,
            'total' => 0,
            'invoiceFileDate' => null
        ];
        foreach ($data['invoiceData'] as $row) {
            $element = [
                'date' => $this->getDate($row['date']),
                'code' => $row['code'],
                'rate' => $this->getAmountFormat($row['rate'])
            ];
            if ($i == 0) {
                $array['invoiceDate'] = $element['date'];
                $array['invoiceFileDate'] = $this->getFileDate($row['date']);
            } else {
                if ($array['invoiceDate'] < $element['date']) {
                    $array['invoiceDate'] = $element['date'];
                    $array['invoiceFileDate'] = $this->getFileDate($row['date']);
                }
            }
            $total += (float)$row['rate'];
            array_push($array['data'], $element);
            $i++;
        }
        $array['total'] = $this->getAmountFormat($total);

        //store into invoice details table
        $companyInvoice->invoiceDetails()->create([
            'invoice_number' => (int)$data['invoiceNumber'],
            'invoiceData' => $array
        ]);

        $invoice = [
            'name' => $companyInvoice->company_name,
            'invoiceNumber' => $data['invoiceNumber'],
            'company_information' => $companyInvoice->company_information,
            'billing_address' => $companyInvoice->billing_address,
            'payment_details' => $companyInvoice->payment_details,
            'data' => $array
        ];
        $pdf = PDF::loadView('welcome', $invoice);
        $pdf->setPaper('A4', 'portrait');
        $fileName = "invoice_chola_transport_{$array['invoiceFileDate']}.pdf";
        return $pdf->download($fileName);
    }

    public function setCompanyName($data)
    {
        $user = Auth::user();

        $companyInvoice = $user->CompanyInvoices()->create([
            'company_name' => $data['companyName']
        ]);

        return array('msg' => "Company Name has been Updated Successfully!", 'uuid' => $companyInvoice->uuid, 'name' => $data['companyName']);
    }
    public function updateCompanyName($data, CompanyInvoice $companyInvoice)
    {
        $oldName = $companyInvoice->company_name;

        $companyInvoice->update([
            'company_name' => $data['companyName']
        ]);

        return array('msg' => "{$oldName} has been changed to {$data['companyName']}");
    }

    public function updateCompanyDetails($data, CompanyInvoice $companyInvoice)
    {
        $companyInvoice->update([
            'company_information' => $data
        ]);

        $companyInvoice->refresh();
        $sompanyName = Str::ucfirst(Str::lower($companyInvoice->company_name));

        return array('msg' => "{$sompanyName}'s details has been updated Successfully!");
    }

    public function updateBillingDetails($data, CompanyInvoice $companyInvoice)
    {
        $companyInvoice->update([
            'billing_address' => $data, true
        ]);

        $companyInvoice->refresh();
        $sompanyName = Str::ucfirst(Str::lower($data['billingCompanyName']));

        return array('msg' => "Billing address for {$sompanyName} has been updated Successfully!");
    }

    public function updateBankDetails($data, CompanyInvoice $companyInvoice)
    {
        $companyInvoice->update([
            'payment_details' => $data
        ]);

        $companyInvoice->refresh();
        $sompanyName = Str::ucfirst(Str::lower($companyInvoice->company_name));

        return array('msg' => "{$sompanyName}'s Bank details has been updated Successfully!");
    }

    public function info()
    {
        $user = Auth::user();
        $companyInfo = $user->CompanyInvoices;
        if (count($companyInfo) > 0) {
            $companyDetails = $companyInfo->first();
            $nextInvoiceNumber = $companyDetails->invoiceDetails()->max('invoice_number') + 1;
            return [
                'info' => $companyInfo->first(),
                'invoiceNumber' => $nextInvoiceNumber
            ];
        }
        return [
            'info' => null,
            'invoiceNumber' => 1
        ];
    }
}
