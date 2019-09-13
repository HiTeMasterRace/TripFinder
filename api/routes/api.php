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

Route::post('login','ConnectionController@login');

Route::post('users', 'UserController@store');

Route::get('cities', 'CityController@index');
Route::get('cities/{city}', 'CityController@show');

Route::get('countries', 'CountryController@index');
Route::get('countries/{country}', 'CountryController@show');

Route::get('continents', 'ContinentController@index');

Route::group(['middleware' => ['auth:api']], function() {
    Route::post('logout','ConnectionController@logout');

    Route::get('search', 'CityController@search');

    Route::get('users/{id}', 'UserController@show');
    Route::put('users/{id}', 'UserController@update');
    Route::delete('users/{id}', 'UserController@destroy');

    Route::get('me', 'ConnectionController@me');
});

Route::group(['middleware' => ['auth:api', 'admin']], function() {
    Route::post('cities', 'CityController@store');
    Route::patch('cities/{city}', 'CityController@update');
    Route::delete('cities/{city}', 'CityController@destroy');

    Route::get('types', 'TypeController@index');
    Route::get('types/{type}', 'TypeController@show');
});
