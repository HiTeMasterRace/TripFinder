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
        ]);
        factory(Country::class)->create([
            'name'=>'Italie',
        ]);
        factory(Country::class)->create([
            'name'=>'Canada',
        ]);
        factory(Country::class)->create([
            'name'=>'France',
        ]);
        factory(Country::class)->create([
            'name'=>'Russie',
        ]);
        factory(Country::class)->create([
            'name'=>'Angletette',
        ]);
        factory(Country::class)->create([
            'name'=>'Israël',
        ]);
        factory(Country::class)->create([
            'name'=>'Etats-Unis',
        ]);
        factory(Country::class)->create([
            'name'=>'Brésil',
        ]);
        factory(Country::class)->create([
            'name'=>'Cuba',
        ]);
    }
}
