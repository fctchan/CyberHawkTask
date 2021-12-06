<?php

use App\Models\WindTurbine;
use Tests\TestCase;

class WindTurbineTest extends TestCase
{
    /**
     * @dataProvider outputProvider
     */
    public function testOutput($number, $expected)
    {
        $this->assertEquals($expected, (string)(new WindTurbine($number)));
    }

    public function outputProvider()
    {
        return [
            [1, '1'],
            [3, 'Coating Damage'],
            [5, 'Lightning Strike'],
            [15, 'Coating Damage and Lightning Strike'],
            [56, '56'],
            [75, 'Coating Damage and Lightning Strike'],
            [99, 'Coating Damage'],
            [100, 'Lightning Strike']
        ];
    }

}
