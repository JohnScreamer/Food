import {
   basketStorage
} from '../../components/basketStorage.js'

import {
   countBasket
} from '../../components/basket-counter.js'

import {
   basketdRender
} from '../../modules/basket/basket_page.js'

import {
   modelWindow
} from '../../components/model-window.js'

import {
   formScroll
} from '../../modules/basket/show-form.js'




class OrderNav {

   addEvent() {
      document.addEventListener('click', e => {
         let btnMinus = e.target.closest('.order__minus');
         let btnPlus = e.target.closest('.order__plus');
         let btnСancel = e.target.closest('.order__cansel');
         let recomendPlusbtn = e.target.closest('.recomend__plus');
         let submitOrder = e.target.closest('.accept-order__btn');
         let closeNodelWindow = e.target.closest('.close__model-window-btn')

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

         if (recomendPlusbtn) {
            let cardId = recomendPlusbtn.closest('.recomend__card');
            basketStorage.addItem(cardId.getAttribute('data-id'));
            setTimeout(() => {
               countBasket.render()
            }, 555);
            setTimeout(() => {
               basketdRender.render()
            }, 200);

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




         if (submitOrder) {
            (async function (params) {
               let {
                  totalPrice
               } = await basketStorage.getInfo();
               console.log(totalPrice);

               totalPrice > 150 ? formScroll.show() : modelWindow.modelErrorWindow();
            })()

         }
         if (closeNodelWindow) {
            modelWindow.closeWindow();
         }


      })


   }



}

let orderNav = new OrderNav();
export {
   orderNav
}