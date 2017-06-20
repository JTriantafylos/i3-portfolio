<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$requestPriority = $_POST['requestPriority'];
	$emergencyType = $_POST['emergencyType'];
	$message = $_POST['message'];

	$formContent = "Form: $name \nPhone: $phone \nPriority: $requestPriority \nType: $emergencyType";
	$reciever = "jtriantafylos@gmail.com";
	$subject = "From my contact form";
	$mailheader = "From: $email \r\n";

	mail($reciever, $subject, $formContent, $mailheader) or die("Error");
	echo("Thank You");
?>
