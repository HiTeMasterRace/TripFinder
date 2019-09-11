<?php
/**
 * Created by PhpStorm.
 * User: gael
 * Date: 10/09/2019
 * Time: 14:47
 */

namespace App\Http\Controllers;


use App\City;

class CityController extends Controller
{
    public function show(City $city)
    {
        return $city->toJson();
    }

    public function index()
    {
        return City::all()->toJson();
    }

    public function search()
    {
        $res = request();

        if(count($_GET) != 0){
            $request = City::all();

            if($res['minTmp'] && $res['maxTmp']){
                 $request = $request->whereBetween('temperature', [$res->minTmp,$res->maxTmp]);
            }
            if($res['name']){
                 $request = $request->where('name', '=', $res->name);
            }
            if($res['minBudget'] && $res['maxBudget']){
                 $request = $request->whereBetween('budget', [$res->minBudget,$res->maxBudget]);
            }
            return  $request;
        }

        return $res;
    }
}