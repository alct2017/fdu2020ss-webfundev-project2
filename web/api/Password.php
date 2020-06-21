<?php
function CheckPassword($plain, $uid)
{
    $check = false;
    try {
        require_once("./db-config.php");
        $db = CONNECT();
        $getUser = $db->prepare(<<<SQL
            SELECT * FROM traveluser
            WHERE UID = :uid
        SQL);
        $getUser->bindValue(":uid", $uid);
        $getUser->execute();
        $userinfo = $getUser->fetch();
        if (generateHash($plain, $userinfo["DateLastModified"]) == $userinfo["Pass"]) $check = true;
    } catch (\Throwable $th) {
        //
    }
    return $check;
}
function generateHash($plain, $dateLastModified)
{
    return sha1($plain . $dateLastModified);
}
