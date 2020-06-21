<?php
require_once("./db-config.php");
$retrun = [];
if (!empty($_REQUEST["city"])) {
    $db = CONNECT();
    $countryCode = "";
    if (!empty($_REQUEST["country"])) {
        $getCountry = $db->prepare(<<<SQL
            SELECT * FROM geocountries_regions
            WHERE Country_RegionName = :country
        SQL);
        $getCountry->bindValue(":country", $_REQUEST["country"]);
        $getCountry->execute();
        if ($result = $getCountry->fetch()) {
            $countryQuery = " AND Country_RegionCodeISO = '" . $result["ISO"] . "'";
        }
    }
    $cityQuery = <<<SQL
        SELECT * FROM geocities
        WHERE AsciiName LIKE :city
    SQL
        . $countryQuery
        . <<<SQL
        LIMIT 10
    SQL;
    $getCity = $db->prepare($cityQuery);
    $getCity->bindValue(":city", "%" . $_REQUEST["city"] . "%");
    $getCity->execute();
    while ($row = $getCity->fetch()) {
        $retrun[] = $row["AsciiName"];
    }
}
echo json_encode($retrun);
