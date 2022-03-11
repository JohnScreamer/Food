/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var app;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#NEWERA/Food/src/components/Header-slider.js":
/*!***********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/Header-slider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderHeader\": () => (/* binding */ sliderHeader)\n/* harmony export */ });\n/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ \"../../\\u0000#NEWERA/Food/src/constants/constants.js\");\n\r\n\r\n\r\nclass Slider {\r\n\r\n   addSliderEvent() {\r\n      window.addEventListener('resize', e => {\r\n         if (window.innerWidth > 768) {\r\n            _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_MENU_ITEM.forEach(el => {\r\n               el.classList.remove('swiper-slide')\r\n            })\r\n\r\n            return;\r\n\r\n         }\r\n\r\n         _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_MENU_ITEM.forEach(el => {\r\n            el.classList.add('swiper-slide')\r\n         })\r\n\r\n\r\n      })\r\n\r\n\r\n   }\r\n\r\n\r\n   addDefaultSliderSetting() {\r\n      if (window.innerWidth > 768) {\r\n         _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_MENU_ITEM.forEach(el => {\r\n            el.classList.remove('swiper-slide')\r\n         })\r\n\r\n         return;\r\n\r\n      }\r\n\r\n      _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_MENU_ITEM.forEach(el => {\r\n         el.classList.add('swiper-slide')\r\n      })\r\n   }\r\n\r\n\r\n}\r\n\r\nconst sliderHeader = new Slider()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/Header-slider.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/basket-counter.js":
/*!************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/basket-counter.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countBasket\": () => (/* binding */ countBasket)\n/* harmony export */ });\n/* harmony import */ var _basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n\r\n\r\n\r\nclass Count {\r\n\r\n\r\n   async render() {\r\n      let {\r\n         totalAmout\r\n      } = await _basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.getInfo()\r\n\r\n      const BASKET_COUTER = document.querySelector('.basket__count')\r\n      BASKET_COUTER.textContent = totalAmout;\r\n   }\r\n   addEvent() {\r\n      document.addEventListener('click', () => {\r\n         this.render()\r\n      })\r\n   }\r\n\r\n}\r\n\r\nlet countBasket = new Count()\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/basket-counter.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/basketStorage.js":
/*!***********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/basketStorage.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketStorage\": () => (/* binding */ basketStorage)\n/* harmony export */ });\n/* harmony import */ var _components_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/getData.js */ \"../../\\u0000#NEWERA/Food/src/components/getData.js\");\n\r\n\r\n\r\nclass BasketStorage {\r\n\r\n\r\n\r\n\r\n\r\n\r\n   async valid() {\r\n      let basket = await localStorage.key('basket')\r\n      if (!basket) {\r\n         basket = []\r\n         localStorage.setItem('basket', JSON.stringify(basket))\r\n      }\r\n      return JSON.parse(localStorage.getItem('basket'))\r\n   }\r\n\r\n   async addItem(id) {\r\n      let data = await _components_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData.get();\r\n\r\n      let basket = await this.valid()\r\n\r\n\r\n      data.forEach(el => {\r\n         if (el.id == id) {\r\n            let item = {\r\n               ...el\r\n            }\r\n            item.amount = 1;\r\n\r\n\r\n\r\n            basket.push(item)\r\n            localStorage.setItem('basket', JSON.stringify(basket))\r\n         }\r\n\r\n      });\r\n\r\n\r\n   }\r\n\r\n\r\n   async increment(id) {\r\n      let basket = await this.valid()\r\n      basket = basket.map(item => {\r\n         if (item.id == id) {\r\n            item.amount = +item.amount + 1;\r\n\r\n         }\r\n         return item;\r\n      })\r\n\r\n      localStorage.setItem('basket', JSON.stringify(basket));\r\n   }\r\n\r\n\r\n   async decrement(id) {\r\n      let basket = await this.valid()\r\n      basket = basket.filter(item => {\r\n         if (item.id == id) {\r\n            if (item.amount > 1) {\r\n               item.amount = +item.amount - 1;\r\n               return item;\r\n            } else {\r\n               return;\r\n            }\r\n\r\n\r\n\r\n         }\r\n         return item;\r\n      })\r\n\r\n      localStorage.setItem('basket', JSON.stringify(basket));\r\n\r\n\r\n   }\r\n   async getInfo() {\r\n      let data = await this.valid();\r\n      let totalPrice = 0;\r\n      let totalAmout = 0\r\n\r\n      data.forEach(({\r\n         price,\r\n         amount\r\n      }) => {\r\n         totalAmout += amount;\r\n         totalPrice += price;\r\n      })\r\n\r\n\r\n      console.log(totalPrice,\r\n         totalAmout);\r\n      return {\r\n         totalPrice,\r\n         totalAmout\r\n      }\r\n\r\n   }\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nlet basketStorage = new BasketStorage()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/basketStorage.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/btn-card-events.js":
/*!*************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/btn-card-events.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEvents\": () => (/* binding */ addEvents)\n/* harmony export */ });\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n\r\n\r\n\r\nclass AddEvents {\r\n   add() {\r\n      document.addEventListener('click', e => {\r\n         let btnBasket = e.target.closest('.card__btn-basket');\r\n         let btnMinus = e.target.closest('.card__btn-minus');\r\n         let btnPlus = e.target.closest('.card__btn-plus');\r\n\r\n         if (btnBasket) {\r\n\r\n            btnBasket.style.display = 'none';\r\n            let card = btnBasket.closest('.card');\r\n            card.querySelector('.card__btn-minus').style.display = 'block';\r\n            card.querySelector('.card__btn-plus').style.display = 'block';\r\n            card.querySelector('.card__counter').style.display = 'flex';\r\n            card.querySelector('.card__counter').textContent = 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.addItem(card.getAttribute('data-id'));\r\n\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n\r\n\r\n\r\n\r\n         }\r\n\r\n         if (btnMinus) {\r\n\r\n            let card = btnMinus.closest('.card');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.decrement(card.getAttribute('data-id'))\r\n            if (+card.querySelector('.card__counter').textContent > 1) {\r\n\r\n               card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent - 1;\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n            } else {\r\n\r\n               card.querySelector('.card__counter').style.display = 'none';\r\n               card.querySelector('.card__btn-basket').style.display = 'flex';\r\n               card.querySelector('.card__btn-plus').style.display = 'none';\r\n               card.querySelector('.card__btn-minus').style.display = 'none';\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n\r\n            }\r\n\r\n\r\n\r\n         }\r\n         if (btnPlus) {\r\n\r\n            let card = btnPlus.closest('.card');\r\n            card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent + 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.increment(card.getAttribute('data-id'))\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n         }\r\n\r\n\r\n\r\n      })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   }\r\n\r\n}\r\n\r\nlet addEvents = new AddEvents()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/btn-card-events.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/getData.js":
/*!*****************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/getData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nclass GetData {\r\n   async get() {\r\n      let respons = await fetch('https://gist.githubusercontent.com/JohnScreamer/478608d0bf9175a04830659f8dfc73c1/raw/3db99105faa156c2247bcaa422a043194f7f7690/gistfile1.txt')\r\n      let data = await respons.json()\r\n      return data;\r\n   }\r\n}\r\nlet getData = new GetData()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/getData.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/header-burger.js":
/*!***********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/header-burger.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\n/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ \"../../\\u0000#NEWERA/Food/src/constants/constants.js\");\n\r\n\r\n\r\nclass Burger {\r\n\r\n   render() {\r\n      _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_BURGER_BTN.addEventListener('click', (e) => {\r\n         _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_BURGER_WINDOW.classList.toggle('burger-activ')\r\n      })\r\n\r\n   }\r\n}\r\nconst burger = new Burger()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/header-burger.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/load-events.js":
/*!*********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/load-events.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventLoad\": () => (/* binding */ eventLoad)\n/* harmony export */ });\n/* harmony import */ var _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header-slider.js */ \"../../\\u0000#NEWERA/Food/src/components/Header-slider.js\");\n\r\n\r\n\r\nclass EventLoad {\r\n\r\n   events() {\r\n\r\n\r\n      _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_0__.sliderHeader.addDefaultSliderSetting()\r\n\r\n   }\r\n}\r\nlet eventLoad = new EventLoad()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/load-events.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/mainSliderFunction.js":
/*!****************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/mainSliderFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainSlider\": () => (/* binding */ mainSlider)\n/* harmony export */ });\nclass MainSlider {\r\n   sliderMain() {\r\n      var swiper = new Swiper(\".mySwiper\", {\r\n         slidesPerView: 'auto',\r\n\r\n         pagination: {\r\n            el: \".swiper-pagination\",\r\n            clickable: true,\r\n         },\r\n      });\r\n      return swiper;\r\n\r\n   }\r\n}\r\nlet mainSlider = new MainSlider()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/mainSliderFunction.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/constants/constants.js":
/*!******************************************************!*\
  !*** ../../ #NEWERA/Food/src/constants/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HEADER_BOTTOM_ROW\": () => (/* binding */ HEADER_BOTTOM_ROW),\n/* harmony export */   \"HEADER_BURGER_BTN\": () => (/* binding */ HEADER_BURGER_BTN),\n/* harmony export */   \"HEADER_BURGER_WINDOW\": () => (/* binding */ HEADER_BURGER_WINDOW),\n/* harmony export */   \"HEADER_MENU_ITEM\": () => (/* binding */ HEADER_MENU_ITEM),\n/* harmony export */   \"HEADER_UPPER_ROW_INPUT_CONTEINER\": () => (/* binding */ HEADER_UPPER_ROW_INPUT_CONTEINER)\n/* harmony export */ });\nconst HEADER_BOTTOM_ROW = document.querySelector('.header-menu__bottom-content-row');\r\nconst HEADER_UPPER_ROW_INPUT_CONTEINER = document.querySelector('.input-conteiner')\r\nconst HEADER_BURGER_WINDOW = document.querySelector(\".header__burger-window\")\r\nconst HEADER_BURGER_BTN = document.querySelector('.header-menu__burger')\r\nconst HEADER_MENU_ITEM = document.querySelectorAll('.menu__item ')\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/constants/constants.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/js/app.js":
/*!*****************************************!*\
  !*** ../../ #NEWERA/Food/src/js/app.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_first_page_food_card_Render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/first_page/food-card-Render.js */ \"../../\\u0000#NEWERA/Food/src/modules/first_page/food-card-Render.js\");\n/* harmony import */ var _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header-burger.js */ \"../../\\u0000#NEWERA/Food/src/components/header-burger.js\");\n/* harmony import */ var _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header-slider.js */ \"../../\\u0000#NEWERA/Food/src/components/Header-slider.js\");\n/* harmony import */ var _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSliderFunction.js */ \"../../\\u0000#NEWERA/Food/src/components/mainSliderFunction.js\");\n/* harmony import */ var _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/btn-card-events.js */ \"../../\\u0000#NEWERA/Food/src/components/btn-card-events.js\");\n/* harmony import */ var _components_load_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/load-events.js */ \"../../\\u0000#NEWERA/Food/src/components/load-events.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(async function () {\n\n\n   await _modules_first_page_food_card_Render_js__WEBPACK_IMPORTED_MODULE_0__.cardRender.render()\n   _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_2__.sliderHeader.addSliderEvent()\n\n   _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__.burger.render()\n   _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_3__.mainSlider.sliderMain()\n   _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_4__.addEvents.add()\n   _components_load_events_js__WEBPACK_IMPORTED_MODULE_5__.eventLoad.events()\n   setTimeout(() => {\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_6__.countBasket.render()\n   }, 555);\n\n\n\n   window.addEventListener('storage', eventstorage)\n   async function eventstorage() {\n      await _modules_first_page_food_card_Render_js__WEBPACK_IMPORTED_MODULE_0__.cardRender.render()\n      _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__.burger.render()\n      _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_3__.mainSlider.sliderMain()\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_6__.countBasket.render()\n\n\n\n   }\n\n\n})()\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/js/app.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/modules/first_page/food-card-Render.js":
/*!**********************************************************************!*\
  !*** ../../ #NEWERA/Food/src/modules/first_page/food-card-Render.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardRender\": () => (/* binding */ cardRender)\n/* harmony export */ });\n/* harmony import */ var _components_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/getData.js */ \"../../\\u0000#NEWERA/Food/src/components/getData.js\");\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n\r\n\r\n\r\n\r\n\r\nconst SNACKS_CONTEINER = document.querySelector('.snacks__conteiner');\r\nconst HOT_MEALS_CONTEINER = document.querySelector('.hot-meals__conteiner')\r\nconst DRINKS_CONTEINER = document.querySelector('.drinks__conteiner')\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass CardRender {\r\n   async render() {\r\n      let data = await _components_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData.get()\r\n      let htmlSnacks = ''\r\n      let htmlHotMeal = ''\r\n      let htmlDrinks = ''\r\n      let htmlVariable;\r\n      let basket = await _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__.basketStorage.valid()\r\n      console.log(basket);\r\n\r\n      data.forEach(el => {\r\n         let amount = 0;\r\n         basket.forEach(basket => {\r\n            if (basket.id == el.id) {\r\n               amount = basket.amount;\r\n            }\r\n         });\r\n         if (amount) {\r\n\r\n\r\n            htmlVariable = `<li class=\"swiper-slide card\" data-id='${el.id}' data-food-type='${el.type}' >\r\n         <span class='card__counter' style=\"display: flex;\" >${amount}</span>\r\n         <img class=\"card__img\"  src=\"${el.img}\">\r\n         <div class=\"card__info\">\r\n         <span class=\"card__name\">${el.name}</span>\r\n         <span class=\"card__weight\">Вага:${el.weight} г</span>        \r\n         </div>\r\n         <p class=\"card__describtion\">${el.description}</p>\r\n         <div class=\"card__bottom\">\r\n         <div class='card__btn-minus'  style=\"display: block;\"></div>\r\n         <span class=\"card__price\">${el.price} Грн</span>\r\n         <div class='card__btn-basket'  style=\"display: none;\">В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n         xmlns=\"http://www.w3.org/2000/svg\">\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n    </svg></span></div>\r\n         <div class='card__btn-plus'  style=\"display:block;\"></div>\r\n         </div>\r\n\r\n         </li>`\r\n\r\n\r\n         } else {\r\n\r\n            htmlVariable = `<li class=\"swiper-slide card\" data-id='${el.id}' data-food-type='${el.type}' >\r\n         <span class='card__counter' style=\"display: none;\">${amount}</span>\r\n         <img class=\"card__img\"  src=\"${el.img}\">\r\n         <div class=\"card__info\">\r\n         <span class=\"card__name\">${el.name}</span>\r\n         <span class=\"card__weight\">Вага:${el.weight} г</span>        \r\n         </div>\r\n         <p class=\"card__describtion\">${el.description}</p>\r\n         <div class=\"card__bottom\">\r\n         <div class='card__btn-minus' style=\"display: none;\"></div>\r\n         <span class=\"card__price\">${el.price} Грн</span>\r\n         <div class='card__btn-basket' display: flex;>В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n         xmlns=\"http://www.w3.org/2000/svg\">\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n    </svg></span></div>\r\n         <div class='card__btn-plus' style=\"display: none;\"></div>\r\n         </div>\r\n\r\n         </li>`\r\n\r\n         }\r\n\r\n\r\n\r\n\r\n\r\n\r\n         switch (el.type) {\r\n            case 'drinks':\r\n\r\n               htmlDrinks += htmlVariable\r\n               break;\r\n\r\n            case 'hot-dish':\r\n               htmlHotMeal += htmlVariable\r\n               break;\r\n\r\n            case 'snack':\r\n               htmlSnacks += htmlVariable\r\n\r\n               break;\r\n\r\n         }\r\n\r\n\r\n\r\n      })\r\n\r\n\r\n\r\n\r\n      let snacksUl = `<ul class=\"swiper-wrapper \" >${htmlSnacks}</ul>`;\r\n      let hotMealUl = `<ul class=\"swiper-wrapper\" >${htmlHotMeal}</ul>`;\r\n      let drinnksUl = `<ul class=\"swiper-wrapper\" >${htmlDrinks}</ul>`;\r\n\r\n\r\n\r\n\r\n      SNACKS_CONTEINER.innerHTML = snacksUl;\r\n      HOT_MEALS_CONTEINER.innerHTML = hotMealUl;\r\n      DRINKS_CONTEINER.innerHTML = drinnksUl;\r\n\r\n   }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\nconst cardRender = new CardRender()\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/modules/first_page/food-card-Render.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../\u0000#NEWERA/Food/src/js/app.js");
/******/ 	app = __webpack_exports__;
/******/ 	
/******/ })()
;