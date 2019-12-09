/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_modules_fullpage_custom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/modules/fullpage-custom.js */ \"./src/scripts/modules/fullpage-custom.js\");\n/* harmony import */ var _scripts_modules_vertical_slide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/modules/vertical-slide.js */ \"./src/scripts/modules/vertical-slide.js\");\n/* harmony import */ var _scripts_modules_quiz_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/modules/quiz.js */ \"./src/scripts/modules/quiz.js\");\n/* harmony import */ var _scripts_modules_statistics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/modules/statistics.js */ \"./src/scripts/modules/statistics.js\");\n/* harmony import */ var _scripts_modules_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/modules/home.js */ \"./src/scripts/modules/home.js\");\n/* harmony import */ var _scripts_modules_Viral_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/modules/Viral.js */ \"./src/scripts/modules/Viral.js\");\n/* harmony import */ var _scripts_modules_Lyrics_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/modules/Lyrics.js */ \"./src/scripts/modules/Lyrics.js\");\n/* harmony import */ var _scripts_modules_Chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/modules/Chart.js */ \"./src/scripts/modules/Chart.js\");\n/*==============================\n=            STYLES            =\n==============================*/\n// Run through here for processing,\n// but extracted to a new file\n\n/*=====  END OF STYLES  ======*/\n\n/*===============================\n=            SCRIPTS            =\n===============================*/\n// Globals\n\n\n\n\n\n\n\n\n\n/*----------  EXAMPLE MODULE  ----------*/\n\n_scripts_modules_fullpage_custom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n_scripts_modules_vertical_slide_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n_scripts_modules_quiz_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n_scripts_modules_home_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\n_scripts_modules_Viral_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\n_scripts_modules_Lyrics_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init();\n_scripts_modules_Chart_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init();\n/*----------  EXAMPLE MODULE  ----------*/\n\n/*=====  END OF SCRIPTS  ======*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/modules/Chart.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Chart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Chart = function () {\n  var info = [97, 148, 163, 154, 215, 75, 230];\n  var bars = document.querySelectorAll('#chart .bar-ctr');\n\n  var setBarHeights = function setBarHeights() {\n    var highest = Math.max.apply(Math, info);\n\n    for (var i = 0; i < bars.length; i++) {\n      var height = Math.floor(info[i] / highest * 100);\n      var labels = bars[i].querySelectorAll('strong');\n      labels[0].innerHTML = Math.floor(info[i] / 60);\n      labels[1].innerHTML = info[i] % 60;\n      bars[i].querySelector('.bar').setAttribute('style', \"height: calc(\".concat(height, \"% - 20px)\"));\n    }\n  };\n\n  var init = function init() {\n    setBarHeights();\n  };\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n//# sourceURL=webpack:///./src/scripts/modules/Chart.js?");

/***/ }),

/***/ "./src/scripts/modules/Lyrics.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Lyrics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Lyrics = function () {\n  var answers = document.querySelectorAll('#lyrics .answer');\n  var correctAnswers = document.querySelectorAll('[data-correct]');\n  var beforeAnswer = document.querySelector('#lyrics .before-answer');\n  var afterAnswer = document.querySelector('#lyrics .after-answer');\n  console.log(answers);\n\n  for (var i = 0; i < answers.length; i++) {\n    answers[i].addEventListener('click', function () {\n      for (var i = 0; i < answers.length; i++) {\n        answers[i].classList.add('show');\n      }\n\n      window.setTimeout(function () {\n        beforeAnswer.classList.add('hide');\n        window.setTimeout(function () {\n          beforeAnswer.classList.add('display-none');\n          afterAnswer.classList.add('show');\n        }, 500);\n      }, 1000);\n    });\n  }\n\n  var init = function init() {};\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lyrics);\n\n//# sourceURL=webpack:///./src/scripts/modules/Lyrics.js?");

/***/ }),

/***/ "./src/scripts/modules/Viral.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Viral.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Viral = function () {\n  var answers = document.querySelectorAll('#viral .answer');\n  var correctAnswers = document.querySelectorAll('[data-correct]');\n  var clear = document.querySelector('#viral #clear');\n  var beforeAnswer = document.querySelector('#viral .before-answer');\n  var afterAnswer = document.querySelector('#viral .after-answer');\n\n  for (var i = 0; i < answers.length; i++) {\n    answers[i].addEventListener('click', function () {\n      for (var i = 0; i < answers.length; i++) {\n        answers[i].classList.add('show');\n        clear.classList.add('show');\n      }\n\n      window.setTimeout(function () {\n        beforeAnswer.classList.add('hide');\n        window.setTimeout(function () {\n          beforeAnswer.classList.add('display-none');\n          afterAnswer.classList.add('show');\n        }, 500);\n      }, 1000);\n    });\n  }\n\n  var init = function init() {};\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Viral);\n\n//# sourceURL=webpack:///./src/scripts/modules/Viral.js?");

/***/ }),

/***/ "./src/scripts/modules/fullpage-custom.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/fullpage-custom.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _statistics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.js */ \"./src/scripts/modules/statistics.js\");\n/**\n * Example module\n */\n\n\nvar FullpageCustom = function () {\n  //initialize fullpage\n  var fp = new fullpage('#fullscreen', {\n    anchors: ['one', 'two', 'three', 'four', 'five'],\n    licenseKey: '7467B8EB-0F924434-A991662F-4DD7ADA6',\n    slidesNavigation: true,\n    controlArrows: false,\n    scrollHorizontally: true,\n    scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',\n    afterSlideLoad: function afterSlideLoad(section, origin, destination, direction) {\n      setActiveAnchor();\n    },\n    responsiveWidth: 640,\n    onSlideLeave: function onSlideLeave(section, origin, destination, direction) {\n      currentIndex = destination.index;\n      slideAllUp();\n      updateStats();\n      updateBG();\n      showHideTimeline();\n    },\n    showActiveTooltip: true,\n    navigationTooltips: ['one', 'two', 'three']\n  });\n  var allAnchors = document.querySelectorAll('.fp-slidesNav ul li');\n  var fullPageCtr = document.querySelector('#fullscreen');\n  var background = document.querySelector('#background');\n  var backgroundGradients = document.querySelector('#bg-gradients');\n  var backgrounds = document.querySelector('#background');\n  var activeAnchor = document.querySelector('.fp-slidesNav ul li a.active');\n  var activeLi = activeAnchor.parentElement;\n  var activeLabel = activeAnchor.querySelector('span:nth-of-type(2)');\n  var currentIndex = 0;\n\n  var slideAllUp = function slideAllUp() {\n    var activeSlides = document.querySelectorAll('.slide');\n\n    for (var i = 0; i < activeSlides.length; i++) {\n      activeSlides[i].classList.remove('slided-down');\n    }\n  };\n\n  var updateBG = function updateBG() {\n    var transitionDistance = currentIndex * 100;\n    background.setAttribute('style', \"transform: translateX(-\".concat(transitionDistance, \"vw)\"));\n    var bgs = background.querySelectorAll('.bg');\n\n    for (var i = 0; i < bgs.length; i++) {\n      if (i === currentIndex) {\n        bgs[i].classList.add('active');\n        bgs[i].classList.remove('before');\n        bgs[i].classList.remove('after');\n      } else if (i < currentIndex) {\n        bgs[i].classList.remove('active');\n        bgs[i].classList.remove('after');\n        bgs[i].classList.add('before');\n      } else {\n        bgs[i].classList.remove('active');\n        bgs[i].classList.remove('before');\n        bgs[i].classList.add('after');\n      }\n    }\n\n    var bgClasses = backgroundGradients.classList;\n\n    for (var i = 0; i < bgClasses.length; i++) {\n      if (bgClasses[i].substring(0, 4) === 'show') {\n        backgroundGradients.classList.remove(bgClasses[i]);\n      }\n    } // backgroundGradients.removeAttr('class');\n\n\n    backgroundGradients.classList.add(\"show-\".concat(currentIndex + 1)); // backgrounds.removeAttr('class');\n\n    backgrounds.classList.add(\"show-\".concat(currentIndex + 1));\n  };\n\n  var updateStats = function updateStats() {\n    _statistics_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStats(currentIndex);\n  };\n\n  var setActiveAnchor = function setActiveAnchor() {\n    //set active state on first timeline point on load\n    activeLabel.classList.remove('active');\n    activeLabel.innerHTML = '';\n    activeAnchor = document.querySelector('.fp-slidesNav ul li a.active');\n\n    for (var i = 0; i < allAnchors.length; i++) {\n      allAnchors[i].classList.remove('active');\n    }\n\n    activeLi = activeAnchor.parentElement;\n    activeLi.classList.add('active');\n    activeLabel = activeAnchor.querySelector('span:nth-of-type(2)');\n\n    if (!activeLi.querySelector('.tooltip')) {\n      var tooltip = document.createElement('div');\n      tooltip.classList.add('tooltip');\n      var tooltipTxt = activeAnchor.querySelector('.fp-sr-only').innerHTML;\n      tooltip.innerHTML = tooltipTxt;\n      activeLi.append(tooltip);\n    }\n  };\n\n  var showHideTimeline = function showHideTimeline() {\n    if (currentIndex === 0 || currentIndex === 7) {\n      fullPageCtr.classList.add('hide-nav');\n    } else {\n      fullPageCtr.classList.remove('hide-nav');\n    }\n  };\n\n  var init = function init() {\n    updateBG();\n    showHideTimeline();\n  };\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullpageCustom);\n\n//# sourceURL=webpack:///./src/scripts/modules/fullpage-custom.js?");

/***/ }),

/***/ "./src/scripts/modules/home.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Home = function () {\n  var home = document.querySelector('#home');\n\n  var init = function init() {\n    window.setTimeout(function () {\n      home.classList.add('show-home');\n    }, 3000);\n  };\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/scripts/modules/home.js?");

/***/ }),

/***/ "./src/scripts/modules/quiz.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/quiz.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Quiz = function () {\n  var answers = document.querySelectorAll('.answer');\n  var correctAnswers = document.querySelectorAll('[data-correct]');\n\n  for (var i = 0; i < answers.length; i++) {\n    answers[i].addEventListener('click', function () {\n      if (this.getAttribute('data-correct')) {} else {}\n    });\n  }\n\n  var init = function init() {};\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\n//# sourceURL=webpack:///./src/scripts/modules/quiz.js?");

/***/ }),

/***/ "./src/scripts/modules/statistics.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/statistics.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar Stats = function () {\n  var userHours = document.querySelector('#user-hours');\n  var userDays = document.querySelector('#user-days');\n  var saavnHours = document.querySelector('#saavn-hours');\n  var saavnDays = document.querySelector('#saavn-days');\n  var userHoursTotal = userHours.getAttribute('data-total');\n  var userDaysTotal = userDays.getAttribute('data-total');\n  var saavnHoursTotal = saavnHours.getAttribute('data-total');\n  var saavnDaysTotal = saavnDays.getAttribute('data-total');\n  var totalSlides = 8;\n  var timeouts = [];\n\n  var updateStats = function updateStats(index) {\n    for (var i = 0; i < timeouts.length; i++) {\n      clearTimeout(timeouts[i]);\n    }\n\n    increment(userHours, userHoursTotal * (index / totalSlides));\n    increment(userDays, userDaysTotal * (index / totalSlides));\n    increment(saavnHours, saavnHoursTotal * (index / totalSlides));\n    increment(saavnDays, saavnDaysTotal * (index / totalSlides));\n  };\n\n  var increment = function increment(el, dest) {\n    if (parseInt(el.innerHTML) < dest) {\n      el.innerHTML = parseInt(el.innerHTML) + 1;\n    } else {\n      el.innerHTML = parseInt(el.innerHTML) - 1;\n    }\n\n    var timeout = window.setTimeout(function () {\n      if (parseInt(el.innerHTML) - dest > 0 && parseInt(el.innerHtml) - dest < 1) {\n        el.innerHTML = Math.floor(dest * 10) / 10;\n      } else if (dest - parseInt(el.innerHTML) > 0 && dest - parseInt(el.innerHTML) < 1) {\n        el.innerHTML = Math.floor(dest * 10) / 10;\n      } else if (parseInt(el.innerHTML) !== dest) {\n        increment(el, dest);\n      }\n    }, 1);\n    timeouts.push(timeout);\n  };\n\n  var init = function init() {};\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init,\n    updateStats: updateStats\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\n//# sourceURL=webpack:///./src/scripts/modules/statistics.js?");

/***/ }),

/***/ "./src/scripts/modules/vertical-slide.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/vertical-slide.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Example module\n */\nvar VerticalSlide = function () {\n  document.addEventListener('keydown', function (e) {\n    if (e.keyCode === 37 || e.keyCode === 39) {\n      slideUp();\n    }\n  });\n  document.addEventListener('wheel', function (e) {\n    var activeSlide = document.querySelector('.slide.active');\n    activeSlide.classList.remove('slided-down');\n    slideUp();\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.keyCode === 40) {\n      slideDown();\n    }\n\n    if (e.keyCode === 38) {\n      slideUp();\n    }\n  });\n\n  var slideDown = function slideDown() {\n    var activeSlide = document.querySelector('.slide.active');\n    var hasSlideLower = document.querySelectorAll('.slide.active .slide-lower').length ? true : false;\n\n    if (hasSlideLower) {\n      activeSlide.classList.add('slided-down');\n    }\n  };\n\n  var slideUp = function slideUp() {\n    var activeSlide = document.querySelector('.slide.active');\n\n    if (activeSlide) {\n      activeSlide.classList.remove('slided-down');\n    }\n  };\n\n  var init = function init() {};\n  /**\n   * Public methods\n   */\n\n\n  return {\n    init: init\n  };\n}();\n/**\n * Exports\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerticalSlide);\n\n//# sourceURL=webpack:///./src/scripts/modules/vertical-slide.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });