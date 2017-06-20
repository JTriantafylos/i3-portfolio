<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$message = $_POST['message'];

	$formContent = "Form: $name \nPhone: $phone";
	$reciever = "jtriantafylos@gmail.com";
	$subject = "From my contact form";
	$mailheader = "From: $email \r\n";

	mail($reciever, $subject, $formContent, $mailheader) or die("Error");
	echo("Thank You");
?>
