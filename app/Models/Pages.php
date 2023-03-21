<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pages extends Model
{
    protected $fillable = [
        'slug_page',
        'user_id',
        'title',
        'content',
        'images',
        'counter',
        'publish'
    ];

    use HasFactory;
}
