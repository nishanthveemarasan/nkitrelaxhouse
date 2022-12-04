<?php

use App\Http\Controllers\Chola\InvoiceController;
use App\Http\Controllers\Varman\Chola\CompanyController;
use App\Http\Controllers\Varman\Chola\InvoiceController as CholaInvoiceController;
use App\Http\Controllers\Varman\Chola\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('get', function () {
    dd('hello');
});
Route::prefix('transport')->group(function () {
    Route::prefix('invoice')->group(function () {
        Route::prefix('company')->group(function () {
            Route::get('info', [InvoiceController::class, 'info']);
            Route::post('set-name', [InvoiceController::class, 'setCompanyName']); //
            Route::prefix('{companyInformation:uuid}')->group(function () {
                Route::post('generate-invoice', [InvoiceController::class, 'generatePdf']);
                Route::patch('set-name', [InvoiceController::class, 'updateCompanyName']); //
                Route::patch('set-address', [InvoiceController::class, 'updateCompanyAddress']); //
                Route::patch('set-contact-info', [InvoiceController::class, 'updateCompanyInfo']); //
                Route::patch('set-billing-details', [InvoiceController::class, 'updateBillingDetails']); //
                Route::patch('set-bank-details', [InvoiceController::class, 'updateBankDetails']); //
            });
        });
    });
});

Route::prefix('chola')->name('chola.')->group(function () {
    Route::prefix('company')->name('company.')->controller(CompanyController::class)->group(function () {
        Route::get('info', 'info')->name('info');
        Route::post('name', 'setCompanyName')->name('name');
        Route::prefix('{companyInformation:uuid}')->group(function () {
            Route::patch('name', 'updateCompanyName');
            Route::patch('address', 'updateCompanyAddress')->name('address');
            Route::patch('contact', 'updateCompanyInfo')->name('contact');
            Route::patch('billing-info', 'updateBillingDetails')->name('billing.info');
            Route::patch('bank-details', 'updateBankDetails')->name('billing.details');
        });
    });
    Route::prefix('users')->name('users.')->controller(UserController::class)->group(function () {
        Route::post('create', 'createChild')->name('create.child');
        Route::get('list', 'childList')->name('child.list');
    });
    Route::prefix('invoice')->name('invoice.')->controller(CholaInvoiceController::class)->group(function () {
        Route::prefix('company/{companyInformation:uuid}')->group(function () {
            Route::post('create', 'generatePdf');
            Route::get('{cholaInvoice:uuid}/download', 'downloadPdf');
        });
        Route::get('list', 'list')->name('list');
    });
});
