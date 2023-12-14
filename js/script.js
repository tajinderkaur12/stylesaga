$(document).ready(function() {
    $("#toggle").click(function() {
        $("header .nav-ul").slideToggle();
    });
});
$(function() {
	// Owl Carousel
	var owl = $(".reviews-carousel");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 3
			},

			1366: {
			  items: 3
			}
		  }
	});
});
$(function() {
	// Owl Carousel
	var owl = $(".active-slider");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 1
			},

			1366: {
			  items: 1
			}
		  }
	});
});