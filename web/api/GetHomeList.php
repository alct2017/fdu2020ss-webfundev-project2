<?php
require_once("./db-config.php");
$db = CONNECT();
$getPopular = $db->prepare(<<<'SQL'
    SELECT ImageID, COUNT(*) AS Count
    FROM travelimagefavor
    GROUP BY ImageID
    ORDER BY Count DESC
    LIMIT 20
SQL);
$getPopular->execute();
while ($result = $getPopular->fetch()) {
    $return[] = $result["ImageID"];
}
echo json_encode($return);
