"use strict";

var home=$("#home");
var about=$("#about");
var contact=$("#contact");
var exitcontact=$("#exitcontact");
var content=$('#content');
var contactsrc=$('#contactsrc');
var slider=$('#slider');
var images=[];
var currentPage=1;
$( document ).ready(function() {
	$('button').button();
	$('button').tooltip();
	$('#content').resizable();
	$('#slider').resizable();
});


function image (src,alt,type,classname,id) {
	this.src=src;
	this.alt='Lorem ipsum alt';
	this.type='<img/>';
	this.classname='sliderimg';
}

var img1=new image();
var img2=new image();
var img3=new image();
var img4=new image();
var img5=new image();
var img6=img1;
var img0=img5;

images.push(img0);
images.push(img1);
images.push(img2);
images.push(img3);
images.push(img4);
images.push(img5);
images.push(img6);

	img1.src='https://www.freewebheaders.com/wordpress/wp-content/gallery/natural-abstract/colorful-plants-abstract-painting-art-website-header.jpg';
	img1.id='1';

	img2.src='https://www.freewebheaders.com/wordpress/wp-content/gallery/artistic-abstract/fractal-fields-abstract-art-header-2781.jpg';

	img2.id='2';

	img3.src='http://www.leeoconnor.com/blog/wp-content/uploads/2012/02/2012-Blog-Header.jpg';
	img3.id='3';
	img4.src='http://www.solasfera.com/images/content-headers/science_meets_art_header.jpg?sfvrsn=0';
	img4.id='4';
	img5.src='https://www.freewebheaders.com/wordpress/wp-content/gallery/artistic-abstract/colorful-fractal-floral-abstract-art-web-header.jpg';
	img5.id='5'

$(img0.type,{ class:img0.classname,id:img0.id,src: img0.src, }).appendTo(slider);

$(img1.type,{ class:img1.classname,id:img1.id,src: img1.src, }).appendTo(slider);

$(img2.type,{ class:img2.classname,id:img2.id,src: img2.src, }).appendTo(slider);

$(img3.type,{ class:img3.classname,src: img3.src, id:img3.id,}).appendTo(slider);

$(img4.type,{ class:img4.classname,id:img4.id,src: img4.src, }).appendTo(slider);

$(img5.type,{ class:img5.classname,id:img4.id,src: img5.src, }).appendTo(slider);

$('body').css('background-image', 'url(https://www.toptal.com/designers/subtlepatterns/patterns/pink%20dust.png)');


$('<img />',
             { class: 'img',
               src: 'https://myanimelist.cdn-dena.com/images/anime/8/77831.jpg', 

             }).appendTo(content);
$('<span/>',
             { class: 'text',
               text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 
 
             }).appendTo(content);
$('<span/>',
             { class: 'text',
               text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
				 }).appendTo(content);

$('<img />',
             { class: 'img',
               src: 'http://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg', 
 
             }).appendTo(content);
$('<span/>',
             { class: 'text',
               text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
 					width:'65vw',
             }).appendTo(content);

about.click(function() {callAbout();});

function callAbout() {
	$('.img, .text').hide();
	content.children(':first').slideToggle();
	content.css({background:'gray'});
	about.css({background:'#ff1a75',color:'white'});
	home.css({background:'lightgray',color:'black'});
	about.animate({top: '14vh',});
	home.animate({top: '15.5vh',});
}
home.click(function() {callHome();});
function callHome() {
	home.animate({	top: '14vh'});
	about.animate({ top: '15.5vh'});
	$('.img , .text').slideDown();
	content.children(':first').hide();
	content.css({background:'white'});
	home.css({background:'#ff1a75',color:'white'});
	about.css({background:'lightgray',color:'black'});
}

contact.click(function() {
    callContact();
});
function callContact() {
	contactsrc.slideDown()
	contactsrc.css({display:'block'});
	exitcontact.css({display:'block'});
}
exitcontact.click(function() {
    callExitContact();
});
function callExitContact() {
	contactsrc.slideUp();
	exitcontact.hide();
}

 function callpage(x) {
	 currentPage=x;
 	 var z=images[x-1];
	 var y=images[x];
	 var j=images[x+1];
	 $('#slider > img').remove();
	 $('#sliderbtn > button').css({background:'rgb(255,153,0)'});
	 $('#sliderbtn > button:nth-of-type('+x+')').css({background:'rgb(255,26,117)'});
	 $(z.type,{ class:z.classname,id:z.id,src: z.src, }).animate({left: '-46vw'}).appendTo(slider);
	 $(y.type,{ class:y.classname,id:y.id, src: y.src, }).animate({left: '-46vw'}).appendTo(slider);
	 $(j.type,{ class:j.classname,id:j.id,src: j.src, }).animate({left: '-46vw'}).appendTo(slider);

 }

$(document).on('mouseenter', ".sliderimg", function() {
	var currentObject=images[currentPage];
	var alt=currentObject.alt;
	var text2 = $('<div/>',
             { class: 'hoverimg',
               text: alt,
 
             })
              .appendTo($('#slider'));
});
$(document).on('mouseleave', ".sliderimg", function() {
	$('.hoverimg').remove();
});
$(document).on('click', ".sliderimg", function() {
	var clicked=$(this).attr("id")
	var click=parseInt(clicked);
	callpage(click);
});
	
var intervalId = null;
var varCounter = currentPage;
var varName = function(){
     if(varCounter < images.length-2) {
          varCounter++;
          callpage(currentPage+1);
     } else {
          clearInterval(intervalId);
     }
};

$(document).ready(function(){
     intervalId = setInterval(varName, 5000);
});
