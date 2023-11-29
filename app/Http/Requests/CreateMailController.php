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
            "title" => 'required',
            "description" => 'required',
<<<<<<< HEAD
            'receiv_id'=> 'required',
=======
            'recive_id'=> 'required',
>>>>>>> 8cf7049e7d29bd6e431d8a411b20b058518c9388
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
            'file' => 'nullable|mimes:pdf',
        ];
    }
    public function attributes()
    {
        return [
            'receiv_id' => 'گیرنده',
        ];
    }
}
