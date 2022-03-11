console.log('pruvit');
import {
   basketdRender
} from "../modules/basket/basket_page.js"
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


(async function () {
   try {
      basketdRender.render()
   } catch (error) {
      console.log(error);

   }

   sliderHeader.addSliderEvent()
   burger.render()
   mainSlider.sliderMain()
   addEvents.add()
   eventLoad.events()
   setTimeout(() => {
      countBasket.render()
   }, 555);



   window.addEventListener('storage', eventstorage)
   async function eventstorage() {
      basketdRender.render()
      burger.render()
      mainSlider.sliderMain()
      countBasket.render()



   }


})()