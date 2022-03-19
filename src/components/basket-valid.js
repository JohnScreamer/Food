let basket = document.querySelector('.header-menu__basket')
import {
   basketStorage
} from '../components/basketStorage.js'
import {
   modelWindow
} from '../components/model-window.js'

class BasketValid {

   addEvemt() {

      basket.addEventListener('click', this.fn)

   }
   async fn(e) {
      let {
         totalAmout
      } = await basketStorage.getInfo()

      if (totalAmout > 0) {


         return;
      }
      modelWindow.modelMessageWindow()
      e.preventDefault()
   }
}

let basketValid = new BasketValid()


export {
   basketValid
}