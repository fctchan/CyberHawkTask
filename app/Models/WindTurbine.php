<?php

namespace App\Models;

use JsonSerializable;

class WindTurbine implements JsonSerializable
{
    //Define the input value
    private $inputValue;

    public function __construct($inputValue)
    {
        //For input value < 1 or > 100
        if ($inputValue < 1 || $inputValue > 100) {
            throw new \InvalidArgumentException('Invalid value: ' . $inputValue);
        }
                
        $this->inputValue = $inputValue;
        
    }

    //Function for serializing JSON
    function jsonSerialize()
    {
        return [
            'inputValue' => $this->inputValue,
            'value' => (string)$this
        ];
    }

    //Return true if input value is common factor of 3 and 5 
    private function isCoatingDamageNLightningStrike()
    {
        return $this->isCoatingDamage() && $this->isLightningStrike();
    }

    //Return ture if input value is factor of 3
    private function isCoatingDamage()
    {
        return $this->inputValue % 3 == 0;
    }

    //Return ture if input value is factor of 5
    private function isLightningStrike()
    {
        return $this->inputValue % 5 == 0;
    }

    //Return JSON
    public function __toString()
    {
        return $this->isCoatingDamageNLightningStrike() ? "Coating Damage and Lightning Strike" : ($this->isCoatingDamage() ? "Coating Damage" : ($this->isLightningStrike() ? "Lightning Strike" : (string)$this->inputValue));
    }

}
