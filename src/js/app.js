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



(async function () {

   await cardRender.render()
   sliderHeader.addSliderEvent()

   burger.render()
   mainSlider.sliderMain()
   addEvents.add()


})()