$(document).ready(function(){ 



  /* Menu BTN Open and Close */
  const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
  /* Menu BTN Open and Close End */

/* Sticky Menu */


/* Navbar Scrooling */

  $(window).scroll(function(){

var scrolling = $(window).scrollTop();
var nav_sticky = $('.nav-customize');

if(scrolling >= 300){

  nav_sticky.addClass('nav-bg-setting')

}else{

  nav_sticky.removeClass('nav-bg-setting');
}

 });


/* Scroll To top Buttton Start */

/* Check to see if the window is top if not then display button */

 $(window).scroll(function(){

  // Show button after 100px

  var showAfter = 400;
  if ( $(this).scrollTop() > showAfter ) { 
   $('.back-to-top').fadeIn();
  } else { 
   $('.back-to-top').fadeOut();
  }
 });
 
 //Click event to scroll to top
 
 $('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},800);
return false;
 });

/* Scroll To top Buttton End */



/* Close Icon In menu  end*/

    $('.slider-banner').slick({
        dots: true,
        arrows:false,
        infinite: true,
       slidesToShow:1,
         slidesToScroll:1,
         autoplay: false,
      autoplaySpeed: 1000,

      });

      $('.team-slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
       slidesToShow:4,
         slidesToScroll:1,
         autoplay: true,
      autoplaySpeed: 1000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]

      });

      $('.venobox').venobox({
    framewidth : '800px',      
    frameheight: '400px',               
    border     : '2px solid #06bbb3',  
    bgcolor    : '##06bbb3',                         
    share      : ['facebook', 'twitter', 'linkedin'],
    spinner:    'three-bounce',
    spinColor: '#06bbb3',
    numeratio  : true,  
    infinigall : true,  

      })

      /* Review Slider jQUery */

      $('.slider-text-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-review'
      });

      $('.slider-review').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-text-for',
        dots:false,
        arrows:true,
        prevArrow:'.team-arrow-left',
        nextArrow:'.team-arrow-right',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
      });

    

      // typed js
    $(".typed").typed({
      strings: ["Web Designer.", "Web Developer.", "Full stack web Developer", 'WordPress Designer'],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 400,
      // backspacing speed
      backSpeed: 50,
      // time before backspacing
      backDelay: 400,
      // loop
      loop: true,
      // false = infinite
      loopCount: 100,
      // show cursor
      showCursor:true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });


    // typed js
    $(".typed2").typed({
      strings: ["Front-End Development"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 400,
      // backspacing speed
      backSpeed: 50,
      // time before backspacing
      backDelay: 400,
      // loop
      loop:true,
      // false = infinite
      loopCount: 100,
      // show cursor
      showCursor:true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });


     // typed js
     $(".typed3").typed({
      strings: ["Back-End Development"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 400,
      // backspacing speed
      backSpeed: 50,
      // time before backspacing
      backDelay: 400,
      // loop
      loop:true,
      // false = infinite
      loopCount: 100,
      // show cursor
      showCursor:true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });

    // Smooths scrolling
$('body').scrollspy({target: ".navbar", offset: 50});


});





