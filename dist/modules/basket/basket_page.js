import {
   getData
} from '../../components/getData.js'

import {
   basketStorage
} from '../../components/basketStorage.js'


const ORDER_WRAPPER = document.querySelector('.order__wrapper');
const OREDER_RECOMMENDATION = document.querySelector('.order__recommendation');
const ORDER_TOTAL_PRICE = document.querySelector('.accept-order__total-price')







class BasketdRender {
   async render() {
      let data = await getData.get()

      let basket = await basketStorage.valid()
      console.log(basket);
      let ul = '';
      basket.forEach(({
         price,
         amount,
         name,
         description,
         type,
         id,
         weight,
         img,
      }) => {

         let li = `<li class="order__item"><img class="order__img" src="${img}">
            <div class="order__body">
              <div class="order__info">
              <h2 class="order__name">${name}</h2>
              <p class="order__description">${description}</p>
              </div>
               <div class="order__nav">
               <button class="order__minus">-</button>
                     <span class="order__amount">${amount}</span>
               <button class="order__plus">+</button>
               </div>
               <span class="order__price">${price * amount} ₴</span>
               <button class="order__cansel">x</button>
               </div>
         </li>`;


         ul += li;
      });

      let HTML = `<ul class="order__all-orders">${ul}</ul>`
      ORDER_WRAPPER.innerHTML = HTML;
      let {
         totalPrice,
         totalAmout
      } = await basketStorage.getInfo()

      console.log(totalPrice,
         totalAmout);

      ORDER_TOTAL_PRICE.textContent = totalPrice + " ₴";

   }




}



const basketdRender = new BasketdRender()


export {
   basketdRender
}