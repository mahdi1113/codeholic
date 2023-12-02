<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateReferenceRequest extends FormRequest
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
            'recive_id' => 'required',
            'mail_id' => 'required',
            'description' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'recive_id' => 'گیرنده',
            'mail_id' => 'نامه'
        ];
    }
}
