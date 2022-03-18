import {
   burger
} from '../components/header-burger.js'


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
   footerEvent
} from '../components/footer.js'
import {
   sliderHeader
} from '../components/Header-slider.js'

import {
   mainSlider
} from '../components/mainSliderFunction.js'

import {
   basketValid
} from '../components/basket-valid.js'
import {
   productCard
} from '../components/product_card_render.js'
import {
   cardBtnStyle
} from '../components/product_card_events.js'

import {
   sliderEvents
} from '../components/sliderEvent.js'




(async function () {
   cardBtnStyle.addEvents()
   await productCard.render()
   burger.render()
   addEvents.add()
   eventLoad.events()
   footerEvent.addEvent()
   sliderHeader.addSliderEvent()
   mainSlider.sliderMain()
   basketValid.addEvemt()
   sliderEvents.add()



   setTimeout(() => {
      countBasket.render()

   }, 555);



   window.addEventListener('storage', eventstorage)
   async function eventstorage() {
      basketdRender.render()
      burger.render()
      countBasket.render()




   }


})()