<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Support\Str;
use App\Models\InvoiceDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyInformation extends Model
{
    use HasFactory;

    protected $table = 'company_information';

    protected $fillable = ['user_id', 'company_name', 'billing_address', 'company_address', 'company_contact_info', 'payment_details'];

    protected $casts = [
        'billing_address' => 'array',
        'company_address' => 'array',
        'company_contact_info' => 'array',
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

    public function cholaInvoices()
    {
        return $this->hasMany(CholaInvoices::class, 'company_information_id');
    }
}
