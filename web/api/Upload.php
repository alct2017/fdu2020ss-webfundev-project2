<?php
$return["actionState"] = false;
if (isset($_POST["title"]) && isset($_POST["uid"])) {
    if ($path = SaveUploadImage($return)) {
        require_once("./db-config.php");
        $db = CONNECT();
        $upload = $db->prepare(<<<SQL
            INSERT INTO travelimage
            (Title, Description, CityCode, Country_RegionCodeISO, UID, PATH, Content)
            VALUES
            (:title, :description, :cityCode, :countryCode, :uid, :path, :content)
        SQL);
        $upload->bindValue(":title", $_POST["title"]);
        $upload->bindValue(":description", isset($_POST["description"]) ? $_POST["description"] : NULL);
        $upload->bindValue(":cityCode", getCityCode($_POST["city"]));
        $upload->bindValue(":countryCode", getCountryCode($_POST["country"]));
        $upload->bindValue(":uid", $_POST["uid"]);
        $upload->bindValue(":path", $path);
        $upload->bindValue(":content", isset($_POST["content"]) ? $_POST["content"] : NULL);
        $db->beginTransaction();
        if ($upload->execute()) {
            $db->commit();
            $getImage = $db->prepare(<<<SQL
                SELECT * FROM travelimage
                WHERE PATH = :path
            SQL);
            $getImage->bindValue(":path", $path);
            $getImage->execute();
            if ($result = $getImage->fetch()) {
                require_once("./ImageInfo.php");
                getImage($result["ImageID"])->attach($return);
            } else {
                $return["error"] = "Unable to get image";
            }
        } else {
            $db->rollBack();
            //  unlink("../img/large/" . $path);
            //  unlink("../img/medium/" . $path);
            //  unlink("../img/small/" . $path);
            //  unlink("../img/square-medium/" . $path);
            //  unlink("../img/square-small/" . $path);
            //  unlink("../img/square-tiny/" . $path);
            $return["error"] = $upload->errorInfo();
        }
    }
} else {
    $return["error"] = "No title or uid";
}
echo json_encode($return);

function SaveUploadImage(&$return)
{
    define("SIZE_S_M", 150);
    define("SIZE_S_S", 75);
    define("SIZE_S_T", 48);
    define("PERCENT_L", 1.0);
    define("PERCENT_M", 0.625);
    define("PERCENT_S", 0.3125);
    define("SIZE_THUMB_WIDTH", 100);
    define("SIZE_THUMB_HEIGHT", 75);
    if (!$fileData = $_FILES["file"]) {
        $return["error"] = "No file upload";
        return false;
    }
    $file = $fileData["tmp_name"];
    switch ($fileData["type"]) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($file);
            break;
        case 'image/png':
            $image = imagecreatefrompng($file);
            break;
        case 'image/gif':
            $image = imagecreatefromgif($file);
            break;
        default:
            $return["error"] = "Image type not supported";
            return;
            break;
    }
    list($width, $height) = getimagesize($file);
    if (
        ($large = imagecreatetruecolor(PERCENT_L * $width, PERCENT_L * $height)) &&
        ($medium = imagecreatetruecolor(PERCENT_M * $width, PERCENT_M * $height)) &&
        ($small = imagecreatetruecolor(PERCENT_S * $width, PERCENT_S * $height)) &&
        ($square_medium = imagecreatetruecolor(SIZE_S_S, SIZE_S_S))  &&
        ($square_small = imagecreatetruecolor(SIZE_S_M, SIZE_S_M)) &&
        ($square_tiny = imagecreatetruecolor(SIZE_S_T, SIZE_S_T))
    ) {
        if (
            (imagecopyresized($large, $image, 0, 0, 0, 0, PERCENT_L * $width, PERCENT_L * $height, $width, $height)) &&
            (imagecopyresized($medium, $image, 0, 0, 0, 0, PERCENT_M * $width, PERCENT_M * $height, $width, $height)) &&
            (imagecopyresized($small, $image, 0, 0, 0, 0, PERCENT_S * $width, PERCENT_S * $height, $width, $height)) &&
            (imagecopyresized($square_medium, $large, 0, 0, rand(0, PERCENT_L * $width - SIZE_S_M), rand(0, PERCENT_L * $height - SIZE_S_M), SIZE_S_M, SIZE_S_M, SIZE_S_M, SIZE_S_M)) &&
            (imagecopyresized($square_small, $medium, 0, 0, rand(0, PERCENT_M * $width - SIZE_S_S), rand(0, PERCENT_M * $height - SIZE_S_S), SIZE_S_S, SIZE_S_S, SIZE_S_S, SIZE_S_S)) &&
            (imagecopyresized($square_tiny, $small, 0, 0, rand(0, PERCENT_S * $width - SIZE_S_T), rand(0, PERCENT_S * $height - SIZE_S_T), SIZE_S_T, SIZE_S_T, SIZE_S_T, SIZE_S_T))
        ) {
            $filename = sha1_file($file) . ".jpg";
            if (
                (imagejpeg($large, "../img/large/" . $filename)) &&
                (imagejpeg($medium, "../img/medium/" . $filename)) &&
                (imagejpeg($small, "../img/small/" . $filename)) &&
                (imagejpeg($square_medium, "../img/square-medium/" . $filename)) &&
                (imagejpeg($square_small, "../img/square-small/" . $filename)) &&
                (imagejpeg($square_tiny, "../img/square-tiny/" . $filename))
            ) {
                return $filename;
            } else {
                $return["error"] = "Unable to output jpeg";
                return false;
            }
        } else {
            $return["error"] = "Unable to copyresize image";
            return false;
        }
    } else {
        $return["error"] = "Unable to create image";
        return false;
    }
}
function getCityCode($city)
{
    require_once("./db-config.php");
    $db = CONNECT();
    $getCityCode = $db->prepare(<<<SQL
        SELECT * FROM geocities WHERE AsciiName = :city
    SQL);
    $getCityCode->bindValue(":city", $city);
    $getCityCode->execute();
    if ($result = $getCityCode->fetch()) {
        return $result["GeoNameID"];
    } else {
        return NULL;
    }
}
function getCountryCode($country)
{
    require_once("./db-config.php");
    $db = CONNECT();
    $getCountryCode = $db->prepare(<<<SQL
        SELECT * FROM geocountries_regions WHERE Country_RegionName = :country
    SQL);
    $getCountryCode->bindValue(":country", $country);
    $getCountryCode->execute();

    if ($result = $getCountryCode->fetch()) {
        return $result["Country_RegionName"];
    } else {
        return NULL;
    }
}
