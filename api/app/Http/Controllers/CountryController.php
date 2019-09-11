<?php

namespace App\Http\Controllers;

use App\Country;

class CountryController extends Controller
{
    public function index()
    {
        return Country::all()->toJson();
    }

    public function show(Country $country)
    {
        return $country->toJson();
    }
}
