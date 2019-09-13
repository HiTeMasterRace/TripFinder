<?php

namespace App;

use App\Http\Resources\CityCollection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;


class City extends Model
{
    protected $guarded = [];

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    public function types()
    {
        return $this->belongsToMany('App\Type', 'city_types');
    }
}
