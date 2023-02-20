<?php

namespace Mocking\Controllers;

use illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function getData(){
        $path = base_path()."/Mocking/Json/get_all_data.json";
        $json = json_decode(file_get_contents($path), true);
        return response()->json($json);
    }
}