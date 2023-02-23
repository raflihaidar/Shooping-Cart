<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getDataProducts', 'App\Http\Controllers\ProductController@getData');
Route::post('/postDataProducts', 'App\Http\Controllers\ProductController@postData');
// Route::put('/putData', 'Mocking\Controllers\productController@putData');
// Route::patch('/patchData', 'Mocking\Controllers\productController@patchData');
// Route::delete('/deleteData/{id?}', 'Mocking\Controllers\productController@deleteData');