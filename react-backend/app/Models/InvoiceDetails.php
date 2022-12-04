<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InvoiceDetails extends Model
{
    use HasFactory;

    protected $fillable = ['company_invoice_id', 'company_information_id', 'invoice_number', 'invoiceData'];

    protected $casts = [
        'invoiceData' => 'array',
    ];

    protected $hidden = ['id', 'company_invoice_id', 'company_information_id'];

    public static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            if (!$model->uuid) {
                $model->uuid = (string)Str::orderedUuid();
            }
        });
    }

    public function companyInvoice()
    {
        return $this->belongsTo(CompanyInvoice::class, 'company_invoice_id');
    }
    public function companyInformation()
    {
        return $this->belongsTo(CompanyInformation::class, 'company_information_id');
    }
}
