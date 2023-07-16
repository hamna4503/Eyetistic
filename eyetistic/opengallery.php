<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);
$prodId = $request['ProdId'];

$q="SELECT * FROM products WHERE prodid=$prodId";
$append = mysqli_query($con, $q);

if ($append) {
    echo json_encode(['status' => 'Success']);
} else {
    echo json_encode(['status' => 'Failure']);
}
?>