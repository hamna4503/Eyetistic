<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
$prodId = $request->prodId;

$q = "DELETE FROM user WHERE Fav='$prodId'";
mysqli_select_db($con, $db);

if (mysqli_query($con, $q)) {
    $response = ["success" => true];
} else {
    $response = [
        "success" => false, 
        "message" => "Error: " . mysqli_error($con)
    ];
}

echo json_encode($response);
mysqli_close($con);
?>