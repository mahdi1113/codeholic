<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\ReferenceController;

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
    // Route::post('test', [AuthController::class, 'test']);

    //role
    Route::apiResource('role', RoleController::class);
    //mail
    // Route::post('mail/store/{user}', [MailController::class, 'store']);
    // Route::post('mail/sendMail', [MailController::class, 'sendMail']);
    // Route::post('mail/reciveMails/{id}', [MailController::class, 'AllreciveMails']);
    // Route::post('mail/reciveMailsNotViewed/{id}', [MailController::class, 'reciveMailsNotViewed']);
    Route::post('mail/updateStatusMail/{mail}', [MailController::class, 'updateStatus']);
    Route::post('mail/show/{mail}', [MailController::class, 'show']);

    ///////////////////////////////
    Route::post('au',function(){
        return Auth::user();
    });
});
// Route::post('addUser', [AuthController::class, 'addUser']);
Route::post('addUser', [AuthController::class, 'addUser']);
Route::post('mail/store/{user}', [MailController::class, 'store']);
Route::post('mail/sendMail', [MailController::class, 'sendMail']);
    Route::post('mail/reciveMails/{id}', [MailController::class, 'AllreciveMails']);
    Route::post('mail/reciveMailsNotViewed/{id}', [MailController::class, 'reciveMailsNotViewed']);
Route::post('login', [AuthController::class, 'login']);
Route::post('aa',function(){
    return User::find(3);
});

Route::post('test',[TestController::class,'test']);
Route::post('mail/allowedPersons/{user}', [MailController::class, 'allowedPersons']);

// reference
Route::post('reference/store/{user}',[ReferenceController::class, 'store']);
Route::post('reference/references/{user}',[ReferenceController::class, 'references']);
Route::post('reference/referralsReceived/{user}',[ReferenceController::class, 'referralsReceived']);
Route::post('reference/receivedReferralsNotView/{user}',[ReferenceController::class, 'receivedReferralsNotView']);
Route::post('reference/isFinished/{user}',[ReferenceController::class, 'isFinished']);
