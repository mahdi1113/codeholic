<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRoleRequest extends FormRequest
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
            'title' => 'required',
            'description' => 'nullable',
            'parent_id' => 'required'

        ];
    }

    // public function messages()
    // {
    //     return [
    //         'role_id.not_in' => 'مقدار :attribute نمی‌تواند 0 باشد.',
    //     ];
    // }

    // public function attributes()
    // {
    //     return [
    //         'role_id' => 'نقش',
    //     ];
    // }
}
