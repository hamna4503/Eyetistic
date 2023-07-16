<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
$Email = $request->Email;
$q = "delete from cart where Email='$Email'";
mysqli_select_db($con, $db);
$result1 = mysqli_query($con, $q);
echo "Previous cart emptied";
$con->close();
?>