<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
$to_email = "lifelineprc@sbcglobal.net";

$subject = "New Appointment Request";

$message = "A new appointment request has been submitted through the website.\n\n";
$message .= "Name: ".$_POST['Name'];
$message .= "\nEmail: ".$_POST['Email_Address'];
$message .= "\nDOB: ".$_POST['Date_of_Birth'];
$message .= "\n\nHas visisted Lifeline before: ";
if($_POST['Visited_Before?']){
	$message .= "Yes";
} else {
	$message .= "No";
}
$message .= "\n\nWould prefer to visit on a ".$_POST['Preferred_day_to_visit']." at a preferred time of ".$_POST['Preferred_time_to_visit'];
$message .= "\n\nType of visit: ".$_POST['Type_of_Visit'];



/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
if (mail($to_email,$subject,$message)) {
  echo "<h4>Thank you for sending email</h4>";
} else {
  echo "<h4>Can't send email to $email</h4>";
}
?>
</body>
</html> 