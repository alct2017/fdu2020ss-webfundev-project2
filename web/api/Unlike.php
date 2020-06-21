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
        $deleteLike = $db->prepare(<<<SQL
            DELETE FROM travelimagefavor
            WHERE UID = :uid AND ImageID = :imageid
        SQL);
        $deleteLike->bindValue(":uid", $uid);
        $deleteLike->bindValue(":imageid", $imageid);
        $db->beginTransaction();
        if ($deleteLike->execute()) {
            $db->commit();
            getUserInfo($uid)->attach($return);
        } else {
            $db->rollBack();
            $return["error"] = "Database error";
        }
    } else {
        $return["error"] = "User doesn't like this image";
    }
} else {
    $return["error"] = "Request without uid or imageid";
}
echo json_encode($return);
