<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/get-image', [TestController::class, 'store']);


Route::get('/image', function () {
    return view('image');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::prefix('invoice')->group(function () {
    Route::get('generate', [InvoiceController::class, 'create']);
    Route::post('create', [InvoiceController::class, 'generatePdf']);
});
