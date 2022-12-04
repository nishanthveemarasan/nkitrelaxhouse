<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service\CommonService;
use App\Service\StripeService;

class PaymentController extends Controller
{
    public $stripeService;
    function __construct(StripeService $stripeService)
    {
        $this->stripeService = $stripeService;
    }
    public function index(Request $request)
    {
        $payMethod = $request->all();
        $pay_request = array();
        if ($payMethod['pay_method'] === 'klarna') {
            $orderDetails = CommonService::getItem('order');
            $customerDetails = CommonService::getItem('customer_details');
            $order = array(
                'order_id' => time(),
            );
            array_push($pay_request, $order, $orderDetails, $customerDetails);
            // dd($pay_request);
            //1634531215
            // CommonService::storeItem($orderDetails[0]['order_id'], $orderDetails);
            CommonService::storeItem($pay_request[0]['order_id'], $pay_request);
            // dd($pay_request);
            // $getOrderDetails = CommonService::getItem('1634532563');
            $createSource = $this->createKalrna($pay_request);
            // return redirect('http://localhost:3000/success');
            return redirect()->to($createSource['data']['klarna']['pay_now_redirect_url']);
        } else {
            return redirect('http://localhost:3000/');
        }
    }

    public function createKalrna($order)
    {
        // dd($order);
        $countryCode = $this->stripeService->country_code;
        $language = strtolower($this->stripeService->language_code);
        $locale = strtolower($language . "-" . $countryCode);
        $locale = $this->stripeService->language_code;
        $amount = array_sum(array_column($order[1], 'totalPrice')) + 165.55;
        $url = $this->stripeService->api_url;
        $sourceArray = array(
            "type" => "klarna",
            "amount" => $amount * 100,
            "currency" => strtolower($this->stripeService->currency),
            "klarna" => array(
                "product" => 'payment',
                "purchase_country" => $countryCode,
                "first_name" => $order[2]['firstName'],
                "last_name" => $order[2]['lastName'],
                "locale" => $locale,
                // "custom_payment_methods" => 'payin4,installments',
            ),
            "source_order" => array(
                "items" => array(
                    array(
                        "type" => 'sku',
                        "description" => "my shop items",
                        "quantity" => 1,
                        "currency" => strtolower($this->stripeService->currency),
                        "amount" => $amount * 100,
                    ),

                )
            ),
            "owner" => array(
                "email" => $order[2]['email'],
                // "phone" => (isset($shopify_request['x_customer_phone']))?$shopify_request['x_customer_phone']:'',
                "address" => array(
                    'city' => "Heimbach",
                    'country' => $countryCode,
                    'line1' => "Knesebeckstraße 95",
                    'postal_code' => "52396",
                    // 'state' => $shopify_request['x_customer_phone'],
                )
            ),
            "flow" => "redirect",
            "redirect" => array(
                "return_url" => url('klarna/response') . '?key=' . $order[0]['order_id']
            )
        );

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($sourceArray));

        // Set HTTP Header for POST request
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type: application/x-www-form-urlencoded",
            'Authorization: Bearer ' . $this->stripeService->secret_key
        ));

        // Submit the POST request
        $result = curl_exec($ch);
        $info = curl_getinfo($ch);

        if ($info['http_code'] == 200) {
            return ['status' => true, 'data' => json_decode($result, true)];
        } else {
            return ['status' => false, 'data' => json_decode($result, true)];
        }
    }

    public function kalrnaResponse(Request $request)
    {
        $response = $request->all();
        dd($response);
    }
}
