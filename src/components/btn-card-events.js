import {
   basketStorage
} from '../components/basketStorage.js'
import {
   countBasket
} from '../components/basket-counter.js'
import {
   modelWindow
} from '../components/model-window.js'

class AddEvents {
   add() {
      document.addEventListener('click', e => {
         let btnBasket = e.target.closest('.card__btn-basket');
         let btnMinus = e.target.closest('.card__btn-minus');
         let btnPlus = e.target.closest('.card__btn-plus');
         let closeModelWindow = e.target.closest('.model-window-conteiner');

         if (btnBasket) {

            btnBasket.style.display = 'none';
            let card = btnBasket.closest('.card');
            card.querySelector('.card__btn-minus').style.display = 'block';
            card.querySelector('.card__btn-plus').style.display = 'block';
            card.querySelector('.card__counter').style.display = 'flex';
            card.querySelector('.card__counter').textContent = 1;
            basketStorage.addItem(card.getAttribute('data-id'));

            setTimeout(() => {
               countBasket.render()
            }, 555);






         }

         if (btnMinus) {

            let card = btnMinus.closest('.card');
            basketStorage.decrement(card.getAttribute('data-id'))
            if (+card.querySelector('.card__counter').textContent > 1) {

               card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent - 1;
               setTimeout(() => {
                  countBasket.render()
               }, 555);


            } else {

               card.querySelector('.card__counter').style.display = 'none';
               card.querySelector('.card__btn-basket').style.display = 'flex';
               card.querySelector('.card__btn-plus').style.display = 'none';
               card.querySelector('.card__btn-minus').style.display = 'none';
               setTimeout(() => {
                  countBasket.render()
               }, 555);



            }



         }
         if (btnPlus) {

            let card = btnPlus.closest('.card');
            card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent + 1;
            basketStorage.increment(card.getAttribute('data-id'))
            setTimeout(() => {
               countBasket.render()
            }, 555);


         }
         if (closeModelWindow) {
            modelWindow.closeWindow();

         }




      })









   }

}

let addEvents = new AddEvents()
export {
   addEvents
}