<?php
require_once("./db-config.php");
$db = CONNECT();
$sql = $db->prepare(<<<'SQL'
    SELECT Content
    FROM travelimage
    GROUP BY Content
SQL);
$sql->execute();
while ($row = $sql->fetch()) {
    $result[] = $row["Content"];
}
echo json_encode($result);
