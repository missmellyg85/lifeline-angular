<?php include 'header.php'; ?>

<script>
	var service = "<?php echo $_GET['service']; ?>";
	$(document).ready(function(){
		console.log(service);
		if(service){
			$('#services-content').load('services/'+service+'.php');
		}
        $('.service').click(function(){
			console.log(this.id);
			$('#services-content').load('services/'+this.id+'.php');
		});
    });
</script>

<div class="row">
	<div class="span12 text-center">
		<h3>Free &amp; Confidential Services</h3>
		<p><em>Lifeline is a non-profit organization, providing help and support to anyone facing unexpected pregnancy, regardless of his or her income, marital status, religious beliefs or what decision is made regarding the pregnancy. <b>All of our services are free and confidential.</b></em></p>
	</div>
</div>
<div class="row icons" style="padding-top:15px;">
	<div class="span2 offset2 service" id="tests"><img src="img/icons/services.png"/>
		<br/><span>Pregnancy Tests &amp; Ultrasounds<span/></div>
	
	<div class="span2 service" id="programs"><img src="img/icons/programs.png"/>
		<br/><span>Programs</span></div>
	
	<div class="span2 service" id="community"><img src="img/icons/community.png"/>
		<br/><span>Community Referrals</span></div>
	
	<div class="span2 service" id="peer"><img src="img/icons/peer.png"/>
		<br/><span>Peer Counseling</span></div>
</div>

<div id="services-content">

</div>

<?php include 'footer-services.php'; ?>