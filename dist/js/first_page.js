/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var first_page;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketStorage\": () => (/* binding */ basketStorage)\n/* harmony export */ });\n/* harmony import */ var _components_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/getData.js */ \"../../\\u0000#NEWERA/Food/src/components/getData.js\");\n\r\n\r\n\r\nclass BasketStorage {\r\n\r\n\r\n\r\n\r\n\r\n\r\n   async valid() {\r\n      let basket = await localStorage.key('basket')\r\n      if (!basket) {\r\n         basket = []\r\n         localStorage.setItem('basket', JSON.stringify(basket))\r\n      }\r\n      return JSON.parse(localStorage.getItem('basket'))\r\n   }\r\n\r\n   async addItem(id) {\r\n      let data = await _components_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData.get();\r\n\r\n      let basket = await this.valid()\r\n\r\n\r\n      data.forEach(el => {\r\n         if (el.id == id) {\r\n            let item = {\r\n               ...el\r\n            }\r\n            item.amount = 1;\r\n\r\n\r\n\r\n            basket.push(item)\r\n            localStorage.setItem('basket', JSON.stringify(basket))\r\n         }\r\n\r\n      });\r\n\r\n\r\n   }\r\n\r\n\r\n   async increment(id) {\r\n      let basket = await this.valid()\r\n      basket = basket.map(item => {\r\n         if (item.id == id) {\r\n            item.amount = +item.amount + 1;\r\n\r\n         }\r\n         return item;\r\n      })\r\n\r\n      localStorage.setItem('basket', JSON.stringify(basket));\r\n   }\r\n\r\n\r\n   async decrement(id) {\r\n      let basket = await this.valid()\r\n      basket = basket.filter(item => {\r\n         if (item.id == id) {\r\n            if (item.amount > 1) {\r\n               item.amount = +item.amount - 1;\r\n               return item;\r\n            } else {\r\n               return;\r\n            }\r\n\r\n\r\n\r\n         }\r\n         return item;\r\n      })\r\n\r\n      localStorage.setItem('basket', JSON.stringify(basket));\r\n\r\n\r\n   }\r\n   async delItem(id) {\r\n      let basket = await this.valid()\r\n      basket = basket.filter(item => {\r\n         if (item.id != id) {\r\n            return item;\r\n         }\r\n      })\r\n\r\n\r\n      localStorage.setItem('basket', JSON.stringify(basket));\r\n   }\r\n\r\n\r\n\r\n   async getInfo() {\r\n      let data = await this.valid();\r\n      let totalPrice = 0;\r\n      let totalAmout = 0\r\n\r\n      data.forEach(({\r\n         price,\r\n         amount\r\n      }) => {\r\n         totalAmout += amount;\r\n         totalPrice += price * amount;\r\n      })\r\n\r\n\r\n      console.log(totalPrice,\r\n         totalAmout);\r\n      return {\r\n         totalPrice,\r\n         totalAmout\r\n      }\r\n\r\n   }\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nlet basketStorage = new BasketStorage()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/basketStorage.js?");

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

/***/ "../../\u0000#NEWERA/Food/src/constants/constants.js":
/*!******************************************************!*\
  !*** ../../ #NEWERA/Food/src/constants/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HEADER_BOTTOM_ROW\": () => (/* binding */ HEADER_BOTTOM_ROW),\n/* harmony export */   \"HEADER_BURGER_BTN\": () => (/* binding */ HEADER_BURGER_BTN),\n/* harmony export */   \"HEADER_BURGER_WINDOW\": () => (/* binding */ HEADER_BURGER_WINDOW),\n/* harmony export */   \"HEADER_MENU_ITEM\": () => (/* binding */ HEADER_MENU_ITEM),\n/* harmony export */   \"HEADER_UPPER_ROW_INPUT_CONTEINER\": () => (/* binding */ HEADER_UPPER_ROW_INPUT_CONTEINER)\n/* harmony export */ });\nconst HEADER_BOTTOM_ROW = document.querySelector('.header-menu__bottom-content-row');\r\nconst HEADER_UPPER_ROW_INPUT_CONTEINER = document.querySelector('.input-conteiner')\r\nconst HEADER_BURGER_WINDOW = document.querySelector(\".header__burger-window\")\r\nconst HEADER_BURGER_BTN = document.querySelector('.header-menu__burger')\r\nconst HEADER_MENU_ITEM = document.querySelectorAll('.menu__item ')\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/constants/constants.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/js/first_page.js":
/*!************************************************!*\
  !*** ../../ #NEWERA/Food/src/js/first_page.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/basket/basket_page.js */ \"../../\\u0000#NEWERA/Food/src/modules/basket/basket_page.js\");\n/* harmony import */ var _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header-burger.js */ \"../../\\u0000#NEWERA/Food/src/components/header-burger.js\");\n/* harmony import */ var _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/btn-card-events.js */ \"../../\\u0000#NEWERA/Food/src/components/btn-card-events.js\");\n/* harmony import */ var _components_load_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/load-events.js */ \"../../\\u0000#NEWERA/Food/src/components/load-events.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _modules_basket_order_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/basket/order-nav.js */ \"../../\\u0000#NEWERA/Food/src/modules/basket/order-nav.js\");\nconsole.log('pruvit');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(async function () {\r\n   try {\r\n      _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_0__.basketdRender.render()\r\n\r\n   } catch (error) {\r\n      console.log(error);\r\n\r\n   }\r\n   _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__.burger.render()\r\n   _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_2__.addEvents.add()\r\n   _components_load_events_js__WEBPACK_IMPORTED_MODULE_3__.eventLoad.events()\r\n   _modules_basket_order_nav_js__WEBPACK_IMPORTED_MODULE_5__.orderNav.addEvent()\r\n   setTimeout(() => {\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_4__.countBasket.render()\r\n   }, 555);\r\n\r\n\r\n\r\n   window.addEventListener('storage', eventstorage)\r\n   async function eventstorage() {\r\n      _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_0__.basketdRender.render()\r\n      _components_header_burger_js__WEBPACK_IMPORTED_MODULE_1__.burger.render()\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_4__.countBasket.render()\r\n\r\n\r\n\r\n   }\r\n\r\n\r\n})()\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/js/first_page.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/modules/basket/basket_page.js":
/*!*************************************************************!*\
  !*** ../../ #NEWERA/Food/src/modules/basket/basket_page.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketdRender\": () => (/* binding */ basketdRender)\n/* harmony export */ });\n/* harmony import */ var _components_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/getData.js */ \"../../\\u0000#NEWERA/Food/src/components/getData.js\");\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n\n\n\n\n\nconst ORDER_WRAPPER = document.querySelector('.order__wrapper');\nconst OREDER_RECOMMENDATION = document.querySelector('.order__recommendation');\nconst ORDER_TOTAL_PRICE = document.querySelector('.accept-order__total-price')\n\n\n\n\n\n\n\nclass BasketdRender {\n   constructor() {\n\n   }\n\n\n   async render() {\n\n\n      let basket = await _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__.basketStorage.valid()\n      console.log(basket);\n      let ul = '';\n      basket.forEach(({\n         price,\n         amount,\n         name,\n         description,\n         type,\n         id,\n         weight,\n         img,\n      }) => {\n\n         let li = `<li class=\"order__item\" data-id=\"${id}\" ><img class=\"order__img\" src=\"${img}\">\n            <div class=\"order__body\">\n              <div class=\"order__info\">\n              <h2 class=\"order__name\">${name}</h2>\n              <p class=\"order__description\">${description}</p>\n              </div>\n               <div class=\"order__nav\">\n               <button class=\"order__minus\">-</button>\n                     <span class=\"order__amount\">${amount}</span>\n               <button class=\"order__plus\">+</button>\n               </div>\n               <span class=\"order__price\">${price * amount} ₴</span>\n               <button class=\"order__cansel\">x</button>\n               </div>\n         </li>`;\n\n\n         ul += li;\n      });\n\n      let HTML = `<ul class=\"order__all-orders\">${ul}</ul>`\n      ORDER_WRAPPER.innerHTML = HTML;\n      let {\n         totalPrice,\n         totalAmout\n      } = await _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__.basketStorage.getInfo()\n\n      console.log(totalPrice,\n         totalAmout);\n\n      ORDER_TOTAL_PRICE.textContent = totalPrice + \" ₴\";\n\n      this.recomendation()\n\n\n\n\n\n   }\n\n\n   async recomendation() {\n      let recomend = await this.renderRecommendation()\n      console.log(recomend);\n\n      let ul = '';\n      recomend.forEach(({\n         price,\n         name,\n         id,\n         img,\n      }) => {\n\n         let li = `<li class=\"recomend__card\" data-id=\"${id}\" ><img class=\"recomend__img\" src=\"${img}\">\n         <div class=\"recomend__body\">       \n           <h2 class=\"recomend__name\">${name}</h2> \n            <div class=\"recomend__bottom\"> <span class=\"recomend__subtitle\"><span>Додати</span><button class=\"recomend__plus\">+</button></span>              \n            \n            <span class=\"recomend__price\">${price} ₴</span> </div>\n            </div>\n      </li>`;\n\n\n         ul += li;\n      });\n\n      let HTML = `<ul class=\"recomend__all-recomends\">${ul}</ul>`\n\n      OREDER_RECOMMENDATION.innerHTML = HTML;\n   }\n\n\n\n\n\n\n\n\n\n   async renderRecommendation() {\n      let recomendItem = []\n      let data = await _components_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData.get()\n      let amoutItem = await data.length\n\n      let arrID = await _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_1__.basketStorage.valid()\n      let arrData = this.arrCreate(data.length);\n\n\n      let arr = [...this.arrCreate(amoutItem)]\n\n\n      let counter = amoutItem * 2\n\n\n\n\n      while (counter > 0 && recomendItem.length !== 4) {\n         let randID = this.numRandom(arr)\n\n\n         let num = this.recur(data, randID);\n\n         if (this.validItem2(num, recomendItem) && this.validItem(num, arrID)) {\n\n            recomendItem.length < 4 ? recomendItem.push(num[0]) : false;\n\n\n         }\n\n         counter--;\n\n\n      }\n\n\n      return recomendItem;\n\n   }\n   recur(data, randID) {\n      let respons = data.filter((el => {\n         if (el.id == randID) {\n            return el;\n         }\n      }));\n      return respons;\n\n   }\n\n\n\n   arrCreate(a) {\n      let arr = []\n      let rez = a\n      while (rez) {\n         arr.push(rez)\n            --rez\n      }\n      arr.reverse()\n      return arr;\n\n\n   }\n\n\n\n   numRandom(arr2) {\n\n      let ranB = arr2[Math.floor(Math.random() * arr2.length)]\n\n      let a = arr2.filter(el => el != ranB)\n\n      arr2 = a;\n\n      return ranB\n\n\n   }\n\n\n\n\n\n   validItem(item, basket) {\n\n      let rezolt = true\n      basket.forEach(el => {\n         if (el.id == item[0].id) {\n\n            rezolt = false\n         }\n      })\n\n      return rezolt;\n\n   }\n   validItem2(item, basket) {\n\n      let rezolt = true\n      basket.forEach(el => {\n\n         if (el.id == item[0].id) {\n            console.log(el.id, item[0].id, 999999999999999);\n            rezolt = false\n         }\n      })\n\n      return rezolt;\n\n   }\n\n\n\n\n\n}\n\n\n\nconst basketdRender = new BasketdRender()\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/modules/basket/basket_page.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/modules/basket/order-nav.js":
/*!***********************************************************!*\
  !*** ../../ #NEWERA/Food/src/modules/basket/order-nav.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orderNav\": () => (/* binding */ orderNav)\n/* harmony export */ });\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/basket/basket_page.js */ \"../../\\u0000#NEWERA/Food/src/modules/basket/basket_page.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass OrderNav {\r\n\r\n   addEvent() {\r\n      document.addEventListener('click', e => {\r\n         let btnMinus = e.target.closest('.order__minus');\r\n         let btnPlus = e.target.closest('.order__plus');\r\n         let btnСancel = e.target.closest('.order__cansel');\r\n\r\n         if (btnMinus) {\r\n            let order = btnMinus.closest('.order__item');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.decrement(order.getAttribute('data-id'))\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n            setTimeout(() => {\r\n               _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_2__.basketdRender.render()\r\n            }, 0);\r\n\r\n\r\n         }\r\n         if (btnPlus) {\r\n            let order = btnPlus.closest('.order__item');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.increment(order.getAttribute('data-id'));\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n            setTimeout(() => {\r\n               _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_2__.basketdRender.render()\r\n            }, 0);\r\n\r\n\r\n            console.log('+');\r\n\r\n         }\r\n         if (btnСancel) {\r\n            let order = btnСancel.closest('.order__item');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.delItem(order.getAttribute('data-id'))\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n            setTimeout(() => {\r\n               _modules_basket_basket_page_js__WEBPACK_IMPORTED_MODULE_2__.basketdRender.render()\r\n            }, 0);\r\n\r\n\r\n         }\r\n\r\n      })\r\n   }\r\n\r\n\r\n\r\n}\r\n\r\nlet orderNav = new OrderNav();\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/modules/basket/order-nav.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../\u0000#NEWERA/Food/src/js/first_page.js");
/******/ 	first_page = __webpack_exports__;
/******/ 	
/******/ })()
;