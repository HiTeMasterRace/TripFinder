<?php

namespace App\Http\Controllers;

use App\Continent;

class ContinentController extends Controller
{
    public function index(){
        return Continent::all()->toJson();
    }
}
