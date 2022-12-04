<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyInvoice extends Model
{
    use HasFactory;

    protected $table = 'company_invoice_details';

    protected $fillable = ['user_id', 'company_name', 'billing_address', 'company_information', 'payment_details'];

    protected $casts = [
        'billing_address' => 'array',
        'company_information' => 'array',
        'payment_details' => 'array',
    ];

    protected $hidden = ['id', 'user_id'];

    public static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            if (!$model->uuid) {
                $model->uuid = (string)Str::orderedUuid();
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function invoiceDetails()
    {
        return $this->hasMany(InvoiceDetails::class, 'company_invoice_id');
    }
}
