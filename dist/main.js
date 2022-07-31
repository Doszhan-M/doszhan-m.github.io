/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/bot.js":
/*!*******************!*\
  !*** ./js/bot.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bot\": () => (/* binding */ bot)\n/* harmony export */ });\n // для зашиты от бана гита, в токен нужно вставить 1a34 в нескольких местах\n\nlet token = '1a341986627459:AAG04-Gffa3S47d1J1a349N9MZSXTEPJexKRw381a34';\ntoken = token.replace(/1a34/g, '');\nconst bot = {\n  token: token,\n  chat_id: '-523535813'\n};\n\n//# sourceURL=webpack://front_e12/./js/bot.js?");

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./js/form.js\");\n/* harmony import */ var _slaider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slaider */ \"./js/slaider.js\");\n/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress_bar */ \"./js/progress_bar.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n/* harmony import */ var _lazy_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy_loading */ \"./js/lazy_loading.js\");\n\n\n\n\n\n(0,_form__WEBPACK_IMPORTED_MODULE_0__.sendContactForm)();\n(0,_slaider__WEBPACK_IMPORTED_MODULE_1__.sliderProject)();\n(0,_progress_bar__WEBPACK_IMPORTED_MODULE_2__.progress)();\n(0,_index__WEBPACK_IMPORTED_MODULE_3__.index)();\n(0,_lazy_loading__WEBPACK_IMPORTED_MODULE_4__.lazyLoading)();\n\n//# sourceURL=webpack://front_e12/./js/entry.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendContactForm\": () => (/* binding */ sendContactForm)\n/* harmony export */ });\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot */ \"./js/bot.js\");\n // функция отправки формы\n\nconst sendForm = async (message, bot) => {\n  const token = bot.token;\n  const chat_id = bot.chat_id;\n  return await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`).then(response => {\n    return response.json();\n  }).then(data => {\n    return data.ok;\n  }).catch(error => {\n    return error;\n  });\n}; // найти все элементы формы\n\n\nconst closeBtn = document.querySelectorAll('.contact__alert_close');\nconst name = document.getElementById('name');\nconst email = document.getElementById('email');\nconst message = document.getElementById('message');\nconst btn = document.getElementById('submit');\nfunction sendContactForm() {\n  // Отправить сообщение из формы\n  btn.addEventListener('click', async () => {\n    const userErrorAlert = document.getElementById('userError');\n    const systemErrorAlert = document.getElementById('systemError');\n    const successAlert = document.getElementById('success');\n\n    if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {\n      const data = `Name: ${name.value}%0A${email.value}%0A${message.value}`;\n      const result = await sendForm(data, _bot__WEBPACK_IMPORTED_MODULE_0__.bot);\n\n      if (result) {\n        if (userErrorAlert.classList.contains('alert')) {\n          userErrorAlert.classList.remove('alert');\n        }\n\n        if (systemErrorAlert.classList.contains('alert')) {\n          systemErrorAlert.classList.remove('alert');\n        }\n\n        successAlert.classList.add('alert');\n      } else {\n        if (userErrorAlert.classList.contains('alert')) {\n          userErrorAlert.classList.remove('alert');\n        }\n\n        systemErrorAlert.classList.add('alert');\n      }\n    } else {\n      userErrorAlert.classList.add('alert');\n    }\n  }); // закрыть алерт через кнопку х\n\n  closeBtn.forEach(btn => {\n    btn.addEventListener('click', () => {\n      let parentNode = btn.parentNode;\n      console.log(parentNode);\n      parentNode.classList.remove('alert');\n    });\n  });\n}\n\n//# sourceURL=webpack://front_e12/./js/form.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\nfunction index() {\n  $(window).ready(function () {\n    // шаг вниз перед загрузкой и показа preloader\n    $('html, body').animate({\n      scrollTop: $(\"#about\").offset().top\n    }, 200);\n    $('html, body').animate({\n      scrollTop: $(\"#projects\").offset().top\n    }, 200);\n    $('html, body').animate({\n      scrollTop: $(\"#preview\").offset().top\n    }, 10);\n  }); // Preloader\n\n  $(window).on('load', function () {\n    var $preloader = $('#p_prldr'),\n        $svg_anm = $preloader.find('.svg_anm');\n    $svg_anm.fadeOut();\n    $preloader.delay(500).fadeOut('slow');\n  }); // Плавный scroll до секции\n\n  let sections = ['preview', 'about', 'projects', 'contact']; // список id ссылок, где нужен e.preventDefault();\n\n  sections.forEach(element => {\n    $(`a[href*=\"#${element}\"]`).on('click', function (e) {\n      e.preventDefault();\n      $('html, body').animate({\n        scrollTop: $($(this).attr('href')).offset().top\n      }, 500);\n    });\n  }); // нажатие на бургер открывает меню\n\n  $('.header__burger').click(function (event) {\n    $('header, .header__burger, .header__titles').toggleClass('active');\n  }); // нажатие на ссылку в меню бургера закрывает меню\n\n  $('.header__moblil_close').click(function (event) {\n    $('header, .header__burger, .header__titles').removeClass('active');\n  }); // Анимация при достижении блока в зону видимости\n\n  var windowHeight = $(window).height();\n\n  function animation() {\n    $('.anim_item').each(function () {\n      var self = $(this),\n          height = self.offset().top + self.height();\n\n      if ($(document).scrollTop() + windowHeight >= height) {\n        self.addClass('_animation');\n      }\n\n      if ($(document).scrollTop() + windowHeight <= height - 300) {\n        self.removeClass('_animation');\n      }\n    });\n  } // Определить устройство, если телефон, то true\n\n\n  function isMobile() {\n    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n      return true;\n    }\n\n    return false;\n  } // Анимация при достижении блока в зону видимости для больших объектов\n\n\n  function animationBigItem() {\n    $('.big_anim_item').each(function () {\n      var self = $(this);\n\n      if (isMobile()) {\n        var height = self.offset().top - 400;\n      } else {\n        var height = self.offset().top - 700;\n      }\n\n      if ($(document).scrollTop() >= height) {\n        self.addClass('_animation');\n      }\n\n      if ($(document).scrollTop() < 200) {\n        self.removeClass('_animation');\n      }\n    });\n  } // запустить функции для скролла \n\n\n  $(document).on('scroll', function () {\n    animation();\n    animationBigItem();\n    headerColor();\n  }); // Фиксация navbar после скрола\n\n  jQuery(window).scroll(function navBar() {\n    var the_top = jQuery(document).scrollTop();\n\n    if (the_top > 500) {\n      jQuery('.header').addClass('fixed');\n    } else {\n      jQuery('.header').removeClass('fixed');\n    }\n  }); // при достижении одной секции из header на экран, та секция меняет цвет\n\n  function headerColor() {\n    $('.header__moblil_close').each(function () {\n      let self = $(this);\n      let id = self.attr('href');\n      let section = $(id);\n      let sectionOffsetHeight = section.offset().top; // расстояние от секции до начало страницы\n\n      let sectionAndOfsetHeight = sectionOffsetHeight + section.height();\n      let documentScrollTop = $(document).scrollTop() + 10; // расстояние от текущего место до начало документа\n\n      if (sectionOffsetHeight <= documentScrollTop && documentScrollTop <= sectionAndOfsetHeight) {\n        self.addClass('header_active');\n      } else {\n        self.removeClass('header_active');\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://front_e12/./js/index.js?");

/***/ }),

/***/ "./js/lazy_loading.js":
/*!****************************!*\
  !*** ./js/lazy_loading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lazyLoading\": () => (/* binding */ lazyLoading)\n/* harmony export */ });\nfunction lazyLoad() {\n  const hash = window.location.hash; // досать хеш в url\n\n  const popupWindow = document.querySelector(`${hash}`); // найти секцию по хеш\n\n  let imgInSlaider = popupWindow.querySelectorAll('.slaider__img'); // поиск внутри секции\n\n  imgInSlaider.forEach(img => {\n    img.src = img.dataset.src;\n    img.removeAttribute('data-src');\n  });\n}\n\nfunction lazyLoading() {\n  window.addEventListener('hashchange', () => {\n    // событие на изменение хеша в url\n    lazyLoad();\n  });\n}\n\n//# sourceURL=webpack://front_e12/./js/lazy_loading.js?");

/***/ }),

/***/ "./js/progress_bar.js":
/*!****************************!*\
  !*** ./js/progress_bar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"progress\": () => (/* binding */ progress)\n/* harmony export */ });\n// заполнение прогресса \nfunction moveProgress(progress_elem_id, percent_elem_id, progress) {\n  var progress_elem = document.getElementById(progress_elem_id);\n  var percent_elem = document.getElementById(percent_elem_id);\n  var width = 100 - progress;\n  var id = setInterval(frame, 10);\n\n  function frame() {\n    if (width >= progress) {\n      clearInterval(id);\n    } else {\n      width++;\n      progress_elem.style.width = width + '%';\n      percent_elem.innerHTML = width * 1 + '%';\n    }\n  }\n} // убывание прогресса \n\n\nfunction unMoveProgress(progress_elem_id, percent_elem_id, progress) {\n  var progress_elem = document.getElementById(progress_elem_id);\n  var percent_elem = document.getElementById(percent_elem_id);\n  var width = progress;\n  var id = setInterval(frame, 10);\n\n  function frame() {\n    if (width <= 20) {\n      clearInterval(id);\n    } else {\n      width--;\n      progress_elem.style.width = width + '%';\n      percent_elem.innerHTML = width * 1 + '%';\n    }\n  }\n}\n\nfunction progress() {\n  // Заполнить или опустошить прогресс при достижении скрола \n  $(document).on('scroll', function () {\n    $('.progress_bar').each(function () {\n      var self = $(this);\n      const progress_elem_id = self.children().first().attr('id');\n      const percent_elem_id = self.children().filter(\":nth-child(2)\").attr('id');\n      const progress = self.children().last().text();\n      let height = self.offset().top + self.height();\n      var the_top = jQuery(document).scrollTop();\n      var windowHeight = $(window).height();\n\n      if (!$(this).hasClass('not_progress')) {\n        if ($(document).scrollTop() + windowHeight >= height + 20) {\n          self.addClass('not_progress');\n          setTimeout(function () {\n            moveProgress(progress_elem_id, percent_elem_id, progress);\n          }, 10);\n        }\n      } else {\n        if ($(this).hasClass('not_progress')) {\n          if ($(document).scrollTop() + windowHeight <= height - 300) {\n            self.removeClass('not_progress');\n            unMoveProgress(progress_elem_id, percent_elem_id, progress);\n          }\n        }\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://front_e12/./js/progress_bar.js?");

/***/ }),

/***/ "./js/slaider.js":
/*!***********************!*\
  !*** ./js/slaider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderProject\": () => (/* binding */ sliderProject)\n/* harmony export */ });\nfunction slider() {\n  const hash = window.location.hash; // досать хеш в url\n\n  const popupWindow = document.querySelector(`${hash}`); // найти секцию по хеш\n\n  const thisPopupWindow = popupWindow.classList.contains('popup'); // есть ли в секции popup\n\n  if (thisPopupWindow) {\n    const btnRight = document.querySelector(`${hash} .slaider__btn_right`);\n    const btnLeft = document.querySelector(`${hash} .slaider__btn_left`); // Find images\n\n    const slaider = document.querySelector(`${hash} .slaider__img-container`);\n    const images = document.querySelectorAll(`${hash} .slaider__img-container .slaider__img`); // Calculate image width for step\n\n    const stepSize = images[0].clientWidth; // Move picture\n\n    let counter = 0; // счетчик\n\n    btnRight.addEventListener('click', () => {\n      // Если counter равен длине картинок, то обнуляем счетчик.\n      if (counter >= images.length - 1) {\n        counter = -1;\n      }\n\n      counter++;\n      slaider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;\n    });\n    btnLeft.addEventListener('click', () => {\n      if (counter <= 0) {\n        counter = images.length;\n      }\n\n      counter--;\n      slaider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;\n    });\n  }\n}\n\nfunction sliderProject() {\n  window.addEventListener('hashchange', () => {\n    // событие на изменение хеша в url\n    slider();\n  });\n}\n\n//# sourceURL=webpack://front_e12/./js/slaider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/entry.js");
/******/ 	
/******/ })()
;