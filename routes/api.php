<?php

use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SurveyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('survey', SurveyController::class);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::post('test', [AuthController::class,'test']);
});



Route::post('login', [AuthController::class, 'login']);
//role
Route::apiResource('role', RoleController::class);
//mail
Route::post('mail/store/{user}',[MailController::class, 'store']);
Route::post('mail/sentLetters',[MailController::class, 'sentLetters']);
Route::post('mail/receivedMails',[MailController::class, 'receivedMails']);
Route::post('mail/updateStatusMail/{mail}',[MailController::class, 'updateStatus']);
Route::post('mail/show/{mail}',[MailController::class,'show']);
Route::post('mail/allowedPersons/{id}',[MailController::class, 'allowedPersons']);

// Route::post('users', [UserController::class, 'apiIndex']);
// Route::apiResource('role',RoleController::class);
// Route::post('role',[RoleController::class ,'index']);
// Route::apiResource('mail', MailController::class);
