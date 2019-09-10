<?php

use App\City;
use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(City::class)->create([
            'name'=>'Athenes',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>140,
            'temperature'=>22
        ]);
        factory(City::class)->create([
            'name'=>'Rome',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>45,
            'temperature'=>12
        ]);
        factory(City::class)->create([
            'name'=>'Montréal',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>322,
            'temperature'=>6
        ]);
        factory(City::class)->create([
            'name'=>'Réunion',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>567,
            'temperature'=>29
        ]);
        factory(City::class)->create([
            'name'=>'Moscou',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>250,
            'temperature'=>1
        ]);
        factory(City::class)->create([
            'name'=>'Londres',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>40,
            'temperature'=>8
        ]);
        factory(City::class)->create([
            'name'=>'Tel Aviv',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>317,
            'temperature'=>22
        ]);
        factory(City::class)->create([
            'name'=>'New York',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>435,
            'temperature'=>12
        ]);
        factory(City::class)->create([
            'name'=>'Sao Paulo',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>554,
            'temperature'=>23
        ]);
        factory(City::class)->create([
            'name'=>'Cuba',
            'description'=>'no description yet',
            'location'=>'unknown yet',
            'budget'=>511,
            'temperature'=>29
        ]);
    }
}
