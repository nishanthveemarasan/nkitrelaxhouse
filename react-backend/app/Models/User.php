<?php

namespace App\Models;

use App\Models\Job;
use App\Models\Likes;
use App\Models\Posts;
use App\Models\Address;
use App\Models\Comments;
use App\Models\UserLogs;
use App\Models\CompanyInvoice;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function logs()
    {
        return $this->hasMany(UserLogs::class);
    }

    public function posts()
    {
        return $this->hasMany(Posts::class);
    }
    public function comments()
    {
        return $this->hasMany(Comments::class, 'user_id');
    }
    public function likes()
    {
        return $this->hasMany(Likes::class, 'user_id');
    }
    public function address()
    {
        return $this->hasOne(Address::class, 'user_id');
    }
    public function jobs()
    {
        return $this->hasOne(Job::class, 'user_id');
    }

    public function CompanyInvoices()
    {
        return $this->hasMany(CompanyInvoice::class, 'user_id');
    }
}
