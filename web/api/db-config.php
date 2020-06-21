<?php
define("DBHOST", "db");
define("DBNAME", "web-pj2");
define("DBUSER", "user");
define("DBPASSWD", "mypassword");
define("DSN", sprintf("mysql:host=%s;dbname=%s", DBHOST, DBNAME));

function CONNECT()
{
    try {
        $return = new PDO(DSN, DBUSER, DBPASSWD);
    } catch (PDOException $error) {
        return null;
    }
    return $return;
}
