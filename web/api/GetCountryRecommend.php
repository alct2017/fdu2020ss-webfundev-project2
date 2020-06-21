<?php
require_once("./db-config.php");
$retrun = [];
if (!empty($_REQUEST["country"])) {
    $db = CONNECT();
    $getCountry = $db->prepare(<<<SQL
        SELECT * FROM geocountries_regions
        WHERE Country_RegionName LIKE :country
        LIMIT 10
    SQL);
    $getCountry->bindValue(":country", "%" . $_REQUEST["country"] . "%");
    $getCountry->execute();
    while ($row = $getCountry->fetch()) {
        $retrun[] = $row["Country_RegionName"];
    }
}
echo json_encode($retrun);
