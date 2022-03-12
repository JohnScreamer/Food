import {
   basketStorage
} from '../../components/basketStorage.js'

import {
   countBasket
} from '../../components/basket-counter.js'

import {
   basketdRender
} from '../../modules/basket/basket_page.js'

class OrderNav {

   addEvent() {
      document.addEventListener('click', e => {
         let btnMinus = e.target.closest('.order__minus');
         let btnPlus = e.target.closest('.order__plus');
         let btnСancel = e.target.closest('.order__cansel');

         if (btnMinus) {
            let order = btnMinus.closest('.order__item');
            basketStorage.decrement(order.getAttribute('data-id'))
            setTimeout(() => {
               countBasket.render()
            }, 555);
            setTimeout(() => {
               basketdRender.render()
            }, 0);


         }
         if (btnPlus) {
            let order = btnPlus.closest('.order__item');
            basketStorage.increment(order.getAttribute('data-id'));
            setTimeout(() => {
               countBasket.render()
            }, 555);
            setTimeout(() => {
               basketdRender.render()
            }, 0);


            console.log('+');

         }
         if (btnСancel) {
            let order = btnСancel.closest('.order__item');
            basketStorage.delItem(order.getAttribute('data-id'))
            setTimeout(() => {
               countBasket.render()
            }, 555);
            setTimeout(() => {
               basketdRender.render()
            }, 0);


         }

      })
   }



}

let orderNav = new OrderNav();
export {
   orderNav
}