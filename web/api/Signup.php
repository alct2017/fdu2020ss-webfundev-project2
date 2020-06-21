<?php
require_once("./db-config.php");
require_once("./UserInfo.php");
require_once("./getPost.php");
require_once("./Password.php");
$return["actionState"] = false;
$POST = getPOST();
if (($email = "'" . $POST->email . "'")
    && ($username = $POST->username)
    && ($password = $POST->password)
) {
    echo $email;
    $db = CONNECT();
    $checkEmail = $db->prepare(<<<SQL
        SELECT * FROM traveluser WHERE Email = :email
    SQL);
    $checkEmail->bindValue(":email", $email);
    $checkEmail->execute();
    if ($checkEmail->fetch()) {
        $return["error"] = "Email is signed";
    } else {
        $db->beginTransaction();
        $createUser = $db->prepare(<<<SQL
            INSERT INTO traveluser
            (Email,UserName,Pass,
            DateJoined,DateLastModified)
            VALUES
            (:email,:username,:password,
            CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP())
        SQL);
        $createUser->bindValue(":email", $email);
        $createUser->bindValue(":username", $username);
        $createUser->bindValue(":password", PASSWORD($password));
        if ($createUser->execute()) {
            $db->commit();
            $checkEmail->execute();
            $id = $checkEmail->fetch()["UID"];
            getUserInfo($id)->attach($return, true);
        } else {
            $db->rollBack();
            $return["error"] = "Fail to create user";
        }
    }
}
echo json_encode($return);
