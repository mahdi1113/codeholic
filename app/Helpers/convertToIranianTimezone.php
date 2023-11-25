<?php

use Carbon\Carbon;
use Morilog\Jalali\Jalalian;

if (!function_exists('convertToIranianTimezone')) {
    function convertToIranianTimezone($data)
    {
        // تبدیل زمان به شیء Carbon
        $date = Jalalian::forge($data);

        return $date;
    }
}
