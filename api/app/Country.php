<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Country extends Model
{
    public function continent()
    {
        return $this->belongsTo('App\Continent');
    }
}
