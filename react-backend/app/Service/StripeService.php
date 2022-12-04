<?php

namespace App\Service;

class StripeService
{
    public $publishable_key;
    public $secret_key;
    public $country_code;
    public $language_code;
    public $api_url;
    public $currency;

    function __construct()
    {
        $this->publishable_key = "pk_test_51JlliLGjGOwxj84LtZ4AqQnNhdCPkYZDprcaJdHV3BwxnFGguxtvc1vSbBEeVvF6TJsruAZTzDSsWaaAR1s6mWte00ezRpmuzz";
        $this->secret_key = "sk_test_51JlliLGjGOwxj84LBjyeBnVUOe7eMq74v8x8PEXuT78brIhlNEXHFQ2AHEGE1RDvoOisJVWdrOXdpZcKWCSu328X003api47U6";
        $this->country_code = "DE";
        $this->language_code = "de-DE";
        $this->api_url = "https://api.stripe.com/v1/sources";
        $this->currency = "EUR";
    }
}
