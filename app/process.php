<?php

$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data

$pdata = json_decode(file_get_contents('php://input'), true);

// validate the variables ======================================================
if (empty($pdata['name']))
        $errors['name'] = 'Name is required.';

if (empty($pdata['email']))
        $errors['email'] = 'Email is required.';

if (empty($pdata['dob']))
        $errors['dob'] = 'Date of Birth is required.';

// return a response ===========================================================

// response if there are errors
if ( ! empty($errors)) {

    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors']  = $errors;
} else {
    // create and send off email
    if(sendAppointmentRequest($pdata)){
        // if the email sent and there are no errors, return a message
        $data['success'] = true;
        $data['message'] = 'Request has been submitted! You will be contacted soon to confirm an appointment date.';
    } else {
        // if the email could not send, return a message
        $data['success'] = false;
        $data['error'] = 'Request could not be sent';
    }
    
    
}

// return all our data to an AJAX call
echo json_encode($data);

function sendAppointmentRequest($posted){

    /* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
    //$to_email = "lifelineprc@sbcglobal.net";
    $to_email = "missywilliams85@gmail.com";
    
    
    $subject = "New Appointment Request";
    
    $message = "A new appointment request has been submitted through the website.\n\n";
    $message .= "Name: ".$posted['name'];
    $message .= "\nEmail: ".$posted['email'];
    $message .= "\nDOB: ".$posted['dob'];
    $message .= "\n\nHas visisted Lifeline before: ".(($posted['previous'])?"Yes":"No");
    
    $message .= "\n\nWould prefer to visit on a ".$posted['day']['day']." at a preferred time of ".$posted['time']['time'];
    $message .= "\n\nType of visit: ".$posted['service']['service'];
    
    /* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
    if (mail($to_email,$subject,$message)) {
      return true;
    } else {
      return false;
    }
}