<?php

use App\Http\Controllers\SetRole;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RelationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('users',[UserController::class, 'index']);
Route::get('formRole/{user}',[SetRole::class, 'form'])->name('setFormRole');
Route::post('formRole/{user}',[SetRole::class, 'setForm'])->name('setRole');
Route::get('makeRelation/{user}',[RelationController::class, 'showRelationForm'])->name('showRelationForm');
Route::post('makeRelation/{user}',[RelationController::class, 'makeRelation'])->name('makeRelation');

