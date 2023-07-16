<?php
require 'connection.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
mysqli_select_db($con, $db);

//Retrieve Form Data
$name = $request->Name;
$email = $request->Email;
$phone = $request->Phone;
$address = $request->Address;

// Prepare SQL statement
$q = "INSERT INTO contact (Name, Email, Phone, Address) VALUES ('$name','$email','$phone','$address');";
$append = mysqli_query($con, $q);

// Execute SQL statement
if ($append) {
    echo "Form data inserted successfully";
} else {
    echo "Error";
}

// Close connections
$con->close();
?>