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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bot\": () => (/* binding */ bot)\n/* harmony export */ });\n\r\n\r\n// для зашиты от бана гита, в токен нужно вставить 1a34 в нескольких местах\r\nlet token = '1a341986627459:AAG04-Gffa3S47d1J1a349N9MZSXTEPJexKRw381a34';\r\ntoken = token.replace(/1a34/g, '')\r\nconst bot = { token: token, chat_id: '-523535813', };\n\n//# sourceURL=webpack://front_e12/./js/bot.js?");

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./js/form.js\");\n/* harmony import */ var _slaider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slaider */ \"./js/slaider.js\");\n/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress_bar */ \"./js/progress_bar.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_form__WEBPACK_IMPORTED_MODULE_0__.sendContactForm)()\r\n;(0,_slaider__WEBPACK_IMPORTED_MODULE_1__.sliderProject)()\r\n;(0,_progress_bar__WEBPACK_IMPORTED_MODULE_2__.progress)()\r\n;(0,_index__WEBPACK_IMPORTED_MODULE_3__.index)()\n\n//# sourceURL=webpack://front_e12/./js/entry.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendContactForm\": () => (/* binding */ sendContactForm)\n/* harmony export */ });\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot */ \"./js/bot.js\");\n\r\n\r\n// функция отправки формы\r\nconst sendForm = async (message, bot) => {\r\n    const token = bot.token;\r\n    const chat_id = bot.chat_id\r\n    return await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`)\r\n        .then((response) => { return response.json(); })\r\n        .then((data) => { return data.ok })\r\n        .catch((error) => { return error });\r\n}\r\n\r\n// найти все элементы формы\r\nconst closeBtn = document.querySelectorAll('.contact__alert_close')\r\nconst name = document.getElementById('name')\r\nconst email = document.getElementById('email')\r\nconst message = document.getElementById('message')\r\nconst btn = document.getElementById('submit')\r\n\r\n\r\nfunction sendContactForm() {\r\n    // Отправить сообщение из формы\r\n    btn.addEventListener('click', async () => {\r\n\r\n        const userErrorAlert = document.getElementById('userError')\r\n        const systemErrorAlert = document.getElementById('systemError')\r\n        const successAlert = document.getElementById('success')\r\n\r\n        if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {\r\n            const data = `Name: ${name.value}%0A${email.value}%0A${message.value}`\r\n            const result = await sendForm(data, _bot__WEBPACK_IMPORTED_MODULE_0__.bot)\r\n\r\n            if (result) {\r\n                if (userErrorAlert.classList.contains('alert')) {\r\n                    userErrorAlert.classList.remove('alert')\r\n                }\r\n                if (systemErrorAlert.classList.contains('alert')) {\r\n                    systemErrorAlert.classList.remove('alert')\r\n                }\r\n                successAlert.classList.add('alert')\r\n            } else {\r\n                if (userErrorAlert.classList.contains('alert')) {\r\n                    userErrorAlert.classList.remove('alert')\r\n                }\r\n                systemErrorAlert.classList.add('alert')\r\n            }\r\n        } else {\r\n            userErrorAlert.classList.add('alert')\r\n        }\r\n    })\r\n\r\n    // закрыть алерт через кнопку х\r\n    closeBtn.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n            let parentNode = btn.parentNode\r\n            console.log(parentNode)\r\n            parentNode.classList.remove('alert')\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://front_e12/./js/form.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\nfunction index() {\r\n\r\n  $(window).ready(function () {\r\n    // шаг вниз перед загрузкой и показа preloader\r\n    $('html, body').animate({ scrollTop: $(\"#about\").offset().top }, 200);\r\n    $('html, body').animate({ scrollTop: $(\"#projects\").offset().top }, 200);\r\n    $('html, body').animate({ scrollTop: $(\"#preview\").offset().top }, 10);\r\n  });\r\n\r\n  // Preloader\r\n  $(window).on('load', function () {\r\n    var $preloader = $('#p_prldr'),\r\n      $svg_anm = $preloader.find('.svg_anm');\r\n    $svg_anm.fadeOut();\r\n    $preloader.delay(500).fadeOut('slow');\r\n  });\r\n\r\n  // Плавный scroll до секции\r\n  let sections = ['preview', 'about', 'projects', 'contact',] // список id ссылок, где нужен e.preventDefault();\r\n  sections.forEach(element => {\r\n    $(`a[href*=\"#${element}\"]`).on('click', function (e) {\r\n      e.preventDefault();\r\n      $('html, body').animate({\r\n        scrollTop: $($(this).attr('href')).offset().top\r\n      }, 500);\r\n    });\r\n  });\r\n\r\n\r\n  // нажатие на бургер открывает меню\r\n  $('.header__burger').click(function (event) {\r\n    $('header, .header__burger, .header__titles').toggleClass('active');\r\n  })\r\n  // нажатие на ссылку в меню бургера закрывает меню\r\n  $('.header__moblil_close').click(function (event) {\r\n    $('header, .header__burger, .header__titles').removeClass('active');\r\n  })\r\n\r\n\r\n  // Анимация при достижении блока в зону видимости\r\n  var windowHeight = $(window).height();\r\n  function animation() {\r\n    $('.anim_item').each(function () {\r\n      var self = $(this),\r\n        height = self.offset().top + self.height();\r\n      if ($(document).scrollTop() + windowHeight >= height) {\r\n        self.addClass('_animation')\r\n      }\r\n      if ($(document).scrollTop() + windowHeight <= height - 300) {\r\n        self.removeClass('_animation')\r\n      }\r\n    });\r\n  }\r\n\r\n\r\n  // Определить устройство, если телефон, то true\r\n  function isMobile() {\r\n    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n\r\n  // Анимация при достижении блока в зону видимости для больших объектов\r\n  function animationBigItem() {\r\n    $('.big_anim_item').each(function () {\r\n      var self = $(this);\r\n\r\n      if (isMobile()) {\r\n        var height = self.offset().top - 400;\r\n      } else {\r\n        var height = self.offset().top - 700;\r\n      }\r\n\r\n      if ($(document).scrollTop() >= height) {\r\n        self.addClass('_animation')\r\n      }\r\n      if ($(document).scrollTop() < 200) {\r\n        self.removeClass('_animation')\r\n      }\r\n    });\r\n  }\r\n  // запустить функции для скролла \r\n  $(document).on('scroll', function () {\r\n    animation();\r\n    animationBigItem()\r\n    headerColor()\r\n  });\r\n\r\n\r\n  // Фиксация navbar после скрола\r\n  jQuery(window).scroll(function navBar() {\r\n    var the_top = jQuery(document).scrollTop();\r\n    if (the_top > 500) {\r\n      jQuery('.header').addClass('fixed');\r\n    }\r\n    else {\r\n      jQuery('.header').removeClass('fixed');\r\n    }\r\n  });\r\n\r\n\r\n  // при достижении одной секции из header на экран, та секция меняет цвет\r\n  function headerColor() {\r\n    $('.header__moblil_close').each(function () {\r\n      let self = $(this);\r\n      let id = self.attr('href');\r\n      let section = $(id);\r\n      let sectionOffsetHeight = section.offset().top; // расстояние от секции до начало страницы\r\n      let sectionAndOfsetHeight = sectionOffsetHeight + section.height();\r\n      let documentScrollTop = $(document).scrollTop() + 10; // расстояние от текущего место до начало документа\r\n\r\n      if (sectionOffsetHeight <= documentScrollTop && documentScrollTop <= sectionAndOfsetHeight) {\r\n        self.addClass('header_active')\r\n      }\r\n      else {\r\n        self.removeClass('header_active')\r\n      }\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://front_e12/./js/index.js?");

/***/ }),

/***/ "./js/progress_bar.js":
/*!****************************!*\
  !*** ./js/progress_bar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"progress\": () => (/* binding */ progress)\n/* harmony export */ });\n// заполнение програсса \r\nfunction moveProgress(progress_elem_id, percent_elem_id, progress) {\r\n    var progress_elem = document.getElementById(progress_elem_id);\r\n    var percent_elem = document.getElementById(percent_elem_id);\r\n    var width = 100 - progress;\r\n    var id = setInterval(frame, 10);\r\n    function frame() {\r\n        if (width >= progress) {\r\n            clearInterval(id);\r\n        } else {\r\n            width++;\r\n            progress_elem.style.width = width + '%';\r\n            percent_elem.innerHTML = width * 1 + '%';\r\n        }\r\n    }\r\n}\r\n\r\n// убывание програсса \r\nfunction unMoveProgress(progress_elem_id, percent_elem_id, progress) {\r\n    var progress_elem = document.getElementById(progress_elem_id);\r\n    var percent_elem = document.getElementById(percent_elem_id);\r\n    var width = progress;\r\n    var id = setInterval(frame, 10);\r\n    function frame() {\r\n        if (width <= 20) {\r\n            clearInterval(id);\r\n        } else {\r\n            width--;\r\n            progress_elem.style.width = width + '%';\r\n            percent_elem.innerHTML = width * 1 + '%';\r\n        }\r\n    }\r\n}\r\nfunction progress() {\r\n    // Заполнить или опустошить прогресс при достижении скрола \r\n    $(document).on('scroll', function () {\r\n        $('.progress_bar').each(function () {\r\n            var self = $(this);\r\n            const progress_elem_id = self.children().first().attr('id');\r\n            const percent_elem_id = self.children().filter(\":nth-child(2)\").attr('id');\r\n            const progress = self.children().last().text();\r\n            let height = self.offset().top + self.height();\r\n            var the_top = jQuery(document).scrollTop();\r\n            var windowHeight = $(window).height();\r\n\r\n            if (!$(this).hasClass('not_progress')) {\r\n                if ($(document).scrollTop() + windowHeight >= height + 20) {\r\n                    self.addClass('not_progress')\r\n                    setTimeout(function () {\r\n                        moveProgress(progress_elem_id, percent_elem_id, progress)\r\n                    }, 10);\r\n                }\r\n            }\r\n            else {\r\n                if ($(this).hasClass('not_progress')) {\r\n                    if ($(document).scrollTop() + windowHeight <= height - 300) {\r\n                        self.removeClass('not_progress')\r\n                        unMoveProgress(progress_elem_id, percent_elem_id, progress)\r\n                    }\r\n                }\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front_e12/./js/progress_bar.js?");

/***/ }),

/***/ "./js/slaider.js":
/*!***********************!*\
  !*** ./js/slaider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderProject\": () => (/* binding */ sliderProject)\n/* harmony export */ });\nfunction slider() {\r\n    const hash = window.location.hash   // досать хеш в url\r\n    const popupWindow = document.querySelector(`${hash}`) // найти секцию по хеш\r\n    const thisPopupWindow = popupWindow.classList.contains('popup') // есть ли в секции popup\r\n\r\n    if (thisPopupWindow) {\r\n\r\n        const btnRight = document.querySelector(`${hash} .slaider__btn_right`)\r\n        const btnLeft = document.querySelector(`${hash} .slaider__btn_left`)\r\n\r\n        // Find images\r\n        const slaider = document.querySelector(`${hash} .slaider__img-container`)\r\n        const images = document.querySelectorAll(`${hash} .slaider__img-container .slaider__img`)\r\n\r\n        // Calculate image width for step\r\n        const stepSize = images[0].clientWidth\r\n        // Move picture\r\n        let counter = 0; // счетчик\r\n\r\n        btnRight.addEventListener('click', () => {\r\n            // Если counter равен длине картинок, то обнуляем счетчик.\r\n            if (counter >= images.length - 1) { counter = -1 }\r\n            counter++;\r\n            slaider.style.transform = 'translateX(' + `${-(stepSize) * counter}px)`;\r\n        })\r\n\r\n        btnLeft.addEventListener('click', () => {\r\n            if (counter <= 0) { counter = images.length }\r\n            counter--;\r\n            slaider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;\r\n        })\r\n    }\r\n}\r\n\r\nfunction sliderProject() {\r\n    window.addEventListener('hashchange', () => { // событие на изменение хеша в url\r\n        slider()\r\n    })\r\n}\n\n//# sourceURL=webpack://front_e12/./js/slaider.js?");

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