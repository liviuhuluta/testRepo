(function ( $ ) {
 
    $.fn.makeSlider = function( options ) {
		var slider=this;
		var elems,currentPage=1,parentClass,unit='vw',buttonNo ;
        var settings = $.extend({
            // These are the defaults.
            animate:true,
            transitionTime: 500,
			vertical:false,
			displayPrevNext:true,
			infiniteTransition:true,
			slideEl:'li',
        }, options );
		
         var el=settings.slideEl;
		

			
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
				console.log(slider.attr('class'));
				buttonNo=slider.children().length;
				parentClass=slider.attr('class');
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
					backgroundColor    : "lightblue",
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
					
					slider.find( el ).css({
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
					$('.'+parentClass+'button').css({
						height              : "10vw",
						position           : "absolute",
						display            : "inline-block",
						top                : "17vh",
						left               : "-9vw",
						
					});
					$('.button').css({
						backgroundColor    : "lightblue",
						width              : "1.3vw",
						height             : "1.3vw",
						marginLeft         : "10px",
						"border-radius"    : "100%",
						display            : "block",
						margin             : "auto",
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
						slider.children().first().css({'opacity':'0'});
						slider.children().last().prev().css({'opacity':'0'});
						if(settings.vertical==false){
							this.find( settings.slideEl ).css({
								left           : "-61vw",
								width          : "59.5vw",
							});
							function callPage(x){
								
								currentPage=x;
								var z=x+1;
								distance=-59.81*z+unit;
								slider.find( settings.slideEl ).animate({left : distance},settings.transitionTime);
							}
						}
						
						if(settings.vertical==true){
							this.find( settings.slideEl ).css({
								left           : "1vw",
								width          : "18vw",
								height         : "59vh",
								top            : "-59vh",
							});
							function callPage(x){
								currentPage=x;
								var z=x+1;
								distance=-60.5*z+unit;
								slider.find( settings.slideEl ).animate({top : distance},settings.transitionTime);
							}
						}
				break;
			
			}
			
			switch (settings.infiniteTransition){
				case true:
				function infiniteTrans1 (){

					var p=1;
						do{
								callPage(p);
								p++;
						}
						while(p<buttonNo-2);
					//infiniteTrans2();
				}
				
				function infiniteTrans2 (){
					var b=5;
					do{
							callPage(b);
							b--;
					}
					while(b>=0);
					infiniteTrans1();
				}
				infiniteTrans1();
				break;
			
			}

    };
 
}( jQuery ));