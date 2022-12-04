<?php

namespace App\Service\Chola;

use App\Models\CompanyInformation;
use PDF;
use App\Models\User;
use Illuminate\Support\Str;
use App\Traits\InvoiceHelper;
use App\Models\CompanyInvoice;
use Illuminate\Support\Facades\Auth;

class InvoiceService
{
    use InvoiceHelper;

    public function generateInvoicePdf($data, CompanyInformation $companyInformation)
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
        $companyInformation->cholaInvoices()->create([
            'invoice_number' => (int)$data['invoiceNumber'],
            'invoiceData' => $array
        ]);

        $invoice = [
            'name' => $companyInformation->company_name,
            'invoiceNumber' => $data['invoiceNumber'],
            'company_address' => $companyInformation->company_address,
            'company_contact_info' => $companyInformation->company_contact_info,
            'billing_address' => $companyInformation->billing_address,
            'payment_details' => $companyInformation->payment_details,
            'data' => $array
        ];
        $pdf = PDF::loadView('invoice', $invoice);
        $pdf->setPaper('A4', 'portrait');
        $fileName = "invoice_chola_transport_{$array['invoiceFileDate']}.pdf";
        return $pdf->download($fileName);
    }

    public function setCompanyName($data)
    {
        // $user = Auth::user();
        $user = User::find(11);

        $companyInvoice = $user->CompanyInformation()->create([
            'company_name' => $data['companyName']
        ]);

        return array('msg' => "Company Name has been Updated Successfully!", 'uuid' => $companyInvoice->uuid, 'name' => $data['companyName']);
    }
    public function updateCompanyName($data, CompanyInformation $companyInformation)
    {
        $oldName = $companyInformation->company_name;

        $companyInformation->update([
            'company_name' => $data['companyName']
        ]);

        return array('msg' => "{$oldName} has been changed to {$data['companyName']}");
    }

    public function updateCompanyAddress($data, CompanyInformation $companyInformation)
    {
        $companyInformation->update([
            'company_address' => $data
        ]);

        $companyInformation->refresh();
        $sompanyName = Str::ucfirst(Str::lower($companyInformation->company_name));

        return array('msg' => "{$sompanyName}'s Address has been updated Successfully!");
    }

    public function updateCompanyInfo($data, CompanyInformation $companyInformation)
    {
        $companyInformation->update([
            'company_contact_info' => $data
        ]);

        $companyInformation->refresh();
        $sompanyName = Str::ucfirst(Str::lower($companyInformation->company_name));

        return array('msg' => "{$sompanyName}'s Contact details has been updated Successfully!");
    }

    public function updateBillingDetails($data, CompanyInformation $companyInformation)
    {
        $companyInformation->update([
            'billing_address' => $data
        ]);

        $companyInformation->refresh();
        $sompanyName = Str::ucfirst(Str::lower($data['billingCompanyName']));

        return array('msg' => "Billing address for {$sompanyName} has been updated Successfully!");
    }

    public function updateBankDetails($data, CompanyInformation $companyInformation)
    {
        $companyInformation->update([
            'payment_details' => $data
        ]);

        $companyInformation->refresh();
        $sompanyName = Str::ucfirst(Str::lower($companyInformation->company_name));

        return array('msg' => "{$sompanyName}'s Bank details has been updated Successfully!");
    }

    public function info()
    {
        $user = Auth::user();
        $user = User::find(11);
        $companyDetails = $user->companyInformation;
        if ($companyDetails) {
            $nextInvoiceNumber = $companyDetails->invoiceDetails()->max('invoice_number') + 1;
            return [
                'info' => $companyDetails,
                'invoiceNumber' => $nextInvoiceNumber
            ];
        }
        return [
            'info' => null,
            'invoiceNumber' => 1
        ];
    }
}
