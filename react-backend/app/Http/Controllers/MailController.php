<?php

namespace App\Http\Controllers;

use App\Mail\SendOrderConfirmMail;
use App\Mail\sendRegisterConfirmMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail()
    {
        $data = array(
            'order_id' => 1634194490,
            'amount' => 598.3,
            'customer_details' =>
            array(
                'firstName' => 'Nishanth',
                'lastName' => 'Veemarasan',
                'email' => 'iamnishanthveema@gmail.com',
                'phone' => '+61-402457102',
                'lineOne' => '15, Rathmines road, Rathmines road, Rathmines road',
                'town' => 'Hawthorn east',
                'state' => 'VIC',
                'zip' => '3123',
                'country' => 'Australia',
            ),
            'order_details' =>
            array(
                0 =>
                array(
                    'id' => 4,
                    'itemname' => 'Vienna A18-46cm(black)',
                    'image_url' => 'https://nkitservice.com/relax/storage/app/public/storeProduct/vienna-18-chair-black-hero.png',
                    'count' => 2,
                    'unitPrice' => 144.25,
                    'discount' => 22,
                    'totalPrice' => 288.5,
                    'totalDiscount' => 44,
                ),
                1 =>
                array(
                    'id' => 4,
                    'itemname' => 'Vienna A18-46cm(walnet)',
                    'image_url' => 'https://nkitservice.com/relax/storage/app/public/storeProduct/vienna-18-chair-black-hero.png',
                    'count' => 1,
                    'unitPrice' => 144.25,
                    'discount' => 22,
                    'totalPrice' => 144.25,
                    'totalDiscount' => 22,
                ),
            ),
            'pay_method' => 'credit_card',
            'status' => 'paid',
            'created_at' => '2021/10/14',
        );
        // $data = array();
        // return view('user.email.order-confirmation', ['data' => $data]);
        $to_name = "Nishanth Vemmarasan";
        $to_email = "iamnishanthveema@gmail.com";
        // $data = array("name" => "Ogbonna Vitalis(sender_name)", "last_name" => "A test mail", 'username' => 'nishanthveema', 'password' => '1234564', 'email' => 'iamnishanthveema@gmail.com');
        try {
            // dd($data['customer_details']['email']);
            // Mail::send(new sendRegisterConfirmMail($data));
            Mail::send(new SendOrderConfirmMail($data));
            dd('hello');
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
