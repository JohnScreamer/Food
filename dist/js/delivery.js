/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var delivery;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEvents\": () => (/* binding */ addEvents)\n/* harmony export */ });\n/* harmony import */ var _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _components_model_window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/model-window.js */ \"../../\\u0000#NEWERA/Food/src/components/model-window.js\");\n/* harmony import */ var _components_card_local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card_local_storage.js */ \"../../\\u0000#NEWERA/Food/src/components/card_local_storage.js\");\n/* harmony import */ var _components_product_card_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/product_card_render.js */ \"../../\\u0000#NEWERA/Food/src/components/product_card_render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass AddEvents {\r\n   add() {\r\n      document.addEventListener('click', e => {\r\n         let btnBasket = e.target.closest('.card__btn-basket');\r\n         let btnMinus = e.target.closest('.card__btn-minus');\r\n         let btnPlus = e.target.closest('.card__btn-plus');\r\n         let closeModelWindow = e.target.closest('.model-window-conteiner');\r\n         let cardImg = e.target.closest('.card__img');\r\n\r\n         if (cardImg) {\r\n\r\n\r\n            _components_card_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.storageCard.add(cardImg.closest('.card').getAttribute('data-id'))\r\n\r\n         }\r\n\r\n\r\n\r\n         if (btnBasket) {\r\n\r\n            btnBasket.style.display = 'none';\r\n            let card = btnBasket.closest('.card');\r\n            card.querySelector('.card__btn-minus').style.display = 'block';\r\n            card.querySelector('.card__btn-plus').style.display = 'block';\r\n            card.querySelector('.card__counter').style.display = 'flex';\r\n            card.querySelector('.card__counter').textContent = 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.addItem(card.getAttribute('data-id'));\r\n\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n\r\n\r\n\r\n\r\n         }\r\n\r\n         if (btnMinus) {\r\n\r\n            let card = btnMinus.closest('.card');\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.decrement(card.getAttribute('data-id'))\r\n            if (+card.querySelector('.card__counter').textContent > 1) {\r\n\r\n               card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent - 1;\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n            } else {\r\n\r\n               card.querySelector('.card__counter').style.display = 'none';\r\n               card.querySelector('.card__btn-basket').style.display = 'flex';\r\n               card.querySelector('.card__btn-plus').style.display = 'none';\r\n               card.querySelector('.card__btn-minus').style.display = 'none';\r\n               setTimeout(() => {\r\n                  _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n               }, 555);\r\n\r\n\r\n\r\n            }\r\n\r\n\r\n\r\n         }\r\n         if (btnPlus) {\r\n\r\n            let card = btnPlus.closest('.card');\r\n            card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent + 1;\r\n            _components_basketStorage_js__WEBPACK_IMPORTED_MODULE_0__.basketStorage.increment(card.getAttribute('data-id'))\r\n            setTimeout(() => {\r\n               _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_1__.countBasket.render()\r\n            }, 555);\r\n\r\n\r\n         }\r\n         if (closeModelWindow) {\r\n            _components_model_window_js__WEBPACK_IMPORTED_MODULE_2__.modelWindow.closeWindow();\r\n\r\n         }\r\n\r\n\r\n\r\n\r\n      })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   }\r\n\r\n}\r\n\r\nlet addEvents = new AddEvents()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/btn-card-events.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/card_local_storage.js":
/*!****************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/card_local_storage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storageCard\": () => (/* binding */ storageCard)\n/* harmony export */ });\nclass StorageCard {\r\n   async add(id) {\r\n      let data = sessionStorage.getItem('id')\r\n      let numID = await id;\r\n      console.log(numID);\r\n\r\n      if (data == null) {\r\n         sessionStorage.setItem('id', \"[]\")\r\n      }\r\n\r\n      data = JSON.parse(sessionStorage.getItem('id'))\r\n\r\n\r\n      data.push(+numID)\r\n      console.log(data);\r\n      sessionStorage.setItem('id', JSON.stringify(data))\r\n\r\n   }\r\n}\r\n\r\nlet storageCard = new StorageCard()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/card_local_storage.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/components/delivery-events.js":
/*!*************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/delivery-events.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deliveryEvents\": () => (/* binding */ deliveryEvents)\n/* harmony export */ });\nclass DeliveryEvents {\r\n   addEvents() {\r\n      document.addEventListener('click', e => {\r\n         let title = e.target.closest('.information-block__title')\r\n\r\n         if (title) {\r\n            console.log(1);\r\n            title.closest('.information-block__wrapper').querySelector('.information-block__text').classList.toggle('text-active')\r\n\r\n         }\r\n      })\r\n   }\r\n}\r\nlet deliveryEvents = new DeliveryEvents()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/delivery-events.js?");

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

/***/ "../../\u0000#NEWERA/Food/src/components/product_card_render.js":
/*!*****************************************************************!*\
  !*** ../../ #NEWERA/Food/src/components/product_card_render.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productCard\": () => (/* binding */ productCard)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"../../\\u0000#NEWERA/Food/src/components/getData.js\");\n/* harmony import */ var _basketStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basketStorage.js */ \"../../\\u0000#NEWERA/Food/src/components/basketStorage.js\");\nconst CARD_WRAPPER = document.querySelector('.product-card__wrapper');\r\nconst RECOMMENDATION_WRAPPER = document.querySelector('.recommendation__wrapper')\r\n;\r\n\r\n\r\n\r\n\r\nclass ProductCard {\r\n   async render() {\r\n      let basket = await _basketStorage_js__WEBPACK_IMPORTED_MODULE_1__.basketStorage.valid()\r\n      let respons = sessionStorage.getItem('id');\r\n      console.log(respons);\r\n      respons = JSON.parse(respons)\r\n      console.log(respons);\r\n      let id = respons[respons.length - 1]\r\n\r\n      console.log(id);\r\n\r\n      let data = await _getData_js__WEBPACK_IMPORTED_MODULE_0__.getData.get()\r\n      console.log(data);\r\n      let cardHTML = '';\r\n      let recomendHTML = '';\r\n      let capacityWeight;\r\n      let type;\r\n      data.forEach(el => {\r\n         if (el.id == id) {\r\n            el.type == \"drinks\" ? capacityWeight = `${el.weight} Л` : capacityWeight = `Вага: ${el.weight} г`;\r\n            type = el.type\r\n            cardHTML = `<div class=\"product-card__item\">\r\n            <img src=\"${el.img}\">\r\n             <div class=\"item__block-info\">\r\n             <h2>${el.name}</h2>\r\n             <p>${el.description}</p>\r\n             <span class=\"item__weight\">${capacityWeight}</span>\r\n             <div class=\"item__bottom\">\r\n             <button>Корзина</button>\r\n             <span>${el.price}</span>\r\n             </div></div>\r\n\r\n            </div>`\r\n         }\r\n\r\n      });\r\n\r\n\r\n\r\n\r\n\r\n      if (type == \"drinks\") {\r\n\r\n\r\n         let recomend = data.filter(el => {\r\n            if (el.type != type) {\r\n               return el;\r\n            }\r\n         })\r\n\r\n         let num = recomend.length\r\n\r\n         Math.floor(Math.random() * num)\r\n         let render = new Set()\r\n\r\n\r\n         while (render.size < 4) {\r\n            render.add(Math.floor(Math.random() * num + 1))\r\n         }\r\n         let capacityWeight;\r\n\r\n         Array.from(render).forEach(id => {\r\n\r\n\r\n            let amount = 0;\r\n            basket.forEach(basket => {\r\n               if (basket.id == recomend[id].id) {\r\n                  amount = basket.amount;\r\n               }\r\n            });\r\n            recomend[id].type == \"drinks\" ? capacityWeight = `${recomend[id].weight} Л` : capacityWeight = `Вага: ${recomend[id].weight} г`;\r\n            if (amount) {\r\n               recomendHTML += `<li class=\"swiper-slide card\" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >\r\n           <span class='card__counter' style=\"display: flex;\" >${amount}</span>\r\n           <a  href=\"product-card.html\"><img class=\"card__img\"  src=\"${recomend[id].img}\"></a>\r\n           <div class=\"card__info\">\r\n           <span class=\"card__name\">${recomend[id].name}</span>\r\n           <span class=\"card__weight\">${capacityWeight}</span>        \r\n           </div>\r\n           <p class=\"card__describtion\">${recomend[id].description}</p>\r\n           <div class=\"card__bottom\">\r\n           <div class='card__btn-minus'  style=\"display: block;\"></div>\r\n           <span class=\"card__price\">${recomend[id].price} Грн</span>\r\n           <div class='card__btn-basket'  style=\"display: none;\">В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n           xmlns=\"http://www.w3.org/2000/svg\">\r\n           <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n                stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n      </svg></span></div>\r\n           <div class='card__btn-plus'  style=\"display:block;\"></div>\r\n           </div>\r\n  \r\n           </li>`\r\n            } else {\r\n               recomendHTML += `<li class=\"swiper-slide card\" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >\r\n         <span class='card__counter' style=\"display: none;\">${amount}</span>\r\n         <a  href=\"product-card.html\"><img class=\"card__img\"   src=\"${recomend[id].img}\"></a>\r\n         <div class=\"card__info\">\r\n         <span class=\"card__name\">${recomend[id].name}</span>\r\n         <span class=\"card__weight\">${capacityWeight}</span>        \r\n         </div>\r\n         <p class=\"card__describtion\">${recomend[id].description}</p>\r\n         <div class=\"card__bottom\">\r\n         <div class='card__btn-minus' style=\"display: none;\"></div>\r\n         <span class=\"card__price\">${recomend[id].price} Грн</span>\r\n         <div class='card__btn-basket' display: flex;>В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n         xmlns=\"http://www.w3.org/2000/svg\">\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n    </svg></span></div>\r\n         <div class='card__btn-plus' style=\"display: none;\"></div>\r\n         </div>\r\n\r\n         </li>`\r\n            }\r\n         })\r\n\r\n\r\n\r\n      } else {\r\n\r\n         let recomend = data.filter(el => {\r\n            if (el.type != type) {\r\n               return el;\r\n            }\r\n         })\r\n\r\n         console.log(data, 'data');\r\n         let num = recomend.length\r\n         console.log(recomend.length, 'length');\r\n\r\n         Math.floor(Math.random() * num)\r\n         let render = new Set()\r\n\r\n\r\n         while (render.size < 4) {\r\n            render.add(Math.floor(Math.random() * num + 1))\r\n         }\r\n         let capacityWeight;\r\n         console.log(render, 'render');\r\n\r\n         Array.from(render).forEach(id => {\r\n\r\n\r\n            let amount = 0;\r\n            basket.forEach(basket => {\r\n\r\n\r\n               if (basket.id == recomend[id].id) {\r\n                  amount = basket.amount;\r\n               }\r\n            });\r\n            recomend[id].type == \"drinks\" ? capacityWeight = `${recomend[id].weight} Л` : capacityWeight = `Вага: ${recomend[id].weight} г`;\r\n            if (amount) {\r\n               recomendHTML += `<li class=\"swiper-slide card\" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >\r\n           <span class='card__counter' style=\"display: flex;\" >${amount}</span>\r\n           <a  href=\"product-card.html\"><img class=\"card__img\"  src=\"${recomend[id].img}\"></a>\r\n           <div class=\"card__info\">\r\n           <span class=\"card__name\">${recomend[id].name}</span>\r\n           <span class=\"card__weight\">${capacityWeight}</span>        \r\n           </div>\r\n           <p class=\"card__describtion\">${recomend[id].description}</p>\r\n           <div class=\"card__bottom\">\r\n           <div class='card__btn-minus'  style=\"display: block;\"></div>\r\n           <span class=\"card__price\">${recomend[id].price} Грн</span>\r\n           <div class='card__btn-basket'  style=\"display: none;\">В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n           xmlns=\"http://www.w3.org/2000/svg\">\r\n           <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n                stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\" />\r\n           <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n                stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n      </svg></span></div>\r\n           <div class='card__btn-plus'  style=\"display:block;\"></div>\r\n           </div>\r\n  \r\n           </li>`\r\n            } else {\r\n               recomendHTML += `<li class=\"swiper-slide card\" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >\r\n         <span class='card__counter' style=\"display: none;\">${amount}</span>\r\n         <a  href=\"product-card.html\"><img class=\"card__img\"   src=\"${recomend[id].img}\"></a>\r\n         <div class=\"card__info\">\r\n         <span class=\"card__name\">${recomend[id].name}</span>\r\n         <span class=\"card__weight\">${capacityWeight}</span>        \r\n         </div>\r\n         <p class=\"card__describtion\">${recomend[id].description}</p>\r\n         <div class=\"card__bottom\">\r\n         <div class='card__btn-minus' style=\"display: none;\"></div>\r\n         <span class=\"card__price\">${recomend[id].price} Грн</span>\r\n         <div class='card__btn-basket' display: flex;>В корзину <span class=\"card__icon\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\"\r\n         xmlns=\"http://www.w3.org/2000/svg\">\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323\"\r\n              stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\" />\r\n         <path d=\"M11.7712 8.99583H14.082\" stroke=\"white\" stroke-width=\"1.5\"\r\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n    </svg></span></div>\r\n         <div class='card__btn-plus' style=\"display: none;\"></div>\r\n         </div>\r\n\r\n         </li>`\r\n            }\r\n         })\r\n\r\n\r\n\r\n      }\r\n      let conteiner = `<ul class=\"swiper-wrapper\"> ${recomendHTML}</ul>`\r\n\r\n      RECOMMENDATION_WRAPPER.innerHTML = conteiner;\r\n\r\n\r\n      CARD_WRAPPER.innerHTML = cardHTML;\r\n\r\n\r\n   }\r\n}\r\n\r\nlet productCard = new ProductCard()\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/components/product_card_render.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/constants/constants.js":
/*!******************************************************!*\
  !*** ../../ #NEWERA/Food/src/constants/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HEADER_BOTTOM_ROW\": () => (/* binding */ HEADER_BOTTOM_ROW),\n/* harmony export */   \"HEADER_BURGER_BTN\": () => (/* binding */ HEADER_BURGER_BTN),\n/* harmony export */   \"HEADER_BURGER_WINDOW\": () => (/* binding */ HEADER_BURGER_WINDOW),\n/* harmony export */   \"HEADER_MENU_ITEM\": () => (/* binding */ HEADER_MENU_ITEM),\n/* harmony export */   \"HEADER_UPPER_ROW_INPUT_CONTEINER\": () => (/* binding */ HEADER_UPPER_ROW_INPUT_CONTEINER)\n/* harmony export */ });\nconst HEADER_BOTTOM_ROW = document.querySelector('.header-menu__bottom-content-row');\r\nconst HEADER_UPPER_ROW_INPUT_CONTEINER = document.querySelector('.input-conteiner')\r\nconst HEADER_BURGER_WINDOW = document.querySelector(\".header__burger-window\")\r\nconst HEADER_BURGER_BTN = document.querySelector('.header-menu__burger')\r\nconst HEADER_MENU_ITEM = document.querySelectorAll('.menu__item ')\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/constants/constants.js?");

/***/ }),

/***/ "../../\u0000#NEWERA/Food/src/js/delivery.js":
/*!**********************************************!*\
  !*** ../../ #NEWERA/Food/src/js/delivery.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header-burger.js */ \"../../\\u0000#NEWERA/Food/src/components/header-burger.js\");\n/* harmony import */ var _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/btn-card-events.js */ \"../../\\u0000#NEWERA/Food/src/components/btn-card-events.js\");\n/* harmony import */ var _components_load_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/load-events.js */ \"../../\\u0000#NEWERA/Food/src/components/load-events.js\");\n/* harmony import */ var _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/basket-counter.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-counter.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer.js */ \"../../\\u0000#NEWERA/Food/src/components/footer.js\");\n/* harmony import */ var _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header-slider.js */ \"../../\\u0000#NEWERA/Food/src/components/Header-slider.js\");\n/* harmony import */ var _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mainSliderFunction.js */ \"../../\\u0000#NEWERA/Food/src/components/mainSliderFunction.js\");\n/* harmony import */ var _components_basket_valid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/basket-valid.js */ \"../../\\u0000#NEWERA/Food/src/components/basket-valid.js\");\n/* harmony import */ var _components_delivery_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/delivery-events.js */ \"../../\\u0000#NEWERA/Food/src/components/delivery-events.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(async function () {\r\n\r\n   _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger.render()\r\n   _components_btn_card_events_js__WEBPACK_IMPORTED_MODULE_1__.addEvents.add()\r\n   _components_load_events_js__WEBPACK_IMPORTED_MODULE_2__.eventLoad.events()\r\n   _components_footer_js__WEBPACK_IMPORTED_MODULE_4__.footerEvent.addEvent()\r\n   _components_Header_slider_js__WEBPACK_IMPORTED_MODULE_5__.sliderHeader.addSliderEvent()\r\n   _components_mainSliderFunction_js__WEBPACK_IMPORTED_MODULE_6__.mainSlider.sliderMain()\r\n   _components_basket_valid_js__WEBPACK_IMPORTED_MODULE_7__.basketValid.addEvemt()\r\n   _components_delivery_events_js__WEBPACK_IMPORTED_MODULE_8__.deliveryEvents.addEvents()\r\n   setTimeout(() => {\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__.countBasket.render()\r\n   }, 555);\r\n\r\n\r\n\r\n   window.addEventListener('storage', eventstorage)\r\n   async function eventstorage() {\r\n      basketdRender.render()\r\n      _components_header_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger.render()\r\n      _components_basket_counter_js__WEBPACK_IMPORTED_MODULE_3__.countBasket.render()\r\n\r\n\r\n\r\n   }\r\n\r\n\r\n})()\n\n//# sourceURL=webpack://%5Bname%5D/../../%00#NEWERA/Food/src/js/delivery.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../\u0000#NEWERA/Food/src/js/delivery.js");
/******/ 	delivery = __webpack_exports__;
/******/ 	
/******/ })()
;