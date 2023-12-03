<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('father_name')->nullable();
            $table->bigInteger('national_code')->nullable();
            $table->bigInteger('phone')->nullable();
            $table->bigInteger('certificate_number')->nullable();
            $table->bigInteger('certificate_serial')->nullable();
            $table->bigInteger('postal_codes')->nullable();
            $table->bigInteger('telephone')->nullable();
            $table->integer('telephone_extension')->nullable();
            $table->text('address')->nullable();
            $table->string('email')->unique();
            $table->date('birth_date')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->enum('education_level', ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکترا'])->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles')->default(2);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
