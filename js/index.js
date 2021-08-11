// Фиксация navbar после скрола
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 600) {
        jQuery('.header').addClass('fixed');
    }
    else {
        jQuery('.header').removeClass('fixed');
    }
});