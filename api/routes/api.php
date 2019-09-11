<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('cities/{city}', 'CityController@show');
Route::get('cities', 'CityController@index');
Route::get('continents', 'ContinentController@index');
Route::get('countries', 'CountryController@index');
Route::get('countries/{country}', 'CountryController@show');
