$(window).ready(function () {
  // шаг вниз перед загрузкой и показать прелоадер
  // $('html, body').animate({ scrollTop: $("#projects").offset().top }, 1);
  // $('html, body').animate({ scrollTop: $("#preview").offset().top }, 1);
  // jQuery('#loading').fadeOut(1000);

});


// Плавный скрол до секции
sections = ['preview', 'about', 'projects', 'contact',] // список id ссылок, где нужен e.preventDefault();
sections.forEach(element => {
  $(`a[href*="#${element}"]`).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});


// нажатие на бургер открывает меню
$('.header__burger').click(function (event) {
  $('header, .header__burger, .header__titles').toggleClass('active');
})
// нажатие на ссылку в меню бургера закрывает меню
$('.header__moblil_close').click(function (event) {
  $('header, .header__burger, .header__titles').removeClass('active');
})


// Анимация при достижении блока в зону видимости
var windowHeight = $(window).height();
function animation() {
  $('.anim_item').each(function () {
    var self = $(this),
      height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
      self.addClass('_animation')
    }
    if ($(document).scrollTop() + windowHeight <= height - 300) {
      self.removeClass('_animation')
    }
  });
}
// Определить устройство, если телефон, то true
function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true; 
  }
  return false;
}

// Анимация при достижении блока в зону видимости для больших объектов
function animationBigItem() {
  $('.big_anim_item').each(function () {
    var self = $(this),
        height = self.offset().top + self.height();
    if (isMobile()) {
      if ($(document).scrollTop() + windowHeight >= height *1.2) {
        self.addClass('_animation')
      } 
      if ($(document).scrollTop() + windowHeight <= height / 2) {
        self.removeClass('_animation')
      }
    }
    else {
      if ($(document).scrollTop() + windowHeight >= height / 2) {
        self.addClass('_animation')
      } 
      if ($(document).scrollTop() + windowHeight <= height - 300 ) {
        self.removeClass('_animation')
      }
    }
  });
}
// запустить функции для скролла 
$(document).on('scroll', function () {
  animation();
  animationBigItem()
  headerColor()
});


// Фиксация navbar после скрола
jQuery(window).scroll(function navBar() {
  var the_top = jQuery(document).scrollTop();
  if (the_top > 500) {
    jQuery('.header').addClass('fixed');
  }
  else {
    jQuery('.header').removeClass('fixed');
  }
});


// при достижении одной секции из header на экран, та секция меняет цвет
function headerColor() {
  $('.header__moblil_close').each(function () {
    let self = $(this);
    id = self.attr('href');
    let section = $(id);
    let sectionOffsetHeight = section.offset().top; // расстояние от секции до начало страницы
    let sectionAndOfsetHeight = sectionOffsetHeight + section.height();
    let documentScrollTop = $(document).scrollTop() + 10; // расстояние от текущего место до начало документа

    if (sectionOffsetHeight <= documentScrollTop && documentScrollTop <= sectionAndOfsetHeight) {
      self.addClass('header_active')
    } 
    else {
      self.removeClass('header_active')
    }
  });
}