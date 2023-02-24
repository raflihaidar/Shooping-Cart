<?php

namespace App\Http\Controllers;

use exception;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    public function getData(){
        $path = base_path()."/Mocking/Json/get_food_products.json";
        $json = json_decode(file_get_contents($path), true);
        return response()->json($json);
    }
}