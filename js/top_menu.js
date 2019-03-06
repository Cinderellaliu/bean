$(function(){
	$('.menu-list>li').mouseenter(function(e){
		$(this).children('a').addClass('hover');
		$(this).find('img').attr('src','../images/menu_up.png');
		$(this).find('.submenu').show();
		$(this).siblings().find('.submenu').hide();
	    e.stopPropagation();
	})
	$('.menu-list>li').mouseleave(function(){
		$(this).children('a').removeClass('hover');
		$(this).find('img').attr('src','../images/menu_down.png')
	})
	$('.submenu,.menu-section').mouseleave(function(){
		$('.menu-list>li .submenu').hide()
	})
	$('.login-register').click(function(){
		$('#login').modal('hide');
	})
	$('.register-login').click(function(){
		$('#login').modal('show')
	})
	$('.login-mail').click(function(){
		$('#login').modal('hide');
	})
	$('.mail-pwd').click(function(){
		$('#mail').modal('hide');
	})
	$('.news-item-info>li:last-child').mouseenter(function(){
		$(this).find('.news-share').show()
	})
	$('.news-item-info,.news-share-list').mouseleave(function(){
		$('.news-share').hide()
	})
	$('.top-list>li b').mouseenter(function(e){
		$(this).find('.top-list-data').show()
	    e.stopPropagation();
	})
	$('.top-list>li b,.top-list-data').mouseleave(function(){
		$('.top-list-data').hide()
	})
	$('.web-top-option').mouseenter(function(e){
		$(this).find('.top-list-data').show()
	    e.stopPropagation();
	})
	$('.web-top-option').mouseleave(function(){
		$('.top-list-data').hide()
	})
    $('.top-list-data').mouseenter(function(){
    	$('.web-top-list b').addClass('web-top-circle')
    })
    $('.top-list-data').mouseleave(function(){
    	$('.web-top-list b').removeClass('web-top-circle')
    })
    $('.web-top-list b').mouseenter(function(){
    	$(this).addClass('web-top-circle')
    })
	$('.web-top-list b').mouseleave(function(){
    	$(this).removeClass('web-top-circle')
    })
	$('.web-top-icon').click(function(){
    	$(this).hide();
    	$('.web-top-logo').hide();
    	$('.web-top-search').show();
    	$('.web-top-close').show();
    	$('.web-top-menu').hide();
    	$('.web-menu-list').hide();
    	$('.web-menu').removeClass('grey-cover')
    	$('.web-top-penl').hide();
    })
    $('.web-top-close').click(function(){
    	$(this).hide();
    	$('.web-top-logo').show();
    	$('.web-top-search').hide();
    	$('.web-top-icon').show();
    	$('.web-top-menu').show();
    })	
    // $('.web-menu').removeClass('grey-cover')
    $('.web-top-menu').click(function(){
    	$('.web-menu').addClass('grey-cover')
    	$('.web-menu-list').show('1000');
    	$('body').css('overflow','hidden')
    	$(this).hide();
    	$('.web-top-penl').show();
    	$('.web-top-close').hide();
    })
    $('.web-top-penl').click(function(){
    	$('.web-menu-list').hide();
    	$('body').css('overflow','auto')
    	$('.web-menu').removeClass('grey-cover')
    	$(this).hide();
    	$('.web-top-menu').show();
    })
    document.body.addEventListener('touchstart', function(){ });

})