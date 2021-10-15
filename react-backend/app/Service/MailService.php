<?php

namespace App\Service;

use App\Mail\SendOrderConfirmMail;
use Illuminate\Support\Facades\Mail;
use App\Mail\sendRegisterConfirmMail;

class MailService
{
    public function sendRegisterConfirmEmail($data)
    {
        Mail::send(new sendRegisterConfirmMail($data));
    }

    public function sendOrderConfirmationEmail($data)
    {
        Mail::send(new SendOrderConfirmMail($data));
    }
}
