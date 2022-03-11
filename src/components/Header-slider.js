import {
   HEADER_MENU_ITEM
} from '../constants/constants.js'


class Slider {

   addSliderEvent() {
      window.addEventListener('resize', e => {
         if (window.innerWidth > 768) {
            HEADER_MENU_ITEM.forEach(el => {
               el.classList.remove('swiper-slide')
            })

            return;

         }

         HEADER_MENU_ITEM.forEach(el => {
            el.classList.add('swiper-slide')
         })


      })


   }


   addDefaultSliderSetting() {
      if (window.innerWidth > 768) {
         HEADER_MENU_ITEM.forEach(el => {
            el.classList.remove('swiper-slide')
         })

         return;

      }

      HEADER_MENU_ITEM.forEach(el => {
         el.classList.add('swiper-slide')
      })
   }


}

const sliderHeader = new Slider()
export {
   sliderHeader
}