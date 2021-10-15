<?php

namespace App\Service;

use App\Service\MailService;
use App\Repository\StoreRepository;



class StoreService
{
    public $storeRepository;
    public $mailService;
    function __construct(StoreRepository $storeRepository, MailService $mailService)
    {
        $this->storeRepository = $storeRepository;
        $this->mailService = $mailService;
    }
    public static function checkIdExists($array, $id)
    {
        $itemnames = array_column($array, 'itemname');
        $checkId = in_array($id, $itemnames);
        if ($checkId) {
            return true;
        } else {
            return false;
        }
    }

    public static function getIndex($array, $name)
    {
        for ($i = 0; $i < count($array); $i++) {
            if ($array[$i]['itemname'] == $name) {
                return $i;
            }
        }
        return -1;
    }

    public function search($name)
    {
        $data = $this->storeRepository->search($name);
        return $data;
    }

    public function storeProduct($data)
    {
        $storePRoduct = $this->storeRepository->storeProduct($data);
        return array(
            'status' => 'success',
            'msg' => 'product has been added successfully to the Store!!!'
        );
    }
    public function getProduct($row)
    {
        $data = $this->storeRepository->getProduct();
        return $data;
    }
    public function getSingleProduct($id)
    {
        $data = $this->storeRepository->getSingleProduct($id);
        return $data;
    }
    public function getSingleProductByName($name)
    {
        if (empty($name)) {
            $data = $this->storeRepository->getProduct(20);
        } else {
            $data = $this->storeRepository->getSingleProductByName($name);
        }
        return $data;
    }
    public function updateProduct($id, $data)
    {
        $update = $this->storeRepository->updateProduct($id, $data);
        return array(
            'status' => 'success',
            'msg' => 'product has been updated successfully to the Store!!!'
        );
    }
    public function filterShopProductData($data)
    {
        $filter = $this->storeRepository->filterShopProductData($data);
        return $filter;
    }
    public function makePayment($payMethod, $orderDetails, $customerDetails)
    {
        $amount = array_sum(array_column($orderDetails, 'totalPrice')) + 165.55;

        $data = array(
            'order_id' => time(),
            'amount' => round($amount, 2),
            'customer_details' => $customerDetails,
            'order_details' => $orderDetails,
            'pay_method' => $payMethod,
            'status' => 'paid',
        );
        $filter = $this->storeRepository->makePayment($data);
        $data['created_at'] = date("Y/m/d");
        // $this->mailService->sendOrderConfirmationEmail($data);
        return $data;
    }

    public function orderData($status, $method, $deliveryStatus)
    {
        $data = $this->storeRepository->orderData($status, $method, $deliveryStatus);
        return $data;
    }
    public function getOrderDetails($id)
    {
        $data = $this->storeRepository->getOrderDetails($id);
        return $data;
    }
    public function updateOrderStatus($data)
    {
        $data = $this->storeRepository->updateOrderStatus($data);
        return array('msg' => 'Updated');
    }
    public function getAllOrderIds($id)
    {
        $data = $this->storeRepository->getAllOrderIds($id);
        return $data;
    }
    public function getSingleOrder($id)
    {
        $data = $this->storeRepository->getSingleOrder($id);
        return $data;
    }
}
