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

   window.addEventListener('storage', eventstorage)
   async function eventstorage() {
      await cardRender.render()
      burger.render()
      mainSlider.sliderMain()
      countBasket.render()
      // basketdRender.renderRecommendation()




   }


})()






function arrCreate(a) {
   let arr = []
   let rez = a
   while (rez) {
      arr.push(rez)
         --rez
   }
   arr.reverse()
   return arr;


}
let arr2 = [...arrCreate(5)]
console.log(arr2);



function numRandom(arr) {
   let ranB = arr2[Math.floor(Math.random() * arr2.length)]
   console.log(ranB);
   let a = arr2.filter(el => el != ranB)
   console.log(arr);
   arr2 = a;
   return ranB


}




while (arr2.length) {
   numRandom(arr2)

}
console.log(arr2);