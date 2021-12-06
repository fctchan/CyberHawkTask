<?php

namespace App\Http\Controllers;

use App\Models\WindTurbine;
use App\Http\Requests;

class WindTurbineController extends Controller
{
    public function printAll()
    {
        return response()->json(collect(range(1, 100))->map(function ($inputValue) { return new WindTurbine($inputValue); }));
    }

    public function printInput($inputValue)
    {
        return response()->json(new WindTurbine($inputValue));
    }
}
