<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_information', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->integer('user_id');
            $table->string('company_name', 100);
            $table->json('billing_address')->nullable(true);
            $table->json('company_address')->nullable(true);
            $table->json('company_contact_info')->nullable(true);
            $table->json('payment_details')->nullable(true);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_information');
    }
}
