<?php include 'header.php'; ?>

<script>
	$(document).ready(function(){
		$('#appointment-form').formManager({

		});
	});
</script>

<div class="row">
	<div class="span12 text-center">
		<h3>Contact Us</h3>
		<p><em>Lifeline is a non-profit organization, providing help and non-judgmental support to anyone facing unexpected pregnancy, regardless of his or her income, marital status, religious beliefs or what decision is made regarding the pregnancy.<br/> 
			<b>All of our services are free and confidential.</b></em></p>
	</div>
</div>


<div class="row">
	

	<div class="contact-desc well span6" style="margin-top:20px;height:620px;" id="appointment-form">
		
		<h4>Request an appointment by filling in the form below:</h4>
		<form method="POST">
			<p>
				<input name="Name" type="text" placeholder="Name"/>
			</p>
			<p>
				<input type="text" name="Email Address" placeholder="Email"/>
			</p>
			<p>
				<input name="Date of Birth" type="text" placeholder="Date of Birth"/>
			</p>
			<p>
				<b>Have you been to Lifeline before?</b><br/>

				<label class="radio inline">Yes<input type="radio" name="Visited Before?" id="visited1" value="1" checked /></label>

				<label class="radio inline">No<input type="radio" name="Visited Before?" id="visited0" value="0" /></label>
			</p>
			<p>
				<b>When would you like to visit?</b>
			</p>
			<p>
				Day:
				<select id="day" name="Preferred day to visit">
					<option value="Monday">Monday</option>
					<option value="Tuesday">Tuesday</option>
					<option value="Wednesday">Wednesday</option>
					<option values"Thursday">Thursday</option>
				</select>
			</p>
			<p>
				Time:
				<select id="time" name="Preferred time to visit">
					<option value="12">12:00pm</option>
					<option value="1">1:00pm</option>
					<option value="2">2:00pm</option>
					<option values"3">3:00pm</option>
					<option values"3">4:00pm</option>
					<option values"3">5:00pm (Thurs only)</option>
				</select>
			</p>
			<p><b>Requested service:</b><br />
				<label class="radio inline">Pregnancy Test<input type="radio" name="Type of Visit" id="type-test" value="Pregnancy Test" checked /></label>
				<label class="radio inline">Ultrasound<input type="radio" name="Type of Visit" id="type-ultra" value="Ultrasound" /></label>
				<label class="radio inline">Other Service<input type="radio" name="Type of Visit" id="type-ultra" value="Other Service" /></label>
			<p><em>We cannot guarantee that the appointment time you request will be available, however, we will do all we can to schedule an appointment for you as close to the time you requested as possible.  You will receive a confirmation email for your appointment at the email address you listed above. <br/><b>Please double check before hitting submit that you have entered the email address correctly. Thank you.</b></em></p>
			<p>
				<input value="submit" type="submit" />
				<input value="reset" type="reset" />
			</p>    
			</form>
	</div>

	<div class="span5" style="margin-top:25px;margin-bottom:20px;">
		<div style="clear:both;height:120px;">
				<h3>Lifeline Pregnancy Help Clinic</h3>
				
				<h4>306 W. Washington<br/>
				Kirksville, MO 63501<br/>
				
				phone: 660-665-5688<br/>

				fax: 660-665-9497<br/>

				<a href="mailto:lifelineprc@sbcglobal.net">LifelinePRC@sbcglobal.net</a>
		
			<iframe style="margin-top:50px;" width="350" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=306+W.+Washington+Kirksville,+MO+63501&amp;oe=utf-8&amp;client=firefox-a&amp;channel=rcs&amp;ie=UTF8&amp;hq=&amp;hnear=306+W+Washington+St,+Kirksville,+Missouri+63501&amp;t=m&amp;source=embed&amp;ll=40.194479,-92.585735&amp;spn=0.009834,0.012832&amp;z=15&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q=306+W.+Washington+Kirksville,+MO+63501&amp;oe=utf-8&amp;client=firefox-a&amp;channel=rcs&amp;ie=UTF8&amp;hq=&amp;hnear=306+W+Washington+St,+Kirksville,+Missouri+63501&amp;t=m&amp;source=embed&amp;ll=40.194479,-92.585735&amp;spn=0.009834,0.012832&amp;z=15" style="text-align:left">View Larger Map</a></small>
			
		</div>
	</div>
</div>

<?php include 'footer.php'; ?>