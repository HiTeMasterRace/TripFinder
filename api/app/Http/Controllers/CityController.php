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
use App\Country;
use App\Type;

class CityController extends Controller
{
    public function show(City $city){
        return new CityResource($city);;
    }

    public function index()
    {
        return CityResource::collection(City::all());
    }

    public function store()
    {
        $data = request()->validate([
            'country_id' => 'required|integer',
            'name' => 'required',
            'budget' => 'required',
            'temperature' => 'required',
            'description' => 'string',
            'location' => 'string',
            'filename' => 'string'
        ]);

        Country::findOrFail(request()->country_id);

        $city = City::create($data);

        if (request()->types) {
            foreach(request()->types as $type) {
                Type::findOrFail($type);
            }

            $city->types()->sync(request()->types);
        }

        return new CityResource($city);
    }

    public function update(City $city)
    {
        $data = request()->validate([
            'country_id' => 'required|integer',
            'name' => 'required',
            'budget' => 'required',
            'temperature' => 'required',
            'description' => 'string',
            'location' => 'string',
            'filename' => 'string'
        ]);

        Country::findOrFail(request()->country_id);

        $city->update($data);

        if (request()->types) {
            foreach(request()->types as $type) {
                Type::findOrFail($type);
            }

            $city->types()->sync(request()->types);
        }

        return new CityResource($city);
    }

    public function destroy(City $city)
    {
        $city->delete();
    }

    public function search()
    {
        $res = request();
        $cities = CityResource::collection(City::all());

        if (count($_GET) != 0) {
            if ($res->minTmp && $res->maxTmp) {
                $cities = $cities->whereBetween('temperature', [$res->minTmp, $res->maxTmp]);
            }

            if ($res->minBudget && $res->maxBudget) {
                $cities = $cities->whereBetween('budget', [$res->minBudget, $res->maxBudget]);
            }

            if ($res->country) {
                $cities = $cities->filter(function($city, $key) use($res) {
                    return strtolower($city->country->name) == strtolower($res->country);
                });
            }

            if ($res->continent) {
                $cities = $cities->filter(function($city, $key) use($res) {
                    return strtolower($city->country->continent->name) == strtolower($res->continent);
                });
            }

            if ($res->type) {
                $cities = $cities->filter(function($city, $key) use($res) {
                    return $city->types->some(function($type, $key) use ($res) {
                        return strtolower($type->name) == strtolower($res->type);
                    });
                });
            }

            return  $cities->flatten();
        }
        return $cities;
    }
}