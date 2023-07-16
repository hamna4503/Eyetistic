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
$message= $request->Message;

// Prepare SQL statement
$q = "INSERT INTO contact (Name, Email, Phone, Message) VALUES ('$name','$email','$phone','$message');";
$append = mysqli_query($con, $q);

// Execute SQL statement
if ($append->execute() === TRUE) {
    echo "Form data inserted successfully";
} else {
    echo "Error: " . $append->error;
}

// Close connections
$append->close();
$con->close();
?>