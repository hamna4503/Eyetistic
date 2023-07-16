<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$search = $request->item;
$q = "select * from products where prodName like '%$search%' or prodName like '$search%' or prodName like '%$search' or
prodColor like '%$search%' or prodColor like '$search%' or prodColor like '%$search'";
$db = "eyetistic";
mysqli_select_db($con, $db);
$result = mysqli_query($con, $q);
$arr = [];
if (mysqli_num_rows($result) != 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($arr, $row);
    }

    echo json_encode($arr);
} else {
    echo "not found";
}

?>