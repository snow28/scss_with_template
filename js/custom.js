$(document).ready(function(){
    $('.slider').slick({

	});

    $('.js-nav-menu').on('click',function(){
        $('.body').toggleClass('body__move');
        $('.banner').toggleClass('banner__move');
        $('.menu').toggleClass('menu__show');
    });


    $(".nav-md__list-menu_js").on('click',function(){
        var x = $('.nav-md').position();
        if(x.left>105)x.left = 105;
        $('.menu').css('margin-left', x.left); // !!!!!!!!!!!КАК ЭТО СДЕЛАТЬ

        $('.menu').toggleClass('menu__show');
        if($('.menu__drop-down_ul').hasClass('menu__drop-down_ul-show')){
            $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');
        }
    });


    $('.man-gifts-open-js').on('click',function(){
        $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');
    });

    $('body').on('click', function (e) {  // как тут правильно сделать?????
        if (!$(e.target).hasClass('nav-md__list-menu') // как узнать или есть ребенок
            && !$(e.target).parent().hasClass('menu__list-item')
            && !$(e.target).hasClass('js-nav-menu')
            && !$(e.target).parent().hasClass('js-nav-menu')
        ) {
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



