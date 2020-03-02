$(window).on('load',function() {
  
  $(window).resize(resize);
  resize();
 
 	$('.one').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,arrows: false,
		adaptiveHeight: false
	});

 	$('nav a').on('click',function() {
		if(!$(this).hasClass('active')) {
      $("nav .active").removeClass("active");
      $(this).addClass("active");        
		}
	});

  $(".hamburger").on("click",function() {
  	$('nav').toggleClass('showhide');
    $(".hamburger").toggleClass('open');
	});
	
});

function resize() {
  if ($(window).width() <= 767) {
   $('.feature ul').addClass('one');
  }
  else {$('.feature ul').removeClass('one');}
}