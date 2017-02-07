$(document).ready(function(){
	$('.slick-slider').slick({
		lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

	$("#pop").on("click", function() {
	   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
	   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
	});
});
