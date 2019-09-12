<?php
/**
 * Created by PhpStorm.
 * User: gael
 * Date: 10/09/2019
 * Time: 14:47
 */

namespace App\Http\Controllers;

use App\Http\Resources\CityCollection;
use App\Http\Resources\CityResource;
use App\City;

class CityController extends Controller
{
    public function show(City $city){
        return new  CityResource($city);
    }

    public function index()
    {
        return CityResource::collection(City::all());
    }

}