<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\City;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(City::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'localisation' => "90, 90",
        'filename' => 'not_existing.png',
        'temperature' => $faker->numberBetween(-20, 40)
    ];
});
