(function ( $ ) {
 
    $.fn.makeSlider = function( options ) {
		var slider=this;
		var elems,currentPage=1;
        var settings = $.extend({
            // These are the defaults.
            animate:true,
            transitionTime: "500",
			vertical:false,
			displayPrevNext:true,
			infiniteTransition:true,
			slideEl:'li',
        }, options );
		
		this.css({
			backgroundColor: "gray",
			width          : "60vw",
			height         : "20vh",
			left           : "20vw",
			position       : "relative",
			top            : "1vw",
			overflow       : "hidden",
			display        : "inline-block",
			"word-wrap"    : "break-word",
			"white-space"  : "nowrap",
		});
		
		
		this.find( settings.slideEl ).css({
			backgroundColor: "beige",
			width          : "40vw",
			height         : "18vh",
			marginLeft     : "2px",
			left           : "-30vw",
			position       : "relative",
			display        : "inline-block",
			textAlign      : "center",
			lineHeight     : "990%",
			top            : "0.7vw",
		});
		function makeButtons(){
			
			var buttonNo=slider.children().length;
			var parentClass=slider.attr('class');
			$('<span />',{ class: parentClass+'button' }).appendTo(slider);
			
			for(var i=1;i<=buttonNo-2;i++){
				$('<button />',{ class: 'button', id:+i}).click(function(){callPage($(this).attr('id')-1);}).appendTo($('.'+parentClass+'button'));
			}
			
			
			
			$('.'+parentClass+'button').css({
				width              : "20vw",
				position           : "absolute",
				display            : "inline-block",
				top                : "16vh",
				left               : "25vw",
				
			});
			
			$('.button').css({
				backgroundColor    : "olive",
				width              : "1.3vw",
				height             : "1.3vw",
				marginLeft         : "10px",
				"border-radius"    : "100%",
				display            : "inline-block",
				margin             : "auto",

			});
		}
		makeButtons();
		
		function callPage(x){
			currentPage=x;
			distance=-30-40*x+"vw";
			slider.find( settings.slideEl ).animate({left : distance});
		}
		
    };
 
}( jQuery ));



















