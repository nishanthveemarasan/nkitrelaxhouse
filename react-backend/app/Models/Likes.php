<?php

namespace App\Models;

use App\Models\Posts;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Likes extends Model
{
    use HasFactory;
    protected $table = 'likes';
    protected $connection = 'mysql';
    protected $guarded = [];

    public function posts()
    {
        return $this->belongsTo(Posts::class, 'post_id');
    }
}
