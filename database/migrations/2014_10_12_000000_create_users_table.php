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
            $table->string('first_name');
            $table->string('last_name');
            $table->string('father_name');
            $table->bigInteger('national_code');
            $table->bigInteger('phone');
            $table->bigInteger('certificate_number');
            $table->bigInteger('certificate_serial');
            $table->bigInteger('postal_codes');
            $table->bigInteger('telephone');
            $table->integer('telephone_extension');
            $table->text('address');
            $table->string('email')->unique();
            $table->date('birth_date');
            $table->enum('gender', ['male', 'female']);
            $table->enum('education_level', ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکترا']);
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
