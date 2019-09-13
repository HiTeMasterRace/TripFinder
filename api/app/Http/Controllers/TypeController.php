<?php
/**
 * Created by PhpStorm.
 * User: gael
 * Date: 11/09/2019
 * Time: 11:10
 */

namespace App\Http\Controllers;
use App\Type;

class TypeController extends Controller
{
    public function show(Type $type)
    {
        return $type->toJson();
    }

    public function index()
    {
        return Type::all()->toJson();
    }
}