<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Lifeline Pregnancy Help Clinic</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div class="main">
<div class="stage">
<div class="nav">
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="options.html">Options</a></li>
<li><a href="symptoms.html">Symptoms</a></li>
<li><a href="abortion.html">Abortion Education</a></li>
<li><a href="services.html">Services</a></li>
<li><a href="locations.html">Locations</a></li>
<li><a href="appointment.php">Make an Appointment</a></li>
<li><a href="forMen.html">For Men</a></li>
<li><a href="ewyl.html">Earn While You Learn</a></li>
<li><a href="postabortion.html">Post-abortion Support</a></li>
<li><a href="dadline.html">DadLINE</a></li>
<li><a href="purefreedom.html">Pure Freedom</a></li>
</ul>
</div>
		<div class="inside">
			<p>Please fill out this form if you would like to request an appointment time.</p>

			<form method="POST" action="process.php">
			<p>
				<label>Name: </label><input name="name" size="28" type="text" />
			</p>
			<p>
				<label>Email:</label><input name="email" size="30" type="text" />
			</p>
			<p>
				<label>Date of Birth: </label><input name="birthday" size="20" type="text" />
			</p>
			<p>
				Have you been to Lifeline before?&nbsp 
					<label>yes:</label><input type="radio" name="visited" value="yes" />
					<label>no:</label><input type="radio" name="visited" value="no" />
			</p>
			<p>
				When would you like to visit?
			</p>
			<p>
				Day:
			</p>
			<p>
				<input type="radio" name="visitDay" value="Monday" /><label>Monday</label><br />
				<input type="radio" name="visitDay" value="Tuesday" /><label>Tuesday</label><br />
				<input type="radio" name="visitDay" value="Wednesday" /><label>Wednesday</label><br />
				<input type="radio" name="visitDay" value="Thursday" /><label>Thursday</label>
			</p>
			<p>Time:
			</p>
			<p>
				<input type="radio" name="visitTime" value="12:00" /><label>12:00pm</label><br />
				<input type="radio" name="visitTime" value="1:00" /><label>1:00pm</label><br />
				<input type="radio" name="visitTime" value="2:00" /><label>2:00pm</label><br />
				<input type="radio" name="visitTime" value="3:00" /><label>3:00pm</label><br />
				<input type="radio" name="visitTime" value="4:00" /><label>4:00pm</label><br />
				<input type="radio" name="visitTime" value="5:00" /><label>5:00pm (Thursdays only)</label>
			</p>
			<p>Requested service:<br />
				<input type="radio" name="requestType" value="Pregnancy test" /><label>Pregnancy test</label><br />
				<input type="radio" name="requestType" value="Ultrasound" /><label>Ultrasound</label><br />
				<input type="radio" name="requestType" value="Other service" /><label>Other service</label><br />
			<p>
				We cannot guarantee that the appointment time you request will be available, however, we will do all we can to schedule an appointment for you as close to the time you requested as possible.  You will receive a confirmation email for your appointment at the email address you listed above.  <b>Please double check before hitting submit that you have entered the email address correctly  Thank you.</b>
			</p>
			<p>
				<input value="submit" type="submit" />
				<input value="reset" type="reset" />
			</p>    
			</form>
		</div>
	</div>

</div>


</body>
</html>


