<?php

use App\Continent;
use Illuminate\Database\Seeder;

class ContinentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Continent::class)->create([
            'name'=>'Amérique du Nord',
        ]);
        factory(Continent::class)->create([
            'name'=>'Amérique du Sud',
        ]);
        factory(Continent::class)->create([
            'name'=>'Antarctique',
        ]);
        factory(Continent::class)->create([
            'name'=>'Europe',
        ]);
        factory(Continent::class)->create([
            'name'=>'Asie',
        ]);
        factory(Continent::class)->create([
            'name'=>'Afrique',
        ]);
        factory(Continent::class)->create([
            'name'=>'Océanie',
        ]);
    }
}
