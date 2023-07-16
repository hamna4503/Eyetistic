<?php
require 'connection.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// echo $request->Email;
$user = $request->Email;
$password = $request->Password;
$db = "eyetistic";
mysqli_select_db($con, $db);
$q = "select * from info where Email='$user' and Password='$password'";
$result = mysqli_query($con, $q);

if (mysqli_num_rows($result) == 0) {
    echo "Not verified";
} else {
    echo "verified";
}
?>