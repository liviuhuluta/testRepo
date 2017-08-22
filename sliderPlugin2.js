(function($) {
	$.fn.makeSlider = function(options) {

	  return this.each (function() {
		  
        var settings = $.extend({
            // These are the defaults.
            animate:true,
            transitionTime: 500,
			vertical:false,
			displayPrevNext:true,
			infiniteTransition:true,
			slideEl:'li',
        }, options );
		
		
			var slider=$(this);
			
			var elems,currentPage=1,parentClass,unit='vw',buttonNo,currentPage ;
			
			$( "button" ).focus(function() {
			  $('.button').css("background-color", "lightblue");
			  $(this).css({backgroundColor: "#80bfff",outline:"0"}); 
			});
			
			$(this).css({
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
			
			
			$(this).find( settings.slideEl ).css({
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
				buttonNo=slider.children().length;
				for(var i=1;i<=buttonNo-2;i++){
					$('<button />',{ class: 'button',name:+i}).click(function(){callPage($(this).attr('name')-1);}).appendTo(slider);
				}
				
				$('.button').css({
					backgroundColor    : "lightblue",
					width              : "1.3vw",
					height             : "1.3vw",
					marginLeft         : "10px",
					"border-radius"    : "100%",
					display            : "inline-block",
					margin             : "auto",
					position           : "relative",
					clear              : "left",
					top                : "1.8vh",
					left               : "-300vw",

				});
			}
			makeButtons();
			
			function callPage(x){
				currentPage=x;
				distance=-30-40*x+unit;
				slider.find( settings.slideEl ).animate({left : distance},settings.transitionTime);
			}
			
			switch ( settings.vertical ) {
	 
				case true:
					unit='vh';

					slider.css({
						backgroundColor: "gray",
						width          : "20vw",
						height         : "60vh",
						left           : "20vw",
						position       : "relative",
						top            : "1vw",
						overflow       : "hidden",
						display        : "inline-block",
						"word-wrap"    : "break-word",
						"white-space"  : "nowrap",
					});
					
					slider.find( settings.slideEl ).css({
						backgroundColor: "beige",
						width          : "18vw",
						height         : "40vh",
						clear          : "both",
						left           : "16px",
						margin         : "0px",
						position       : "relative",
						display        : "block",
						textAlign      : "center",
						lineHeight     : "1990%",
						top            : "-35vh ",
						border         : "1px solid black",
						marginTop      : "10px",
					});

					$('.button').removeAttr( 'style' );
					$('.button').css({
						backgroundColor    : "lightblue",
						width              : "1.3vw",
						height             : "1.3vw",
						marginLeft         : "10px",
						"border-radius"    : "100%",
						display            : "block",
						margin             : "auto",
						position           : "relative",
						top                : "-305vh",
						left               : "-8.5vw",

					});
					break;
		
				case false:
					unit='vw';
					animPosition='left';
					break;
				
			 
			}
			switch (settings.animate){
				case true:
					if(settings.vertical==true){
							function callPage(x){
								currentPage=x;
								distance=-30-40*x+unit;
								slider.find( settings.slideEl ).animate({top : distance},settings.transitionTime);
							}
					}
							
					if(settings.vertical==false){
							function callPage(x){
								currentPage=x;
								distance=-30-40*x+unit;
								slider.find( settings.slideEl ).animate({left : distance},settings.transitionTime);
							}
					}
					
					break;
				case false:
						if(settings.vertical==true){
							function callPage(x){
								
								currentPage=x;
								distance=-30-40*x+unit;
								slider.find( settings.slideEl ).css({top : distance},settings.transitionTime);
							}
						}
						
						if(settings.vertical==false){
							function callPage(x){
								
								currentPage=x;
								distance=-30-40*x+unit;
								slider.find( settings.slideEl ).css({left : distance});
							}
						}

			}
			
			switch (settings.displayPrevNext){

				case false:
						$( "button" ).focus(function() {
						  $('.button').css("background-color", "lightblue");
						  $(this).css({backgroundColor: "#80bfff",outline:"0"}); 
						});
						slider.children().first().css({'opacity':'0'});
						//slider.children().last().prev().css({'opacity':'0'});
						if(settings.vertical==false){
							slider.find( settings.slideEl ).css({
								left           : "-60vw",
								width          : "59.5vw",
							});
						$('.button').removeAttr( 'style' );
						$('.button').css({
							backgroundColor    : "lightblue",
							width              : "1.3vw",
							height             : "1.3vw",
							marginLeft         : "10px",
							"border-radius"    : "100%",
							display            : "inline-block",
							margin             : "auto",
							position           : "relative",
							clear              : "left",
							top                : "1.8vh",
							left               : "-455vw",

						});
							if(settings.animate==true){
								function callPage(x){
									
									currentPage=x;
									var z=x+1;
									distance=-60*z+unit;
									slider.find( settings.slideEl ).animate({left : distance},settings.transitionTime);
								}
							}
							if(settings.animate==false){
								function callPage(x){
						
									currentPage=x;
									var z=x+1;
									distance=-60*z+unit;
									slider.find( settings.slideEl ).css({left : distance},settings.transitionTime);
								}
							}
						}
						
						if(settings.vertical==true){
							slider.find( settings.slideEl ).css({
								left           : "1vw",
								width          : "18vw",
								height         : "59vh",
								top            : "-59vh",
							});
							$('.button').removeAttr( 'style' );
							$('.button').css({
								backgroundColor    : "lightblue",
								width              : "1.3vw",
								height             : "1.3vw",
								marginLeft         : "10px",
								"border-radius"    : "100%",
								display            : "block",
								margin             : "auto",
								position           : "relative",
								top                : "-460vh",
								left               : "-8.5vw",

							});
							if(settings.animate==true){
								function callPage(x){
									currentPage=x;
									var z=x+1;
									distance=-60.5*z+unit;
									slider.find( settings.slideEl ).animate({top : distance},settings.transitionTime);
								}
							}
							if(settings.animate==false){
								function callPage(x){
									currentPage=x;
									var z=x+1;
									distance=-60.5*z+unit;
									slider.find( settings.slideEl ).css({top : distance},settings.transitionTime);
								}
							}

						}
				break;
			
			}
			var interval;
			switch (settings.infiniteTransition){
				case true:
				function setInfinite(){
					interval=setInterval(function(){ callPage(currentPage+1);check(); }, 500);

					
				}
				function check(){
					if(currentPage==buttonNo-3){
						clearInterval(interval);
						callPage(0);
						setInfinite();
					}
				}
				setInfinite();
				break;
			
			}
    
	  });
	};
})(jQuery)