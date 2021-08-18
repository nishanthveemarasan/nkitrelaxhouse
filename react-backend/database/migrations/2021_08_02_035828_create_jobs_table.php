<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->integer('user_id');
            $table->string('emp_type', 10)->default('emp');
            $table->integer('emp_number');
            $table->string('job_title', 50);
            $table->enum('job_type', ['part-time', 'full-time']);
            $table->date('job_started_date');
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
        Schema::dropIfExists('job');
    }
}
