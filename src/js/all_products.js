import {
   cardRender
} from '../modules/first_page/food-card-Render.js'


import {
   burger
} from '../components/header-burger.js'

import {
   sliderHeader
} from '../components/Header-slider.js'

import {
   mainSlider
} from '../components/mainSliderFunction.js'

import {
   addEvents
} from '../components/btn-card-events.js'


import {
   eventLoad
} from '../components/load-events.js'

import {
   countBasket
} from '../components/basket-counter.js'

import {
   basketdRender
} from '../modules/basket/basket_page.js'

import {
   basketValid
} from '../components/basket-valid.js'

import {
   footerEvent
} from '../components/footer.js'

import {
   allProduct
} from '../components/all_product_card_render.js'
import {
   sliderEvents
} from '../components/sliderEvent.js'


(async function () {



   sliderHeader.addSliderEvent()
   allProduct.render()
   burger.render()
   mainSlider.sliderMain()
   addEvents.add()
   eventLoad.events()
   sliderEvents.add()
   setTimeout(() => {
      countBasket.render()
   }, 555);

   basketValid.addEvemt()
   window.addEventListener('storage', eventstorage)
   footerEvent.addEvent()

   async function eventstorage() {
      await cardRender.render()
      burger.render()
      mainSlider.sliderMain()
      countBasket.render()
      // basketdRender.renderRecommendation()




   }


})()