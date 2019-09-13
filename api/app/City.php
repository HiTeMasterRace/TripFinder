<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;


class City extends Model
{
    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    public function types()
    {
        return $this->belongsToMany('App\Type', 'city_types');
    }
}
