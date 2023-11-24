<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;


class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email'=> 'required|email|unique:users',
            'password'=> 'required|confirmed',
            // 'role_id' => 'required',
            Password::min(8)->mixedCase()->numbers()->symbols(),
            'role_id'=> 'required',
        ];
    }
    // public function attributes()
    // {
    //     // return [
    //     //     'role_id' => 'نقش',
    //     // ];
    // }
}
