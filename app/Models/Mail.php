<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;
<<<<<<< HEAD
=======

    protected $fillable = [ 'title', 'description', 'user_id', 'receiv_id','status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
>>>>>>> 6744f96f7d8a73cc5453f1db786ebe5f96ffe1dd
}
