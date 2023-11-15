<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class SetRole extends Controller
{
    public function form(User $user)
    {
        $roles = Role::get();
        return view("formRole",compact("user","roles"));
    }

    public function setForm(User $user,Request $request)
    {

       $user->update([
        'role_id' => $request->role
       ]);

    }
}
