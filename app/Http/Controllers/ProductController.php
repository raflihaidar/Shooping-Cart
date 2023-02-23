<?php

namespace App\Http\Controllers;

use exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getData(){
        $path = base_path()."/Mocking/Json/get_all_products.json";
        $json = json_decode(file_get_contents($path), true);
        return response()->json($json);
    }
}