<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payme extends Model
{
    use HasFactory;
    protected $table = 'payme_lang_code';
    protected $connection = 'mysql';
    protected $guarded = [];
    public $timestamps = false;
}
