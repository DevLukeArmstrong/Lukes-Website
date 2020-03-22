<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$receipient = "ltarmstrong96@gmail.com";
$subject = "Website inquiry";
$mailheader = "From: $email \r\n";
mail($receipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>