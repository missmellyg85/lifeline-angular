<?php
  		$messageBody = "Hello,\n\nsomeone has sent you an appointment request:\n\n" .
	
		"Name:  " . $_POST[name] .  "\n\n" .
	
		"Email:  " . $_POST[email] . "\n\n" .
		
		"Birthday:  " . $_POST[birthday] .  "\n\n" .
		
		"Visited before?:  " . $_POST[visited] . "\n\n" .
		
		"Would like to visit:  " . $_POST[visitDay] . " at " . $_POST[visitTime] . "\n\n" .
	
		"Type of visit: " . $_POST[requestType];
	
		$to = "lifelineprc@sbcglobal.net";
	
		$subject = "Appointment Request";
	
		$from = "webmaster@lifelineprc.com";
	
		$headers = "From: $from"; // You could add other headers in here, like cc or bcc if you wanted
	
		
	
		mail( $to , $subject , $messageBody , $headers );


	print("<script type=\"text/javascript\">window.location = 'success.html'</script>");

?>