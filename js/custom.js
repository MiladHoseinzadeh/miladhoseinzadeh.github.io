
// PRELOADER

$(window).load(function(){
    $('.preloader').delay(10).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "../img/tm-bg-slide-1.jpg", 
	 		 "../img/tm-bg-slide-2.jpg",
			 "../img/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})