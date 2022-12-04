<?php

namespace App\Repository;

use App\Models\Payment;
use App\Models\Products;
use App\Models\StoreProduct;
use Illuminate\Support\Facades\DB;

class StoreRepository
{
    public function search($name)
    {
        $data = StoreProduct::where('name', 'like', '%' . $name . '%')->select('name')->get()->toArray();
        return $data;
    }

    public function storeProduct($data)
    {
        $store = StoreProduct::create($data);
        return true;
    }

    public function getProduct()
    {
        $data = StoreProduct::paginate(30);
        return $data;
    }
    public function getSingleProduct($id)
    {
        $data = StoreProduct::where('id', $id)->get()->toArray();
        if (count($data) === 1) {
            return $data[0];
        }
        return "";
    }
    public function getSingleProductByName($name)
    {
        $data = StoreProduct::where('name', 'LIKE', '%' . $name . '%')->paginate(20);
        return $data;
    }
    public function updateProduct($id, $data)
    {
        $update = StoreProduct::where("id", $id)->update($data);
        return true;
    }

    public function filterShopProductData($data)
    {
        // dd($data);
        $query = StoreProduct::where('status', 'active');
        if (isset($data['category'])) {
            if ($data['category'] === 'pricehigh') {
                if (isset($data['color']) and count($data['color']) > 0) {
                    for ($i = 0; $i < count($data['color']); $i++) {
                        $query->orWhere('color', 'LIKE', '%' . $data['color'][$i] . '%');
                    }
                }
                if (isset($data['height']) and count($data['height']) > 0) {
                    for ($i = 0; $i < count($data['height']); $i++) {
                        $query->orWhere('height', 'LIKE', '%' . $data['height'][$i] . '%');
                    }
                }
                $query->orderBy('price', 'desc');
            } elseif ($data['category'] === 'pricelow') {
                $query->orderBy('price', 'asc');
                if (isset($data['color']) and count($data['color']) > 0) {
                    for ($i = 0; $i < count($data['color']); $i++) {
                        $query->orWhere('color', 'LIKE', '%' . $data['color'][$i] . '%');
                    }
                }
                if (isset($data['height']) and count($data['height']) > 0) {
                    for ($i = 0; $i < count($data['height']); $i++) {
                        $query->orWhere('height', 'LIKE', '%' . $data['height'][$i] . '%');
                    }
                }
            } elseif ($data['category'] === 'new') {
                if (isset($data['color']) and count($data['color']) > 0) {
                    for ($i = 0; $i < count($data['color']); $i++) {
                        $query->orWhere('color', 'LIKE', '%' . $data['color'][$i] . '%');
                    }
                }
                if (isset($data['height']) and count($data['height']) > 0) {
                    for ($i = 0; $i < count($data['height']); $i++) {
                        $query->orWhere('height', 'LIKE', '%' . $data['height'][$i] . '%');
                    }
                }
                $query->orderBy('created_at', 'desc');
            } elseif ($data['category'] === 'offer') {
                if (isset($data['color']) and count($data['color']) > 0) {
                    for ($i = 0; $i < count($data['color']); $i++) {
                        $query->orWhere('color', 'LIKE', '%' . $data['color'][$i] . '%');
                    }
                }
                if (isset($data['height']) and count($data['height']) > 0) {
                    for ($i = 0; $i < count($data['height']); $i++) {
                        $query->orWhere('height', 'LIKE', '%' . $data['height'][$i] . '%');
                    }
                }
                $query->whereNotNull('offer_price');
                $query->orderBy('updated_at', 'desc');
            } else {
                if (isset($data['color']) and count($data['color']) > 0) {
                    for ($i = 0; $i < count($data['color']); $i++) {
                        $query->orWhere('color', 'LIKE', '%' . $data['color'][$i] . '%');
                    }
                }
                if (isset($data['height']) and count($data['height']) > 0) {
                    for ($i = 0; $i < count($data['height']); $i++) {
                        $query->orWhere('height', 'LIKE', '%' . $data['height'][$i] . '%');
                    }
                }
            }
        }

        $result = $query->paginate(30);
        return $result;
    }

    public function makePayment($data)
    {
        $store = Payment::create($data);
        return $store;
    }
    public function orderData($status, $method, $deliveryStatus)
    {
        $query = Payment::WhereNotNull('created_at');
        if ($status !== 'all') {
            $query->where('status', $status);
        }
        if ($method !== 'all') {
            $query->where('pay_method', $method);
        }
        if ($deliveryStatus !== 'all') {
            $query->where('delivery_status', $deliveryStatus);
        }
        $query->orderBy('created_at', 'desc');
        $result = $query->paginate(15);
        // $result = Payment::paginate(10);
        // dd($result);
        return $result;
    }
 
    public function getOrderDetails($id)
    {
        $data = Payment::where('id', $id)->get()->toArray();
        return $data[0];
    }
    public function updateOrderStatus($data)
    {
        $update = Payment::where("id", $data['id'])->update([
            'delivery_status' => $data['delivery_status']
        ]);
        return $update;
    }
    public function getAllOrderIds($id)
    {
        $data = Payment::where('order_id', 'like', '%' . $id . '%')->select('order_id')->get()->toArray();
        return $data;
    }
    public function getSingleOrder($id)
    {
        $data = Payment::where('order_id', $id)->get()->toArray();
        return $data;
    }
}
