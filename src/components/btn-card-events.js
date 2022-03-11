import {
   basketStorage
} from '../components/basketStorage.js'

class AddEvents {
   add() {
      document.addEventListener('click', e => {
         let btnBasket = e.target.closest('.card__btn-basket');
         let btnMinus = e.target.closest('.card__btn-minus');
         let btnPlus = e.target.closest('.card__btn-plus');

         if (btnBasket) {
            btnBasket.style.display = 'none';
            let card = btnBasket.closest('.card');
            console.log(card);
            card.querySelector('.card__btn-minus').style.display = 'block';
            card.querySelector('.card__btn-plus').style.display = 'block';
            card.querySelector('.card__counter').style.display = 'flex';
            card.querySelector('.card__counter').textContent = 1;
            basketStorage.addItem(card.getAttribute('data-id'));




         }

         if (btnMinus) {

            let card = btnMinus.closest('.card');
            basketStorage.decrement(card.getAttribute('data-id'))
            if (+card.querySelector('.card__counter').textContent > 1) {
               console.log(1);
               card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent - 1;
            } else {
               console.log(2);
               card.querySelector('.card__counter').style.display = 'none';
               card.querySelector('.card__btn-basket').style.display = 'flex';
               card.querySelector('.card__btn-plus').style.display = 'none';
               card.querySelector('.card__btn-minus').style.display = 'none';


            }


         }
         if (btnPlus) {

            let card = btnPlus.closest('.card');
            card.querySelector('.card__counter').textContent = +card.querySelector('.card__counter').textContent + 1;
            basketStorage.increment(card.getAttribute('data-id'))
         }



      })









   }

}

let addEvents = new AddEvents()
export {
   addEvents
}