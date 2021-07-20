<?php

namespace App\Service;

use Illuminate\Support\Facades\Mail;
use App\Mail\sendRegisterConfirmMail;

class MailService
{
    public function sendRegisterConfirmEmail($data)
    {
        Mail::send(new sendRegisterConfirmMail($data));
    }
}
