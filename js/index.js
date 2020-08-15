'use strict'



// Navbar Sticky Scrolling

window.addEventListener('scroll',()=>{

    let nav = document.querySelector('#nav')

    if(window.scrollY > 0) {

        nav.classList.add('nav-scroll')

    }else {

        nav.classList.remove('nav-scroll')
    }


}, window.scrollY > 1)






$(document).ready(()=>{

    AOS.init();

    $("#menu").onePageNav();
    
})











// Preloader

$(window).on('load',()=>{

  $('#preloader').addClass('loader');

})












// Menu Close Function 

$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });








//Number Animation 

$('.counter').countUp({

    time:5000,
    delay:10
});





//Smooth Scrolling

 $('#menu').onePageNav({
	currentClass: 'current',
	changeHash: true,
	scrollSpeed: 1200,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});


//Form Validation 


$('#form').submit(function (e) { 
    e.preventDefault();

    alert("Message sent succesfully")
    $('#form')[0].reset();
    
});
