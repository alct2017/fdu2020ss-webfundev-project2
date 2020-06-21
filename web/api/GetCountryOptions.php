<?php
require_once("./db-config.php");
$db = CONNECT();
if (isset($_REQUEST["city"])) {
    $sql = $db->prepare(<<<'SQL'
    SELECT country.Country_RegionName
    FROM geocities city INNER JOIN geocountries_regions country
    ON city.Country_RegionCodeISO = country.ISO
    WHERE city.AsciiName = :city
SQL);
    $sql->bindValue(":city", $_REQUEST["city"]);
    $sql->execute();
    echo json_encode($sql->fetch()["Country_RegionName"]);
} else {
    $sql = $db->prepare(<<<'SQL'
    SELECT geo.Country_RegionName
    FROM travelimage img INNER JOIN geocountries_regions geo
    ON img.Country_RegionCodeISO = geo.ISO
    GROUP BY geo.Country_RegionName
SQL);
    $sql->execute();
    while ($row = $sql->fetch()) {
        $result[] = $row["Country_RegionName"];
    }
    echo json_encode($result);
}
