<?php
$return["actionState"] = false;
$file = $_FILES["file"];
$title = $_POST["title"];
$description = $_POST["description"];
$city = $_POST["city"];
$country = $_POST["country"];
$uid = $_POST["uid"];
$content = $_POST["content"];
if ($file && $title && $uid) {
    $path = sha1_file($file);
    list($width,$height)=getimagesize($file);
} else {
    $return["error"] = "No file, title or uid";
}
echo json_encode($width);
echo json_encode($height);
