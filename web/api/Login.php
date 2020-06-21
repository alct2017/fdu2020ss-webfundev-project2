<?php
require_once("./db-config.php");
require_once("./UserInfo.php");
$return["actionState"] = false;
$db = CONNECT();
$POST = json_decode(file_get_contents("php://input"));
if (($token = $POST->token) && ($id = $POST->id)) {
    $userSession = sha1($id . $token . $_SERVER["HTTP_USER_AGENT"]);
    $checkToken = $db->prepare(<<<SQL
        SELECT LastToken
        FROM traveluser
        WHERE UID = :uid
    SQL);
    $checkToken->bindValue(":uid", $id);
    $checkToken->execute();
    if ($result = $checkToken->fetch()) {
        if ($result["LastToken"] == $userSession) {
            getUserInfo($id)->attach($return);
            $return["actionState"] = true;
        } else {
            $return["error"] = "Token Wrong";
        }
    } else {
        $return["error"] = "Session ID Not Found";
    }
} else {
    if ((!$email = $POST->email) || (!$password = $POST->password)) {
        $return["error"] = "No Email or Password Posted";
    } else {
        $getUser = $db->prepare(<<<'SQL'
        SELECT * FROM traveluser WHERE Email = :email
    SQL);
        $getUser->bindValue(":email", $email);
        $getUser->execute();
        if (!$thisUser = $getUser->fetch()) {
            $return["error"] = "User Not Found";
        } else if (!$thisUser["Pass"] == $password) {
            $return["error"] = "Password Wrong";
        } else {
            getUserInfo($thisUser["UID"])->attach($return, $POST->remember);
            $return["actionState"] = true;
        }
    }
}
echo json_encode($return);
