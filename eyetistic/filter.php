<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$category = $request->category;
$q = "select * from products where prodCategory='$category'";
$db = "eyetistic";
mysqli_select_db($con, $db);
$result = mysqli_query($con, $q);
$arr = [];
while ($row = mysqli_fetch_assoc($result)) {
    array_push($arr, $row);
}
echo json_encode($arr);
?>