<?php

use App\Type;
use Illuminate\Database\Seeder;

class TypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Type::class)->create([
            'name'=>'Montagne'
        ]);
        factory(Type::class)->create([
            'name'=>'Plage'
        ]);
        factory(Type::class)->create([
            'name'=>'Vie Nocturne'
        ]);
        factory(Type::class)->create([
            'name'=>'Culture'
        ]);
        factory(Type::class)->create([
            'name'=>'Sport'
        ]);
    }
}

