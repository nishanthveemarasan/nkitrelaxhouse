<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\payme;
use Illuminate\Http\Request;
use App\Service\APIResponseService;
use Facade\Ignition\DumpRecorder\Dump;

class TestController extends Controller
{
    public function store(Request $request)
    {
        $imagePath = $request->file('file');
        $imageName = $imagePath->getClientOriginalName();
        $userId = $request['userId'];
        $path = $request->file('file')->storeAs('profileImage', $imageName, 'public');
        $imageUrl = "http://relaxreact.test/react-backend/storage/app/public/" . $path;
        $updateImage = User::find($userId);
        $updateImage->profile_photo_path = $imageUrl;
        $updateImage->save();
        return $updateImage;
        if ($updateImage) {
            return array('msg' => "http://relaxreact.test/react-backend/storage/app/public/" . $path);
        }
    }

    public function csv(Request $request)
    {
        // $file = $request->file('file');
        $file = $_FILES['file']['name'];
        dd($file);
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $tempPath = $file->getRealPath();
        $fileSize = $file->getSize();
        $mimeType = $file->getMimeType();
        $valid_extension = array("csv");

        $location = 'uploads';

        // 2MB in Bytes
        $maxFileSize = 2097152;
        $valid_extension = array("csv");
        // Check file extension
        if (!in_array(strtolower($extension), $valid_extension)) {
        } elseif ($fileSize >= $maxFileSize) {
        } else {
        }
        // Upload file
        $file->move($location, $filename);

        // Import CSV to Database
        $filepath = public_path($location . "/" . $filename);

        // Reading file
        $file = fopen($filepath, "r");

        $importData_arr = array();
        $i = 0;

        while (($filedata = fgetcsv($file, 1000, ",")) !== FALSE) {
            $num = count($filedata);


            for ($c = 0; $c < $num; $c++) {
                $importData_arr[$i][] = $filedata[$c];
            }
            $i++;
        }
        fclose($file);
        return $importData_arr[0];
    }

    public function uploadCsv()
    {
        $default = array(
            'eng' => 'Payment Failed',
            'tc' => '支付失敗',
            'sc' => '支付失败',
        );
        $status = 'PR007tt';
        $code = 'eng';
        $getResult = payme::where('code', $status)->get()->toArray();
        $shopifyMessage = isset($getResult[0]) ? $getResult[0][$code] : $default[$code];
        dd($shopifyMessage);

        $data = array(
            0 =>
            array(
                'ResponseCode' => 'PR001',
                'English' => 'Request for payment initiated',
                'traditional_chinese' => '發起付款請求',
                'simplified_chinese' => '发起付款请求',
            ),
            1 =>
            array(
                'ResponseCode' => 'PR007',
                'English' => 'Payment request expired',
                'traditional_chinese' => '付款請求已過期',
                'simplified_chinese' => '付款请求已过期',
            ),
            2 =>
            array(
                'ResponseCode' => 'PR004',
                'English' => 'for Payment Rejected',
                'traditional_chinese' => '付款被拒',
                'simplified_chinese' => '付款被拒',
            ),
            3 =>
            array(
                'ResponseCode' => 'PR005',
                'English' => 'Payment success',
                'traditional_chinese' => '付款成功',
                'simplified_chinese' => '付款成功',
            ),
            4 =>
            array(
                'ResponseCode' => 'EW001 - EW008, EW012',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            5 =>
            array(
                'ResponseCode' => 'EW2001',
                'English' => 'Sorry, we were unable to confirm your payment status. Please contact the store to manually confirm the status of your order.',
                'traditional_chinese' => '抱歉，我們無法確認您的付款狀態。 請聯繫商店以確認您的訂單狀態。',
                'simplified_chinese' => '抱歉，我们无法确认您的付款状态。 请联系商店以确认您的订单状态。',
            ),
            6 =>
            array(
                'ResponseCode' => 'EW2005',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            7 =>
            array(
                'ResponseCode' => 'EW2017',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            8 =>
            array(
                'ResponseCode' => 'EW2035',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            9 =>
            array(
                'ResponseCode' => 'EW2036',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            10 =>
            array(
                'ResponseCode' => 'EW2037',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            11 =>
            array(
                'ResponseCode' => 'EW2038',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            12 =>
            array(
                'ResponseCode' => 'EW2039',
                'English' => 'Payment failed. Please contact customer support for diagnosis and further steps.',
                'traditional_chinese' => '付款失敗。請聯繫客戶服務讓我們提供進一步的支援',
                'simplified_chinese' => '付款失败。请联系客户服务让我们提供进一步的支援',
            ),
            13 =>
            array(
                'ResponseCode' => 'EA000',
                'English' => 'The API gateway experienced an unexpected error, please contact support',
                'traditional_chinese' => 'API gateway 遇到意外錯誤，請聯繫支援',
                'simplified_chinese' => 'API gateway 遇到意外错误，请联系支援',
            ),
            14 =>
            array(
                'ResponseCode' => 'EA001',
                'English' => 'The API backend has rejected your request due to an authentication issue',
                'traditional_chinese' => '由於身份驗證問題，API backend 拒絕了您的請求',
                'simplified_chinese' => '由于身份验证问题，API backend 拒绝了您的请求',
            ),
            15 =>
            array(
                'ResponseCode' => 'EA002',
                'English' => 'The API backend has rejected the request because it does not match the expected format as expressed by the specification. e.g. missing headers, incorrect values formats or body format.',
                'traditional_chinese' => 'API backend 拒絕了該請求，因為它與預期格式不匹配。例如，缺少標頭、不正確的值格式或正文格式。',
                'simplified_chinese' => 'API backend 拒绝了该请求，因为它与预期格式不匹配。例如，缺少标头、不正确的值格式或正文格式。',
            ),
            16 =>
            array(
                'ResponseCode' => 'EA003',
                'English' => 'The API backend experienced an un expected error, please contact support',
                'traditional_chinese' => 'API backend 出現意外錯誤，請聯繫支援',
                'simplified_chinese' => 'API backend 出现意外错误，请联系支援',
            ),
            17 =>
            array(
                'ResponseCode' => 'NA',
                'English' => 'The API did not respond in time and the request was cancelled',
                'traditional_chinese' => 'API沒有及時回應，請求被取消',
                'simplified_chinese' => 'API没有及时回应，请求被取消',
            ),
            18 =>
            array(
                'ResponseCode' => 'EA008',
                'English' => 'Missing or incorrect Accept header in the request',
                'traditional_chinese' => '請求中缺少或有不正確的接受標頭',
                'simplified_chinese' => '请求中缺少或有不正确的接受标头',
            ),
            19 =>
            array(
                'ResponseCode' => 'EA009',
                'English' => 'Rate limit of APIM exceeded, check each request has a unique Trace-Id header value, contact support of this doesn\'t resolve your issue',
                'traditional_chinese' => '超出 APIM 的限制，請檢查每個請求是否具有唯一的 Trace-Id 標頭值，聯繫支援人員並不能解決您的問題',
                'simplified_chinese' => '超出 APIM 的限制，请检查每个请求是否具有唯一的 Trace-Id 标头值，联系支援人员并不能解决您的问题',
            ),
            20 =>
            array(
                'ResponseCode' => 'EA014',
                'English' => 'Request to create a payment request uses an invalid currency code, must be "HKD"',
                'traditional_chinese' => '創建付款請求時使用了無效的貨幣代碼，必須是 "HKD"',
                'simplified_chinese' => '创建付款请求时使用了无效的货币代码，必须是 "HKD"',
            ),
            21 =>
            array(
                'ResponseCode' => 'EA015',
                'English' => 'paymentRequestInputModel\': field \'effectiveDuration\' must be greater than or equal to 15; rejected value',
                'traditional_chinese' => 'paymentRequestInputModel\': field \'effectiveDuration\'  必須大於或等於 15； rejected value',
                'simplified_chinese' => 'paymentRequestInputModel\': field \'effectiveDuration\'  必须大于或等于 15； rejected value',
            ),
            22 =>
            array(
                'ResponseCode' => 'EA017',
                'English' => 'Request to create a payment request uses an invalid total amount, check api documentation for limits',
                'traditional_chinese' => '創建付款請求時使用了無效的總金額，請查看 API documentation 以了解限制',
                'simplified_chinese' => '创建付款请求时使用了无效的总金额，请查看 API documentation 以了解限制',
            ),
            23 =>
            array(
                'ResponseCode' => 'EA018',
                'English' => 'Missing or incorrect Content-Type header in the request with content',
                'traditional_chinese' => '內容請求中缺少或有不正確的 Content-Type 標頭',
                'simplified_chinese' => '内容请求中缺少或有不正确的 Content-Type 标头',
            ),
            24 =>
            array(
                'ResponseCode' => 'EA019',
                'English' => 'Invalid RFC3339 date format',
                'traditional_chinese' => '無效的 RFC3339 日期格式',
                'simplified_chinese' => '无效的 RFC3339 日期格式',
            ),
            25 =>
            array(
                'ResponseCode' => 'EA020',
                'English' => 'Service Request Validation Failed',
                'traditional_chinese' => '服務請求驗證失敗',
                'simplified_chinese' => '服务请求验证失败',
            ),
            26 =>
            array(
                'ResponseCode' => 'EB003',
                'English' => 'Account related, contact support',
                'traditional_chinese' => '賬號相關，聯繫支援',
                'simplified_chinese' => '账号相关，联系支援',
            ),
            27 =>
            array(
                'ResponseCode' => 'EB004, EB005, EB006	',
                'English' => 'Internal server error, contact support',
                'traditional_chinese' => '內部服務器錯誤，聯繫支援',
                'simplified_chinese' => '内部服务器错误，联系支援',
            ),
            28 =>
            array(
                'ResponseCode' => 'EB007',
                'English' => 'The API backend has rejected your request as QR code has expired',
                'traditional_chinese' => '由於二維碼已過期，API  backend 拒絕了您的請求',
                'simplified_chinese' => '由于二维码已过期，API  backend 拒绝了您的请求',
            ),
            29 =>
            array(
                'ResponseCode' => 'EB008',
                'English' => 'PayCode not found',
                'traditional_chinese' => '找不到付款碼',
                'simplified_chinese' => '找不到付款码',
            ),
            30 =>
            array(
                'ResponseCode' => 'EB009',
                'English' => 'No data exists for the transaction ID provided',
                'traditional_chinese' => '所提供的 transaction ID 沒有數據',
                'simplified_chinese' => '所提供的 transaction ID 没有数据',
            ),
            31 =>
            array(
                'ResponseCode' => 'EB010',
                'English' => 'Refund amount entered > net refundable amount',
                'traditional_chinese' => '輸入的退款金額 > 可退款金額',
                'simplified_chinese' => '输入的退款金额 > 可退款金额',
            ),
            32 =>
            array(
                'ResponseCode' => 'EB011',
                'English' => 'Refund amount entered > wallet balance',
                'traditional_chinese' => '輸入的退款金額 > 錢包餘額',
                'simplified_chinese' => '输入的退款金额 > 钱包余额',
            ),
            33 =>
            array(
                'ResponseCode' => 'EB012',
                'English' => 'Blocked by business rules.',
                'traditional_chinese' => '被業務規則阻止。',
                'simplified_chinese' => '被业务规则阻止。',
            ),
            34 =>
            array(
                'ResponseCode' => 'EB013',
                'English' => 'Blocked by business rules.',
                'traditional_chinese' => '被業務規則阻止。',
                'simplified_chinese' => '被业务规则阻止。',
            ),
            35 =>
            array(
                'ResponseCode' => 'EB020',
                'English' => 'The API backend has rejected your request as QR code is in aborted state',
                'traditional_chinese' => '由於二維碼處於中止狀態，API backend 拒絕了您的請求',
                'simplified_chinese' => '由于二维码处于中止状态，API backend 拒绝了您的请求',
            ),
            36 =>
            array(
                'ResponseCode' => 'EB021',
                'English' => 'The API backend has rejected your request as transaction is already completed',
                'traditional_chinese' => 'API backend 拒絕了您的請求，因為交易已經完成',
                'simplified_chinese' => 'API backend 拒绝了您的请求，因为交易已经完成',
            ),
            37 =>
            array(
                'ResponseCode' => 'EB022',
                'English' => 'The API backend has rejected your request as the QR code payment is currently being processed.',
                'traditional_chinese' => 'API backend 拒絕了您的請求，因為當前正在處理二維碼付款。',
                'simplified_chinese' => 'API backend 拒绝了您的请求，因为当前正在处理二维码付款。',
            ),
            38 =>
            array(
                'ResponseCode' => 'any',
                'English' => 'Payment Failed',
                'traditional_chinese' => '支付失敗',
                'simplified_chinese' => '支付失败',
            ),
        );

        for ($i = 0; $i < count($data); $i++) {
            $array = array(
                'code' => $data[$i]['ResponseCode'],
                'eng' => $data[$i]['English'],
                'tc' => $data[$i]['traditional_chinese'],
                'sc' => $data[$i]['simplified_chinese'],
            );

            payme::create($array);
        }

        dd('done');
    }
}
