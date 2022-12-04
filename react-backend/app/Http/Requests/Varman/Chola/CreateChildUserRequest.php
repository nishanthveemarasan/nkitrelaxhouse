<?php

namespace App\Http\Requests\Varman\Chola;

use Illuminate\Foundation\Http\FormRequest;

class CreateChildUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'string', 'min:6'],

        ];
    }
}
