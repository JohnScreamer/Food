import {
   basketStorage
} from "./basketStorage.js"


class Count {


   async render() {
      let {
         totalAmout
      } = await basketStorage.getInfo()

      const BASKET_COUTER = document.querySelector('.basket__count')
      BASKET_COUTER.textContent = totalAmout;
   }
   addEvent() {
      document.addEventListener('click', () => {
         this.render()
      })
   }

}

let countBasket = new Count()

export {
   countBasket
}