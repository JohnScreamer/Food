import {
   basketStorage
} from '../components/basketStorage.js'


class addEvents {
   add() {
      document.addEventListener(e => {
         let btnBasket = e.target.closest('.order__cansel');
         let btnMinus = e.target.closest('.order__minus');
         let btnPlus = e.target.closest('.order__plus');

      })
   }

}