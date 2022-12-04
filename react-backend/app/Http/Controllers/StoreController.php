<?php

namespace App\Http\Controllers;

use Exception;
use Throwable;
use Illuminate\Http\Request;
use App\Service\StoreService;
use App\Service\CommonService;
use App\Service\APIResponseService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class StoreController extends Controller
{
    public $apiResponseService;
    public $storeService;
    function __construct(APIResponseService $apiResponseService, StoreService $storeService)
    {
        $this->apiResponseService = $apiResponseService;
        $this->storeService = $storeService;
    }
    public function cachedItem(Request $request)
    {
        $orderItems = array();
        $item = $request->all();
        //check if there is any item in the cache;
        $checkStore = CommonService::checkStoredItem('order');

        if ($checkStore) {
            //getPreviousOrder
            $getItem = CommonService::getItem('order');
            $orderItems = array_merge($orderItems, $getItem);
            //check if the item already exists in the array
            if (StoreService::checkIdExists($orderItems, $item['itemname'])) {
                //find index of the array;
                $getIndex = StoreService::getIndex($orderItems, $item['itemname']);
                //update the order
                $count = $orderItems[$getIndex]['count'] + 1;
                // if ($item['count'] > 0) {
                $orderItems[$getIndex]['count'] = $count;
                $orderItems[$getIndex]['totalDiscount'] = $orderItems[$getIndex]['totalDiscount'] + $item['discount'];
                $orderItems[$getIndex]['totalPrice'] = $count * $item['unitPrice'];
                //store into the table
                CommonService::storeItem('order', $orderItems);
                // } else {
                //     array_splice($orderItems, $getIndex, 1);
                // }
                return $this->apiResponseService->success(200, array());
            } else {
                $item['totalPrice'] = $item['unitPrice'];
                $item['totalDiscount'] = $item['discount'];
                array_push($orderItems, $item);
                CommonService::storeItem('order', $orderItems);
                return $this->apiResponseService->success(200, array());
            }
        } else {

            $item['totalPrice'] = $item['unitPrice'];
            $item['totalDiscount'] = $item['discount'];
            array_push($orderItems, $item);
            CommonService::storeItem('order', $orderItems);
            return $this->apiResponseService->success(200, array());
        }
    }

    public function removeProduct(Request $request)
    {
        $orderItems = array();
        $item = $request->all();

        $getItem = CommonService::getItem('order');
        if (count($getItem) > 0) {
            $orderItems = array_merge($orderItems, $getItem);
            //get index;
            $getIndex = StoreService::getIndex($orderItems, $item['itemname']);
            if ($getIndex !== -1) {
                $count = $orderItems[$getIndex]['count'] - 1;
                if ($count > 0) {
                    $orderItems[$getIndex]['count'] = $count;
                    $orderItems[$getIndex]['totalDiscount'] = $orderItems[$getIndex]['totalDiscount'] - $item['discount'];
                    $orderItems[$getIndex]['totalPrice'] = $count * $item['unitPrice'];
                    CommonService::storeItem('order', $orderItems);
                    return $this->apiResponseService->success(200, array());
                } else {
                    array_splice($orderItems, $getIndex, 1);
                    CommonService::storeItem('order', $orderItems);
                    return $this->apiResponseService->success(200, array());
                }
            }
        }
    }

    public function getCachedOrder()
    {
        $order = array();
        $checkStore = CommonService::checkStoredItem('order');
        if ($checkStore) {
            $order = CommonService::getItem('order');
        }
        return $this->apiResponseService->success(200, $order);
    }

    public function delete($id = null)
    {
        $order = array();
        $checkStore = CommonService::checkStoredItem('order');
        if ($checkStore) {
            $getOrder = CommonService::getItem('order');
            if ($id) {
                $getIndex = StoreService::getIndex($getOrder, $id);
                array_splice($getOrder, $getIndex, 1);
                CommonService::storeItem('order', $getOrder);
                return $this->apiResponseService->success(200, $order);
            } else {
                CommonService::clearItem('order');
                return $this->apiResponseService->success(200, $order);
            }
        } else {
            return $this->apiResponseService->success(200, $order);
        }
    }

    public function search($name)
    {
        try {
            $getData = $this->storeService->search($name);
            return $this->apiResponseService->success(200, $getData);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function storeProduct(Request $request)
    {
        try {
            $imagePath = $request->file('file');
            $imageName = $imagePath->getClientOriginalName();
            $path = $request->file('file')->storeAs('storeProduct', $imageName, 'public');
            $imageUrl = "https://nkitservice.com/relax/storage/app/public/" . $path;
            $data = array(
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'color' => $request->input('color'),
                'height' => $request->input('height'),
                'status' => $request->input('status'),
                'description' => $request->input('description'),
                'image_url' => $imageUrl,
            );
            if (strlen($request->input('offerPrice')) > 0) {
                $data['offer_price'] = $request->input('offerPrice');
            }
            $storeProduct = $this->storeService->storeProduct($data);
            return $this->apiResponseService->success(200, $storeProduct);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateProduct(Request $request)
    {
        try {
            $file = $request->input('image');
            $imageUrl = "";
            if (isset($file)) {
                $imageUrl = $request->input('image');
            } else {
                $imagePath = $request->file('file');
                $imageName = $imagePath->getClientOriginalName();
                $path = $request->file('file')->storeAs('storeProduct', $imageName, 'public');
                $imageUrl = "https://nkitservice.com/relax/storage/app/public/" . $path;
            }
            $data = array(
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'color' => $request->input('color'),
                'height' => $request->input('height'),
                'status' => $request->input('status'),
                'description' => $request->input('description'),
                'image_url' => $imageUrl,
            );
            if (strlen($request->input('offerPrice')) > 0) {
                $data['offer_price'] = $request->input('offerPrice');
            }
            $updateProduct = $this->storeService->updateProduct($request->input('id'), $data);
            return $this->apiResponseService->success(200, $updateProduct);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getProduct($row)
    {
        try {
            $data = $this->storeService->getProduct($row);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getSingleProduct($id)
    {
        try {
            $data = $this->storeService->getSingleProduct($id);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getSingleProductByName($name)
    {
        try {
            $data = $this->storeService->getSingleProductByName($name);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }

    public function cacheCustomer(Request $request)
    {
        $customerData = $request->all();
        CommonService::storeItem('customer_details', $customerData);
        return $this->apiResponseService->success(200, array());
    }

    public function getCacheCustomer()
    {
        $order = CommonService::getItem('customer_details');
        return $this->apiResponseService->success(200, $order);
    }

    public function clearCache()
    {
        CommonService::clearItem('order');
        CommonService::clearItem('customer_details');
        return $this->apiResponseService->success(200, array());
    }

    public function makePayment(Request $request)
    {
        try {
            $payMethod = $request->input('pay_method');
            $orderDetails = CommonService::getItem('order');
            $customerDetails = CommonService::getItem('customer_details');
            $payment = $this->storeService->makePayment($payMethod, $orderDetails, $customerDetails);

            return $this->apiResponseService->success(200, $payment);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function filterShopProductData(Request $request)
    {
        try {
            $data = $request->all();
            $filter = $this->storeService->filterShopProductData($data);
            return $this->apiResponseService->success(200, $filter);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function orderData($status, $method, $deliveryStatus)
    {
        try {
            $data = $this->storeService->orderData($status, $method, $deliveryStatus);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getOrderDetails($id)
    {
        try {
            $data = $this->storeService->getOrderDetails($id);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function orderDetails($id)
    {
        try {
            $data = $this->storeService->getOrderDetails($id);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function updateOrderStatus(Request $request)
    {
        try {
            $data = $request->all();
            $update = $this->storeService->updateOrderStatus($data);
            return $this->apiResponseService->success(200, $update);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getAllOrderIds($id)
    {
        try {
            $data = $this->storeService->getAllOrderIds($id);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
    public function getSingleOrder($id)
    {
        try {
            $data = $this->storeService->getSingleOrder($id);
            return $this->apiResponseService->success(200, $data);
        } catch (Throwable $e) {
            return $this->apiResponseService->failed($e->getMessage(), 500);
        }
    }
}
