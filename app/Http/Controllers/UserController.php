<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('child')->get();
        return $users;
    }

    public function apiIndex(Request $request)
    {
        $users = User::with('child')->get();
        return response()->json($users);
    }
}
