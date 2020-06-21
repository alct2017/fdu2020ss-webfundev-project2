<?php
$return["actionState"] = false;
require_once("./getPost.php");
$POST = getPOST();
if ($POST->id && $POST->imageid) {
    require_once("./db-config.php");
    $db = CONNECT();
    $imageExist = $db->prepare(<<<SQL
        SELECT * FROM travelimage
        WHERE ImageID = :imageid
        AND UID = :id
    SQL);
    $imageExist->bindValue(":imageid", $POST->imageid);
    $imageExist->bindValue(":id", $POST->id);
    $imageExist->execute();
    if ($imageExist->fetch()) {
        $db->beginTransaction();
        $deleteImage = $db->prepare(<<<SQL
            DELETE FROM travelimage
            WHERE ImageID = :imageid
            AND UID = :id
        SQL);
        $deleteImage->bindValue(":imageid", $POST->imageid);
        $deleteImage->bindValue(":id", $POST->id);
        $deleteFavor = $db->prepare(<<<SQL
            DELETE FROM travelimagefavor
            WHERE ImageID = :imageid
        SQL);
        $deleteFavor->bindValue(":imageid", $POST->imageid);
        if ($deleteImage->execute() && $deleteFavor->execute()) {
            $db->commit();
            require_once("./UserInfo.php");
            getUserInfo($POST->id)->attach($return);
        } else {
            $db->rollBack();
            $return["error"] = "Database error";
        }
    } else {
        $return["error"] = "Image doesn't exist";
    }
} else {
    $return["error"] = "Request without id or imageid";
}
echo json_encode($return);
