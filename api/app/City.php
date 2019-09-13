<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function types()
    {
        return $this->belongsToMany('App\Type', 'city_types');
    }
}
