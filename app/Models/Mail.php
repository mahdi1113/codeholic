<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'description', 'user_id', 'receiv_id','status','image','file'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getImagePathAttribute()
    {
        return storage_path('app/public/images/' . $this->image);
    }

    public function getFilePathAttribute()
    {
        return storage_path('app/public/files/' . $this->file);
    }
}
