<?php

use App\Country;
use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Country::class)->create([
            'name'=>'Grèce',
            'continent_id' => 4,
        ]);
        factory(Country::class)->create([
            'name'=>'Italie',
            'continent_id' => 4,
        ]);
        factory(Country::class)->create([
            'name'=>'Canada',
            'continent_id' => 1,
        ]);
        factory(Country::class)->create([
            'name'=>'France',
            'continent_id' => 4,
        ]);
        factory(Country::class)->create([
            'name'=>'Russie',
            'continent_id' => 4,
        ]);
        factory(Country::class)->create([
            'name'=>'Angletette',
            'continent_id' => 4,
        ]);
        factory(Country::class)->create([
            'name'=>'Israël',
            'continent_id' => 5,
        ]);
        factory(Country::class)->create([
            'name'=>'Etats-Unis',
            'continent_id' => 1,
        ]);
        factory(Country::class)->create([
            'name'=>'Brésil',
            'continent_id' => 2,
        ]);
        factory(Country::class)->create([
            'name'=>'Cuba',
            'continent_id' => 2,
        ]);
    }
}
