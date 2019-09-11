<?php
/**
 * Created by PhpStorm.
 * User: gael
 * Date: 11/09/2019
 * Time: 09:49
 */

use App\CityType;
use Illuminate\Database\Seeder;

class CityTypeTableSeeder extends Seeder
{
    public function run()
    {
        factory(CityType::class)->create([
            'city_id'=>1,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>2,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>3,
            'type_id'=>3
        ]);
        factory(CityType::class)->create([
            'city_id'=>3,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>4,
            'type_id'=>1
        ]);
        factory(CityType::class)->create([
            'city_id'=>4,
            'type_id'=>2
        ]);
        factory(CityType::class)->create([
            'city_id'=>4,
            'type_id'=>5
        ]);
        factory(CityType::class)->create([
            'city_id'=>5,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>5,
            'type_id'=>3
        ]);
        factory(CityType::class)->create([
            'city_id'=>6,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>7,
            'type_id'=>2
        ]);
        factory(CityType::class)->create([
            'city_id'=>7,
            'type_id'=>3
        ]);
        factory(CityType::class)->create([
            'city_id'=>7,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>8,
            'type_id'=>3
        ]);
        factory(CityType::class)->create([
            'city_id'=>8,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>9,
            'type_id'=>4
        ]);
        factory(CityType::class)->create([
            'city_id'=>10,
            'type_id'=>4
        ]);
    }
}