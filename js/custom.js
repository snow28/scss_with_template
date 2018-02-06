$(document).ready(function(){
    $('.slider').slick({
		nextArrow : '<div class="slider__next slider__arrow"><div class="slider__arrow_img"></div></div>',
		prevArrow : '<div class="slider__prev slider__arrow"><div class="slider__arrow_img"></div></div>'
	});

    //we adding classes to move our body with all elements to open aside menu for small devices
    $('.js-nav-menu').on('click',function(){
        $('.main-wrapper').toggleClass('main-wrapper__move');
        $('.banner').toggleClass('banner__move');
        $('.menu').toggleClass('menu__shows');
    });


    $(".nav-md-open-js").on('click',function(){
        var x = $('.nav-md').position();
        if(x.left>105)x.left = 105;
        $('.menu').css('margin-left', x.left);
    });


    $(window).on('click', function (e) {

        if($(e.target).hasClass('nav-md-open-js')){
        	//showing menu when click on button
            $('.menu').toggleClass('menu__show');
            if($('.menu__drop-down_ul').hasClass('menu__drop-down_ul-show')){
                $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');
            }
            //opening second lvl of menu
		}else if($(e.target).hasClass('man-gifts-open-js') || $(e.target).parent().hasClass('man-gifts-open-js') ){
            $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');

            //Closing menu if user clicking not inside block we choosed
		}else if(!$(e.target).parent().hasClass('menu__list-item') &&  !$(e.target).hasClass('menu__list-item')){
            if($('.menu').hasClass('menu__show')){
                $('.menu').toggleClass('menu__show');
            }
		}


    });


});


$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



