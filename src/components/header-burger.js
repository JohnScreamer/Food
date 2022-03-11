import {
   HEADER_BURGER_BTN
} from '../constants/constants.js'
import {
   HEADER_BURGER_WINDOW
} from '../constants/constants.js'

class Burger {

   render() {
      HEADER_BURGER_BTN.addEventListener('click', (e) => {
         HEADER_BURGER_WINDOW.classList.toggle('burger-activ')
      })

   }
}
const burger = new Burger()
export {
   burger
}