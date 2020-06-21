<?php
require_once("./db-config.php");
$db = CONNECT();
if (isset($_REQUEST["country"])) {
    $sql = $db->prepare(<<<'SQL'
    SELECT AsciiName
    FROM geocities
    WHERE GeoNameID IN
    (
        SELECT img.CityCode
        FROM travelimage img INNER JOIN geocountries_regions country
        ON img.Country_RegionCodeISO = country.ISO
        WHERE country.Country_RegionName = :country
    )
SQL);
    $sql->bindValue(":country", $_REQUEST["country"]);
} else {
    $sql = $db->prepare(<<<'SQL'
    SELECT geo.AsciiName
    FROM travelimage img INNER JOIN geocities geo
    ON img.CityCode = geo.GeoNameID
    GROUP BY geo.AsciiName
SQL);
}
$sql->execute();
while ($row = $sql->fetch()) {
    $result[] = $row["AsciiName"];
}
echo json_encode($result);
