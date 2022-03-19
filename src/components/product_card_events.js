const PRODUCT_CARD_CONTEINER = document.querySelector('.product-card__conteiner')
import {
   countBasket
} from '../components/basket-counter.js'
import {
   basketStorage
} from '../components/basketStorage.js'
class ProductEvents {
   addEvents() {
      PRODUCT_CARD_CONTEINER.addEventListener('click', e => {
         let id = e.target.closest('.product-card__item').getAttribute('data-id')
         let remove = e.target.closest('.remove-btn')
         let add = e.target.closest('.add-btn')
         if (remove) {

            remove.textContent = 'Корзина'
            remove.classList.add('add-btn')
            remove.classList.remove('remove-btn')
            basketStorage.delItem(id)
            setTimeout(() => {
               countBasket.render()
            }, 555);
         }
         if (add) {

            add.textContent = 'Забрати'
            add.classList.add('remove-btn')
            add.classList.remove('add-btn')
            basketStorage.addItem(id)
            setTimeout(() => {
               countBasket.render()
            }, 555);

         }
      })
   }

}
let cardBtnStyle = new ProductEvents();
export {
   cardBtnStyle
};