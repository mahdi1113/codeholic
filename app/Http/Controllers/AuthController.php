<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function addUser(SignupRequest $request)
    {

        // return $request;

        // return $request;

        // $errors = $request->validator->errors()->getMessages();
        // return $errors;

        $data = $request->validated();
        // return $data;
        // $data = $request->all();
        // $data['role_id'] = (int) $data['role_id'];
        $user = User::create($data);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response(
                [
                    'error' => 'we have error',
                ],
                401,
            );
        }

        $user = Auth::user();
        // $token = $user->createToken('main')->withAccessTokenExpires(Carbon::now()->addHours(2))->plainTextToken;

        $token = $user->createToken('main');

        // Retrieve the token instance
        $personalAccessToken = $token->accessToken;

        // Set the expiration time (e.g., 2 hours from now)
        $personalAccessToken->expires_at = Carbon::now()->addHours(1);

        // Save the token to update the expires_at field
        $personalAccessToken->save();

        return response(['token' => $token->plainTextToken,'user' => $user], 200);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response([
            'success' => true,
        ]);
    }

    public function test()
    {
        return 'you are login';
    }
}
