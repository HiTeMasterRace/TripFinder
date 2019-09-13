<?php

namespace App\Http\Resources;

use App\Continent;
use App\Country;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $country = Country::find($this->country_id);
        $continent = Continent::find($country->continent_id);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'temperature' => $this->temperature,
            'description' => $this->description,
            'location' => $this->location,
            'budget' => $this->budget,
            'filename' => $this->filename,
            'types' => $this->types()->get(),
            'country_name' => $country->name,
            'continent_name' => $continent->name
        ];
    }
}
