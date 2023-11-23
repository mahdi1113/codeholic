<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'description', 'user_id', 'receiv_id','status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
