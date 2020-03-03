$(window).on('load',function() {
  
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

	$('.signin').on('click', function(e) {
		e.preventDefault();
		$('.modal').show();
		$('html').addClass('overflow');

	});

	$('.modal').on('click' , function(e) {
		if(!$(e.target).is('.modal-content')) {
			$('html').removeClass('overflow');
			$('.modal').hide();
		}
	});

	$('.close').on('click' , function() {
		$('html').removeClass('overflow');
		$('.modal').hide();
	});

});

$(window).on('load resize', function(){
	if($(window).width() < 768) {
	  $('.features-slider').not('.slick-initialized').slick({
			dots: true,
			customPaging: function(slider, i) {
	      return '<span class="dots"></span>';
	    },
			infinite: true,
			speed: 300,
			arrows: false,
			adaptiveHeight: false,
			responsive: [
	      {
	        breakpoint: 9999,
	        settings: "unslick"
	      },
	      {
	        breakpoint: 767,
	        settings: {
	          slidesToShow: 1
	        }
	      }
      ]
		});
	}
})