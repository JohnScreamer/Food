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




(async function () {


   await cardRender.render()
   sliderHeader.addSliderEvent()

   burger.render()
   mainSlider.sliderMain()
   addEvents.add()
   eventLoad.events()


   window.addEventListener('storage', eventstorage)
   async function eventstorage() {
      await cardRender.render()
      burger.render()
      mainSlider.sliderMain()



   }


})()