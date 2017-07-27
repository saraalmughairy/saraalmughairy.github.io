$(function(){

	$("#product-launch").load('images/about-me/product-launch.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('');
		}

	});
});