// шаг вниз перед загрузкой и показать прелоадер
$(window).ready(function () {
  $("html, body").animate({ scrollTop: $(document).height() }, 100);
  jQuery('#loading').fadeOut(3000);
});


// Анимация при достижении блока в зону видимости
var windowHeight = $(window).height();
function animation() {
  $('.anim_item').each(function () {
    var self = $(this),
      height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
      self.addClass('_animation')
    }
    else {
      self.removeClass('_animation')
    }
  });
}
$(document).on('scroll', function () {
  animation();
});


// Фиксация navbar после скрола
jQuery(window).scroll(function navBar() {
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
  }, 500);
});


$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll);

// callback
function onScroll() {
  jQuery(window).scroll(function() {
    $('.anim_item').each(function () {
      var self = $(this),
        height = self.offset().top + self.height();
      if ($(document).scrollTop() + windowHeight >= height-700) {
        self.addClass('_animation')
      }
      else {
        self.removeClass('_animation')
      }
    });

  });
}