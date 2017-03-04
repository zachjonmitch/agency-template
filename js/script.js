var testimonials = [
  {quote: '"(2)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"', author: "- Author Two"},
  {quote: '"(3)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"', author: "- Author Three" },
  {quote: '"(4)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"', author: "- Author Four" }
];

$(document).ready(function() {
  //Simple nav bar scroll animation.
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    if (y_scroll_pos > scroll_pos_test) {
	    $('nav').stop().animate({height: "60px", opacity: "1"}, 400);
      $('nav ul').stop().animate({padding: "9px"}, 400);
      $('nav ul li').stop().animate({padding: "20px"}, 400);
    }
    else {
      $('nav').stop().animate({height: "40px", opacity: ".8"}, 400);
      $('nav ul').stop().animate({padding: "0px"}, 400);
      $('nav ul li').stop().animate({padding: "0px"}, 400);
    }
  });
  //Arrow fade animation in Testimonials.
  $('.testimonials').hover(function() {
    $(".arrows").stop().fadeIn("slow");
  }, function() {
    $(".arrows").stop().fadeOut("fast");
  });
  
  //Testimonial quotes fade in when fa-arrow-right div is clicked.
  $('.fa-arrow-right').click(function() {
    var randomQuote = testimonials[Math.floor(Math.random() * testimonials.length)];
    $('.quotes').hide().html(randomQuote.quote).fadeIn(1000);
    $('.author').hide().html(randomQuote.author).fadeIn(1000);
  });
  //Testimonial quotes fade in when fa-arrow-left div is clicked.
  $('.fa-arrow-left').click(function() {
    var randomQuote = testimonials[Math.floor(Math.random() * testimonials.length)];
    $('.quotes').hide().html(randomQuote.quote).fadeIn(1000);
    $('.author').hide().html(randomQuote.author).fadeIn(1000);
  });
  
  //Testimonials fade in when dots are clicked.
  $('#dotsTwo').click(function() {
    $('.quotes').hide().html(testimonials[0].quote).fadeIn(1000);
    $('.author').hide().html(testimonials[0].author).fadeIn(1000);
  });
  
  $('#dotsThree').click(function() {
    $('.quotes').hide().html(testimonials[1].quote).fadeIn(2000);
    $('.author').hide().html(testimonials[1].author).fadeIn(2000);
  });
  
  $('#dotsFour').click(function() {
    $('.quotes').hide().html(testimonials[2].quote).fadeIn(2000);
    $('.author').hide().html(testimonials[2].author).fadeIn(2000);
  }); 
});