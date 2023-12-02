<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reference extends Model
{
    protected $fillable = ['user_id','recive_id','mail_id','status','description'];
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reciveUser()
    {
        return $this->belongsTo(User::class,'recive_id','id');
    }

    public function mail()
    {
        return $this->belongsTo(Mail::class);
    }
}
