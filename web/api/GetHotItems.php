<?php
require_once("./db-config.php");
if (isset($_REQUEST["item"])) {
    $item = $_REQUEST["item"];
    $db = CONNECT();
    switch ($item) {
        case 'content':
            $sql = $db->prepare(<<<'SQL'
                SELECT Content , COUNT(*) AS freq
                FROM travelimage
                WHERE Content IS NOT NULL
                GROUP BY Content
                HAVING freq > 5
                ORDER BY freq DESC
                LIMIT 5
            SQL);
            break;
        case 'country':
            $sql = $db->prepare(<<<'SQL'
                SELECT Country_RegionName , COUNT(*) AS freq
                FROM (
                    SELECT geo.Country_RegionName
                    FROM geocountries_regions geo RIGHT JOIN travelimage img
                    ON geo.ISO = img.Country_RegionCodeISO
                ) AS total
                WHERE Country_RegionName IS NOT NULL
                GROUP BY Country_RegionName
                HAVING freq > 5
                ORDER BY freq DESC
                LIMIT 5
            SQL);
            break;
        case 'city':
            $sql = $db->prepare(<<<'SQL'
                SELECT AsciiName , COUNT(*) AS freq
                FROM (
                    SELECT geo.AsciiName
                    FROM geocities geo RIGHT JOIN travelimage img
                    ON geo.GeoNameID = img.CityCode
                ) AS total
                WHERE AsciiName IS NOT NULL
                GROUP BY AsciiName
                HAVING freq > 5
                ORDER BY freq DESC
                LIMIT 5
            SQL);
            break;
    }
    $sql->execute();
    while ($row = $sql->fetch()) {
        $result[] = $row["0"];
    }
    echo json_encode($result);
}
