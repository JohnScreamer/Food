/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var offers;
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

/***/ "../../\u0000#NEWERA/Food/src/components/basket-valid.js":
/*!**********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/basket-valid.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketValid\": () => (/* binding */ basketValid)\n/* harmony export */ });\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n/* harmony import */ var _components_model_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/model-window.js */ \"../../\\u0000#NEWERA/Food/src/components/model-window.js\");\nlet basket = document.querySelector('.header-menu__basket')\r\n;\r\n\r\n\r\nclass BasketValid {\r\n\r\n   addEvemt() {\r\n\r\n      basket.addEventListener('click', this.fn)\r\n\r\n   }\r\n   async fn(e) {\r\n      let {\r\n         totalAmout\r\n      } = await _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.getInfo()\r\n      console.log(totalAmout);\r\n      if (totalAmout > 0) {\r\n\r\n\r\n         return;\r\n      }\r\n      _components_model_window_js__WEBPACK_IMPORTED_MODULE_1__.modelWindow.modelMessageWindow()\r\n      e.preventDefault()\r\n   }\r\n}\r\n\r\nlet basketValid = new BasketValid()\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/basket-valid.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEvents\": () => (/* binding */ addEvents)\n/* harmony export */ });\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _components_model_window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/model-window.js */ \"../../\\u0000#NEWERA/Food/src/components/model-window.js\");\n\r\n\r\n\r\n\r\nclass AddEvents {\r\n   add() {\r\n      document.addEventListener('click', e => {\r\n         let btnBasket = e.target.closest('.card__btn-basket');\r\n         let btnMinus = e.target.closest('.card__btn-minus');\r\n         let btnPlus = e.target.closest('.card__btn-plus');\r\n         let closeModelWindow = e.target.closest('.model-window-conteiner');\r\n\r\n         if (btnBasket) {\r\n\r\n            btnBasket.style.display = 'none';\r\n            let card = btnBasket.closest('.card');\r\n            card.querySelector('.card__btn-minus').style.display = 'block';\r\n            card.querySelector('.card__btn-plus').style.display = 'block';\r\n            card.querySelector('.card__counter').style.display = 'flex';\r\n            card.querySelector('.card__counter').textContent = 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.addItem(card.getAttribute('data-id'));\r\n\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n\r\n\r\n\r\n\r\n         }\r\n\r\n         if (btnMinus) {\r\n\r\n            let card = btnMinus.closest('.card');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.decrement(card.getAttribute('data-id'))\r\n            if (+card.querySelector('.card__counter').textContent > 1) {\r\n\r\n               card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent - 1;\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n            } else {\r\n\r\n               card.querySelector('.card__counter').style.display = 'none';\r\n               card.querySelector('.card__btn-basket').style.display = 'flex';\r\n               card.querySelector('.card__btn-plus').style.display = 'none';\r\n               card.querySelector('.card__btn-minus').style.display = 'none';\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n\r\n            }\r\n\r\n\r\n\r\n         }\r\n         if (btnPlus) {\r\n\r\n            let card = btnPlus.closest('.card');\r\n            card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent + 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.increment(card.getAttribute('data-id'))\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n         }\r\n         if (closeModelWindow) {\r\n            _components_model_window_js__WEBPACK_IMPORTED_MODULE_2__.modelWindow.closeWindow();\r\n\r\n         }\r\n\r\n\r\n\r\n\r\n      })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   }\r\n\r\n}\r\n\r\nlet addEvents = new AddEvents()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/btn-card-events.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/footer.js":
/*!****************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/footer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerEvent\": () => (/* binding */ footerEvent)\n/* harmony export */ });\nconst FOOTER_BTN = document.querySelector('.footer__button-up')\r\nconst HEADER_MENU = document.querySelector('.header-menu')\r\n\r\nclass Footer {\r\n   addEvent() {\r\n      FOOTER_BTN.addEventListener('click', e => {\r\n         HEADER_MENU.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n\r\n         })\r\n      })\r\n\r\n   }\r\n}\r\nlet footerEvent = new Footer()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/footer.js?");

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

/***/ "../../\u0000#NEWERA/Food/src/components/model-window.js":
/*!**********************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/model-window.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modelWindow\": () => (/* binding */ modelWindow)\n/* harmony export */ });\nconst MODEL_WINDOW_CONTEINER = document.querySelector('.model-window-conteiner')\r\n\r\nconst BODY = document.querySelector(\"body\")\r\n\r\n\r\nclass ModelWindow {\r\n\r\n   modelMessageWindow() {\r\n      MODEL_WINDOW_CONTEINER.style.display = 'flex';\r\n      let HTML = `<div class=\"model-window\">\r\n         <img src=\"img/Vectorbasket.png\">\r\n         <h3>Корзина пуста</h3>\r\n         <button>Перейти до меню</button>\r\n         <span class=\"close__model-window-btn\"></span>\r\n         \r\n      </div>`\r\n\r\n      MODEL_WINDOW_CONTEINER.innerHTML = HTML\r\n\r\n      BODY.style.overflow = 'hidden';\r\n\r\n\r\n   }\r\n   modelErrorWindow() {\r\n      MODEL_WINDOW_CONTEINER.style.display = 'flex';\r\n      let HTML = `<div class=\"model-window-error\">\r\n         <img src=\"img/delivery-failed.png\">\r\n         <h3>Заказ повинен бути більше 150₴</h3>\r\n         <span class=\"close__model-window-btn\"></span>\r\n         \r\n      </div>`\r\n\r\n      MODEL_WINDOW_CONTEINER.innerHTML = HTML\r\n      BODY.style.overflow = 'hidden';\r\n   }\r\n\r\n   closeWindow() {\r\n      MODEL_WINDOW_CONTEINER.style.display = 'none';\r\n      BODY.style.overflow = 'auto';\r\n   }\r\n\r\n}\r\nlet modelWindow = new ModelWindow()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/model-window.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/constants/constants.js":
/*!******************************************************!*\
  !*** ../../ #NEWERA/Food/src/constants/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HEADER_BOTTOM_ROW\": () => (/* binding */ HEADER_BOTTOM_ROW),\n/* harmony export */   \"HEADER_BURGER_BTN\": () => (/* binding */ HEADER_BURGER_BTN),\n/* harmony export */   \"HEADER_BURGER_WINDOW\": () => (/* binding */ HEADER_BURGER_WINDOW),\n/* harmony export */   \"HEADER_MENU_ITEM\": () => (/* binding */ HEADER_MENU_ITEM),\n/* harmony export */   \"HEADER_UPPER_ROW_INPUT_CONTEINER\": () => (/* binding */ HEADER_UPPER_ROW_INPUT_CONTEINER)\n/* harmony export */ });\nconst HEADER_BOTTOM_ROW = document.querySelector('.header-menu__bottom-content-row');\r\nconst HEADER_UPPER_ROW_INPUT_CONTEINER = document.querySelector('.input-conteiner')\r\nconst HEADER_BURGER_WINDOW = document.querySelector(\".header__burger-window\")\r\nconst HEADER_BURGER_BTN = document.querySelector('.header-menu__burger')\r\nconst HEADER_MENU_ITEM = document.querySelectorAll('.menu__item ')\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/constants/constants.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/js/offers.js":
/*!********************************************!*\
  !*** ../../ #NEWERA/Food/src/js/offers.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header-burger.js */ \"../../\\u0000#NEWERA/Food/src/components/header-burger.js\");\n/* harmony import */ var _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/btn-card-events.js */ \"../../\\u0000#NEWERA/Food/src/components/btn-card-events.js\");\n/* harmony import */ var _components_load_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/load-events.js */ \"../../\\u0000#NEWERA/Food/src/components/load-events.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer.js */ \"../../\\u0000#NEWERA/Food/src/components/footer.js\");\n/* harmony import */ var _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header-slider.js */ \"../../\\u0000#NEWERA/Food/src/components/Header-slider.js\");\n/* harmony import */ var _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mainSliderFunction.js */ \"../../\\u0000#NEWERA/Food/src/components/mainSliderFunction.js\");\n/* harmony import */ var _components_basket_valid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/basket-valid.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-valid.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(async function () {\r\n\r\n   _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger.render()\r\n   _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_1__.addEvents.add()\r\n   _components_load_events_js__WEBPACK_IMPORTED_MODULE_2__.eventLoad.events()\r\n   _components_footer_js__WEBPACK_IMPORTED_MODULE_4__.footerEvent.addEvent()\r\n   _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_5__.sliderHeader.addSliderEvent()\r\n   _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_6__.mainSlider.sliderMain()\r\n   _components_basket_valid_js__WEBPACK_IMPORTED_MODULE_7__.basketValid.addEvemt()\r\n   setTimeout(() => {\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__.countBasket.render()\r\n   }, 555);\r\n\r\n\r\n\r\n   window.addEventListener('storage', eventstorage)\r\n   async function eventstorage() {\r\n      basketdRender.render()\r\n      _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger.render()\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__.countBasket.render()\r\n\r\n\r\n\r\n   }\r\n\r\n\r\n})()\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/js/offers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../\u0000#NEWERA/Food/src/js/offers.js");
/******/ 	offers = __webpack_exports__;
/******/ 	
/******/ })()
;