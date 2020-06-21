<?php
require_once("./db-config.php");
require_once("./UserInfo.php");
require_once("./getPost.php");
$POST = getPOST();
$return["actionState"] = false;
if (($uid = $POST->id) && ($imageid = $POST->imageid)) {
    $db = CONNECT();
    $checkLike = $db->prepare(<<<SQL
        SELECT * FROM travelimagefavor WHERE UID = :uid AND ImageID = :imageid
    SQL);
    $checkLike->bindValue(":uid", $uid);
    $checkLike->bindValue(":imageid", $imageid);
    $checkLike->execute();
    if ($checkLike->fetch()) {
        $return["error"] = "User has liked this image";
    } else {
        $createLike = $db->prepare(<<<SQL
            INSERT INTO travelimagefavor
            (UID,ImageID)
            VALUES
            (:uid,:imageid)
        SQL);
        $createLike->bindValue(":uid", $uid);
        $createLike->bindValue(":imageid", $imageid);
        $db->beginTransaction();
        if ($createLike->execute()) {
            $db->commit();
            getUserInfo($uid)->attach($return);
        } else {
            $db->rollBack();
            $return["error"] = "Database error";
        }
    }
} else {
    $return["error"] = "Request without uid or imageid";
}
echo json_encode($return);
