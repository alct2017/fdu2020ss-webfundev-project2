<?php
function getPOST()
{
    return $POST = json_decode(file_get_contents("php://input"));
}
