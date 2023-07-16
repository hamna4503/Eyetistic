<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->Email;
$item = $request->item;
if ($email == "") {
    echo "Page was refreshed";
} else {
    $q = "insert into cart(Email,prodId) values('$email',$item);";
    mysqli_query($con, $q);
    echo "Cart updated";
}

?>