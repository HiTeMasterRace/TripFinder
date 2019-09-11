<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContinentController extends Controller
{
    public function index(){
        return Continent::all()->toJson();
    }
}
