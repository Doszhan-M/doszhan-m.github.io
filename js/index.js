// Фиксация navbar после скрола
jQuery(window).scroll(function navFixed() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 600) {
        jQuery('.header').addClass('fixed');
    }
    else {
        jQuery('.header').removeClass('fixed');
    }
});
// Плавный скрол до секции
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500,);
  });

// Анимация при достижении блока в зону видимости
  $(document).ready(function() {

	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.anim_item').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('_animation')
			}
            else {
				self.removeClass('_animation')
            }
		});
	});
});