<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Mail;
use App\Models\Role;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'password',
        'password_confirmation',
        'first_name',
        'last_name',
        'father_name',
        'national_code',
        'gender',
        'birth_date',
        'certificate_number',
        'certificate_serial',
        'certificate_date',
        'certificate_place',
        'education_level',
        'phone',
        'email',
        'telephone',
        'telephone_extension',
        'postal_codes',
        'address',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // public function child()
    // {
    //     return $this->hasMany(User::class,'parent_id','id');
    // }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function mails()
    {
        return $this->hasMany(Mail::class);
    }

    public function references()
    {
        return $this->hasMany(Reference::class);
    }

    public function referralsReceived()
    {
        return $this->hasMany(Reference::class,'recive_id','id');
    }

}
