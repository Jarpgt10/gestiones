<?php

class Utils
{
    public static function validateField($value)
    {
        return isset($value) && !empty($value) ? "'$value'" : 'NULL';
    }

    public static function validateId($value)
    {
        return isset($value) && !empty($value) ? $value : 0;
    }
}
