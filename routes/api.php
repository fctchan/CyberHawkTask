<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WindTurbineController;

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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

//Routing of API to get output JSON
Route::group(['prefix' => 'windturbine'], function (){
    Route::get('/', [WindTurbineController::class, 'printAll']);
    Route::get('{inputValue}', [WindTurbineController::class, 'printInput']);
});