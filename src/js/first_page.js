import {
   basketdRender
} from "../modules/basket/basket_page.js"
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
   orderNav
} from '../modules/basket/order-nav.js'
import {
   footerEvent
} from '../components/footer.js'

import {
   sliderEvents
} from '../components/sliderEvent.js'





(async function () {
   try {
      basketdRender.render()

   } catch (error) {
      console.log(error);

   }
   burger.render()
   addEvents.add()
   eventLoad.events()
   orderNav.addEvent()
   footerEvent.addEvent()
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