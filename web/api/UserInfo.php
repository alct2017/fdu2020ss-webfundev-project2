<?php
class UserInfo
{
    public bool $hasUser;
    public int $id;
    public string $email;
    public string $name;
    public array $favor;
    public array $image;
    public function __construct(int $UID)
    {
        // $this->hasUser = false;
        require_once("./db-config.php");
        $db = CONNECT();
        $hasUser = $db->prepare(<<<SQL
            SELECT UID,Email,UserName FROM traveluser WHERE UID = :UID
        SQL);
        $hasUser->bindValue(":UID", $UID);
        $hasUser->execute();
        if (!$result = $hasUser->fetch()) {
            return;
        }
        try {
            $this->id = $result["UID"];
            $this->email = $result["Email"];
            $this->name = $result["UserName"];

            $this->favor = [];
            $getFavor = $db->prepare(<<<SQL
                SELECT ImageID FROM travelimagefavor WHERE UID = :UID
            SQL);
            $getFavor->bindValue(":UID", $UID);
            $getFavor->execute();
            while ($row = $getFavor->fetch()) {
                $this->favor[] = $row["ImageID"];
            }

            $this->image = [];
            $getImage = $db->prepare(<<<SQL
                SELECT ImageID FROM travelimage WHERE UID = :UID
            SQL);
            $getImage->bindValue(":UID", $UID);
            $getImage->execute();
            while ($row = $getImage->fetch()) {
                $this->image[] = $row["ImageID"];
            }

            $this->hasUser = true;
        } catch (Exception $error) {
            throw $error;
        }
    }
    public function attach(&$target, bool $setSession = false)
    {
        foreach ($this as $prop => $value) {
            $target[$prop] = $value;
        }
        if ($setSession) {
            $target["token"] = setSession($this->id);
        }
        $target["actionState"] = true;
        return $this;
    }
    public function get()
    {
        foreach ($this as $item => $value) {
            $obj[$item] = $value;
        }
        return $obj;
    }
    public function hasUser()
    {
        return $this->hasUser;
    }
    public function getId()
    {
        return $this->hasUser() ? $this->id : NULL;
    }
    public function getEmail()
    {
        return $this->hasUser() ? $this->email : NULL;
    }
    public function getName()
    {
        return $this->hasUser() ? $this->name : NULL;
    }
    public function getFavor()
    {
        return $this->hasUser() ? $this->favor : NULL;
    }
    public function getImage()
    {
        return $this->hasUser() ? $this->image : NULL;
    }
}

function getUserInfo(int $uid)
{
    return new UserInfo($uid);
}
function setSession(int $uid)
{
    require_once("./db-config.php");
    $db = CONNECT();
    $createToken = $db->prepare(<<<SQL
                        UPDATE traveluser
                        SET LastToken = :session
                        WHERE UID = :uid
                    SQL);
    $token = bin2hex(random_bytes(20));
    $session = sha1($uid . $token . $_SERVER["HTTP_USER_AGENT"]);
    $createToken->bindValue(":session", $session);
    $createToken->bindValue(":uid", $uid);
    $createToken->execute();
    return $token;
}
