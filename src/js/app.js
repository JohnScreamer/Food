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
   about
} from '../modules/first_page/aboutEvents.js'

import {
   footerEvent
} from '../components/footer.js'

(async function () {


   await cardRender.render()
   sliderHeader.addSliderEvent()

   burger.render()
   mainSlider.sliderMain()
   addEvents.add()
   eventLoad.events()
   setTimeout(() => {
      countBasket.render()
   }, 555);

   basketValid.addEvemt()
   about.addEvent()
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