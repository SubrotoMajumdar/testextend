$(function(){
		var navbar = $(".navbar");
	var headerFixed={
		init:function(){
		
		},
	   onScroll : function(){
	   	// if(($(window).scrollTop()>=750)){
	   		// navbar.addClass('navbar-fixed-top');
	   		// navbar.css('background-color',"black");
	   		// navbar.animate({height:100},500);
// 	   		
	   	// }
	   	// else{
	   		// navbar.removeClass('navbar-fixed-top');
	   		// navbar.css('background-color',"transparent"); 
	   		// navbar.animate({height:0},20);
// 	   		
	   	// }
	     }
	};
	
	$(document).ready(function(){
		headerFixed.onScroll();
		
	});
	
	$(window).scroll(function(){
		headerFixed.onScroll();
		
	});
});
