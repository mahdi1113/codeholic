<?php

namespace App\Models;

<<<<<<< HEAD
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
=======
use Morilog\Jalali\Jalalian;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
>>>>>>> 3eaf55b55fb920eeeb1adcb44137509fe57149f8

class Mail extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'user_id', 'recive_id', 'status', 'image', 'file'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reciveUser()
    {
        return $this->belongsTo(User::class,'recive_id','id');
    }
///////////////////////////////
    // public function user2()
    // {
    //     return $this->belongsTo(User::class)->with('role');
    // }

    // public function reciveUser2()
    // {
    //     return $this->belongsTo(User::class,'recive_id','id')->with('role');
    // }
///////////////////////////////
    public function getImagePathAttribute()
    {
        return storage_path('app/public/images/' . $this->image);
    }

    public function getFilePathAttribute()
    {
        return storage_path('app/public/files/' . $this->file);
    }
    
    public function getCreatedAtAttribute($value)

    {

        return Carbon::createFromTimestamp(strtotime($value))->timezone(Config::get('app.timezone'))->toDateTimeString();

    }



    public function getUpdatedAtAttribute($value)

    {

        return Carbon::createFromTimestamp(strtotime($value))->timezone(Config::get('app.timezone'))->toDateTimeString();


    }
}
