<?php
require_once("./db-config.php");
require_once("./UserInfo.php");
require_once("./getPost.php");
require_once("./Password.php");
$return["actionState"] = false;
$POST = getPOST();
if (($email = $POST->email)
    && ($username = $POST->username)
    && ($password = $POST->password)
) {
    $db = CONNECT();
    $checkEmail = $db->prepare(<<<SQL
        SELECT * FROM traveluser WHERE Email = :email
    SQL);
    $checkEmail->bindValue(":email", $email);
    $checkEmail->execute();
    if ($checkEmail->fetch()) {
        $return["error"] = "Email is signed";
    } else {
        try {
            $db->beginTransaction();
            $createUser = $db->prepare(<<<SQL
            INSERT INTO traveluser
            (Email,UserName,
            DateJoined,DateLastModified)
            VALUES
            (:email,:username,
            CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP())
        SQL);
            $createUser->bindValue(":email", $email);
            $createUser->bindValue(":username", $username);
            if (!$createUser->execute()) throw new Error();
            $checkEmail->execute();
            $thisUser = $checkEmail->fetch();
            $setPass = $db->prepare(<<<SQL
            UPDATE traveluser SET Pass = :passHash
            WHERE UID = :uid
        SQL);
            $setPass->bindValue(":passHash", generateHash($password, $thisUser["DateLastModified"]));
            $setPass->bindValue(":uid", $thisUser["UID"]);
            if (!$setPass->execute()) throw new Error();
            $db->commit();
            $checkEmail->execute();
            $id = $checkEmail->fetch()["UID"];
            getUserInfo($id)->attach($return, true);
        } catch (\Throwable $e) {
            $db->rollBack();
            $return["error"] = "Fail to create user";
        }
    }
}
echo json_encode($return);
