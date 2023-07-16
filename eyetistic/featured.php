<?php
require "connection.php";
$q = "select * from products where prodRatings >= 3";
$db = "eyetistic";
mysqli_select_db($con, $db);
$result = mysqli_query($con, $q);
$arr = [];
while ($row = mysqli_fetch_assoc($result)) {
    array_push($arr, $row);
}
echo json_encode($arr);
?>