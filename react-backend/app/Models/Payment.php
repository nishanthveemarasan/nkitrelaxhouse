<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';
    protected $guarded = [];
    //getConfigFormAttribute

    public function setCustomerDetailsAttribute($value)
    {
        $this->attributes['customer_details'] = json_encode($value, true);
    }
    public function setOrderDetailsAttribute($value)
    {
        $this->attributes['order_details'] = json_encode($value, true);
    }
    public function getCustomerDetailsAttribute($value)
    {
        return json_decode($value, true);
    }
    public function getOrderDetailsAttribute($value)
    {
        return json_decode($value, true);
    }
}
