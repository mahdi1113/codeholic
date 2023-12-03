<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Contracts\Validation\Validator;
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
            'username' => 'required|string',
            'first_name' => 'nullable',
            'last_name' => 'nullable',
            'father_name' => 'nullable',
            'national_code' => 'nullable',
            'phone' => 'nullable',
            'certificate_number' => 'nullable',
            'certificate_serial' => 'nullable',
            'postal_codes' => 'nullable',
            'telephone' => 'nullable',
            'telephone_extension' => 'nullable',
            'address' => 'nullable',
            'email' => 'required|email|unique:users',
            'birth_date' => 'nullable',
            'gender' => 'nullable',
            'education_level' => 'nullable',
            'password' => 'required',
            'role_id' => 'required|numeric',
        ];
    }

    public function attributes()
    {
        return [
            'role_id' => 'نقش',
        ];
    }
}





















// 'first_name' => 'required|string',
//             'last_name' => 'required|string',
//             'father_name' => 'required|string',
//             'national_code' => 'required',
//             'phone' => 'required',
//             'certificate_number' => 'required',
//             'certificate_serial' => 'required',
//             'postal_codes' => 'required',
//             'telephone' => 'required',
//             'telephone_extension' => 'required',
//             'address' => 'required',
//             'email' => 'required|email|unique:users',
//             'birth_date' => 'required',
//             'gender' => 'required',
//             'education_level' => 'required',
//             'password'=> 'required|confirmed',
//             'role_id' => 'required',
