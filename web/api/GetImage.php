<?php
require_once("./ImageInfo.php");
if ($id = $_REQUEST["id"]) {
    $return = new ImageInfo($id);
}
if ($list = $_REQUEST["list"]) {
    foreach ($list as $id) {
        $return[] = new ImageInfo($id);
    }
}
echo json_encode($return);
