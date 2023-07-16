<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
$Email = $request->Email;
$q = "select prodId from cart where Email='$Email'";
mysqli_select_db($con, $db);
$result1 = mysqli_query($con, $q);
$cart = mysqli_fetch_all($result1);
$t = sizeof($cart);
$arr = [];
$i = 0;

while ($i < $t) {
    $index = $cart[$i][0];
    $q = "select * from products where prodid=$index";
    $result = mysqli_query($con, $q);
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($arr, $row);
    }
    $i += 1;
}
echo json_encode($arr);
?>