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
            'username' => 'required|string|size:10',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'father_name' => 'required|string',
            'national_code' => 'required',
            'phone' => 'required',
            'certificate_number' => 'required',
            'certificate_serial' => 'required',
            'postal_codes' => 'required',
            'telephone' => 'required',
            'telephone_extension' => 'required',
            'address' => 'required',
            'email' => 'required|email|unique:users',
            'birth_date' => 'required',
            'gender' => 'required',
            'education_level' => 'required',
            'password' => 'required|confirmed',
            'role_id' => 'required',
        ];
    }

    public function withValidator($validator)
    {
        $validator->stopOnFirstFailure();
    }

    public function failedValidation(Validator $validator)
    {
        $this->errorBag = 'custom_error_bag';
        parent::failedValidation($validator);
    }

    // public function attributes()
    // {
    //     // return [
    //     //     'role_id' => 'نقش',
    //     // ];
    // }
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
