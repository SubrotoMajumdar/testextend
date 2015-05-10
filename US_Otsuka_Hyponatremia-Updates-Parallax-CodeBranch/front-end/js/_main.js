/**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

(function($) {

	// Setup variables
	
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	var s = skrollr.init({
    forceHeight: false,
    render : function(data){
			$("#getDataInfo").text(data.curTop);
			curr_scroll = data.curTop;					
		},
    easing: {
			vibrate: function(p) {
				return Math.sin(p * 10 * Math.PI);
			}
		},
		
});
	

} )(jQuery);
