<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$user = $request->username;
$email = $request->Email;
$password = $request->Password;


$q = "select * from info where Email='$email';";
$q2 = "select * from info where username='$user';";
$result = mysqli_query($con, $q);
$result2 = mysqli_query($con, $q2);

if (mysqli_num_rows($result) != 0) {
    echo "Email Exists";
} elseif (mysqli_num_rows($result2) != 0) {
    echo "Username Exists";
} else {
    $q3 = "insert into info(username,Email,Password) values ('$user','$email','$password');";
    $append = mysqli_query($con, $q3);
    if ($append) {
        echo "Success";
    } else {
        echo "Failure";
    }
}


?>