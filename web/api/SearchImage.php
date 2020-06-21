<?php
require_once("./db-config.php");
require_once("./ImageInfo.php");
$db = CONNECT();
$query = [];
if (isset($_REQUEST["title"])) {
    $query[] = "Title LIKE '%" . $_REQUEST["title"] . "%'";
}
if (isset($_REQUEST["description"])) {
    $query[] = "Description LIKE '%" . $_REQUEST["description"] . "%'";
}
if (isset($_REQUEST["content"])) {
    $query[] = "Content='" . $_REQUEST["content"] . "'";
}
if (isset($_REQUEST["country"])) {
    $getCountry = $db->prepare("SELECT ISO FROM geocountries_regions WHERE Country_RegionName='" . $_REQUEST["country"] . "'");
    $getCountry->execute();
    while ($row = $getCountry->fetch()) {
        $ISO[] = $row["ISO"];
    }
    $countryQuery = "(";
    for ($ISONum = sizeof($ISO), $index = 0; $index < $ISONum; $index++) {
        $countryQuery .= "Country_RegionCodeISO='" . $ISO[$index] . "'";
        $countryQuery .= $index < $ISONum - 1 ? " OR " : ")";
    }
    $query[] = $countryQuery;
}
if (isset($_REQUEST["city"])) {
    $getCity = $db->prepare("SELECT GeoNameID FROM geocities WHERE AsciiName='" . $_REQUEST["city"] . "'");
    $getCity->execute();
    while ($row = $getCity->fetch()) {
        $GeoNameID[] = $row["GeoNameID"];
    }
    $cityQuery = "(";
    for ($GeoNameIDNum = sizeof($GeoNameID), $index = 0; $index < $GeoNameIDNum; $index++) {
        $cityQuery .= "CityCode='" . $GeoNameID[$index] . "'";
        $cityQuery .= $index < $GeoNameIDNum - 1 ? " OR " : ")";
    }
    $query[] = $cityQuery;
}
$where = "WHERE ";
for ($queryNum = sizeof($query), $index = 0; $index < $queryNum; $index++) {
    $where .= $query[$index];
    $where .= $index < $queryNum - 1 ? " AND " : " ";
}
$sql = $db->prepare("SELECT * FROM travelimage " . $where);
$sql->execute();
while ($row = $sql->fetch()) {
    $image = new ImageInfo($row["ImageID"]);
    if ($image->hasImage)
        $result[] = $image;
}
echo json_encode($result);
