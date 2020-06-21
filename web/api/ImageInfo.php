<?php
class ImageInfo extends Path
{
    public bool $hasImage = false;
    public ?int $id;
    public ?string $title;
    public ?string $description;
    public ?string $city;
    public ?string $country;
    public ?int $uid;
    public ?string $content;
    public ?int $favorCount;
    public function __construct(int $ID)
    {
        require_once("./db-config.php");
        $db = CONNECT();
        $image = $db->prepare(<<<SQL
            SELECT * FROM travelimage WHERE ImageID = :id
        SQL);
        $image->bindValue(":id", $ID);
        $image->execute();
        if ($result = $image->fetch()) {
            try {
                $this->id = $result["ImageID"];
                $this->title = $result["Title"];
                $this->description = $result["Description"];
                $this->uid = $result["UID"];
                $this->content = $result["Content"];
                parent::__construct($result["PATH"]);

                $countFavor = $db->prepare(<<<SQL
                SELECT COUNT(*) AS Count
                FROM travelimagefavor
                WHERE ImageID = :id
                GROUP BY ImageID
            SQL);
                $countFavor->bindValue(":id", $ID);
                $countFavor->execute();
                $this->favorCount = ($countResult = $countFavor->fetch()) ? $countResult["Count"] : 0;

                $getCity = $db->prepare(<<<SQL
                SELECT AsciiName
                FROM geocities
                WHERE GeoNameID = :cityCode
            SQL);
                $getCity->bindValue(":cityCode", $result["CityCode"]);
                $getCity->execute();
                $this->city = ($cityResult = $getCity->fetch()) ? $cityResult["AsciiName"] : NULL;

                $getCountry = $db->prepare(<<<SQL
                SELECT Country_RegionName AS Country
                FROM geocountries_regions
                WHERE ISO = :countryISO
            SQL);
                $getCountry->bindValue(":countryISO", $result["Country_RegionCodeISO"]);
                $getCountry->execute();
                $this->country = ($countryResult = $getCountry->fetch()) ? $countryResult["Country"] : NULL;

                $this->hasImage = true;
            } catch (Exception $error) {
            }
        }
    }
    public function attach(&$target)
    {
        foreach ($this as $prop => $value) {
            $target[$prop] = $value;
        }
        $target["actionState"] = true;
        return $this;
    }
}
function getImage(int $ImageID)
{
    return new ImageInfo($ImageID);
}
class UserImageInfo extends ImageInfo
{
    public bool $isAuthor;
    public bool $isFavor;
    public function __construct($UID, $ImageID)
    {
        parent::__construct($ImageID);
        if (!$this->hasImage) {
            return;
        }

        $this->isAuthor = ($this->uid == $UID);

        require_once("./db-config.php");
        $db = CONNECT();
        $getFavor = $db->prepare(<<<SQL
            SELECT *
            FROM travelimagefavor
            WHERE UID = :uid
                AND ImageID = :imageid
        SQL);
        $getFavor->bindValue(":uid", $UID);
        $getFavor->bindValue(":imageid", $ImageID);
        $getFavor->execute();
        $this->isFavor = ($getFavor->fetch()) ? true : false;
    }
    public function get()
    {
        foreach ($this as $item => $value) {
            $obj[$item] = $value;
        }
        return $obj;
    }
}
class Path
{
    public string $largePath;
    public string $mediumPath;
    public string $smallPath;
    public string $squareMediumPath;
    public string $squareSmallPath;
    public string $squareTinyPath;
    public string $thumbPath;
    public function __construct(?string $path)
    {
        if (!isset($path)) {
            throw new Exception("Null of Path");
        }
        foreach (Path::$PREFIX as $key => $value) {
            $varName = $key . "Path";
            $this->$varName = $value . $path;
        }
    }
    public static $PREFIX = [
        "large" => "../img/large/",
        "medium" => "../img/medium/",
        "small" => "../img/small/",
        "squareMedium" => "../img/square-medium/",
        "squareSmall" => "../img/square-small/",
        "squareTiny" => "../img/square-tiny/",
        "thumb" => "../img/thumb/"
    ];
}
