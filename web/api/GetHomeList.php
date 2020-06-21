<?php
require_once("./db-config.php");
$db = CONNECT();
$getList;
if ($_REQUEST["random"]) {
    $getList = $db->prepare(<<<SQL
        SELECT * FROM travelimage
        WHERE ImageID = 
        CEIL(RAND() *(SELECT MAX(ImageID) FROM travelimage))
    SQL);
    for ($i = 0; $i < 20;) {
        $getList->execute();
        if ($result = $getList->fetch()) {
            $return[] = $result["ImageID"];
            $i++;
        }
    }
} else {
    $getList = $db->prepare(<<<'SQL'
        SELECT ImageID, COUNT(*) AS Count
        FROM travelimagefavor
        GROUP BY ImageID
        ORDER BY Count DESC
        LIMIT 20
    SQL);
    $getList->execute();
    while ($result = $getList->fetch()) {
        $return[] = $result["ImageID"];
    }
}
echo json_encode($return);
