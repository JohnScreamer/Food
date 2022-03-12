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
   constructor() {

   }


   async render() {


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

         let li = `<li class="order__item" data-id="${id}" ><img class="order__img" src="${img}">
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

      this.recomendation()





   }


   async recomendation() {
      let recomend = await this.renderRecommendation()
      console.log(recomend);

      let ul = '';
      recomend.forEach(({
         price,
         name,
         id,
         img,
      }) => {

         let li = `<li class="recomend__card" data-id="${id}" ><img class="recomend__img" src="${img}">
         <div class="recomend__body">       
           <h2 class="recomend__name">${name}</h2> 
            <div class="recomend__bottom"> <span class="recomend__subtitle"><span>Додати</span><button class="recomend__plus">+</button></span>              
            
            <span class="recomend__price">${price} ₴</span> </div>
            </div>
      </li>`;


         ul += li;
      });

      let HTML = `<ul class="recomend__all-recomends">${ul}</ul>`

      OREDER_RECOMMENDATION.innerHTML = HTML;
   }









   async renderRecommendation() {
      let recomendItem = []
      let data = await getData.get()
      let amoutItem = await data.length

      let arrID = await basketStorage.valid()
      let arrData = this.arrCreate(data.length);


      let arr = [...this.arrCreate(amoutItem)]


      let counter = amoutItem * 2




      while (counter > 0 && recomendItem.length !== 4) {
         let randID = this.numRandom(arr)


         let num = this.recur(data, randID);

         if (this.validItem2(num, recomendItem) && this.validItem(num, arrID)) {

            recomendItem.length < 4 ? recomendItem.push(num[0]) : false;


         }

         counter--;


      }


      return recomendItem;

   }
   recur(data, randID) {
      let respons = data.filter((el => {
         if (el.id == randID) {
            return el;
         }
      }));
      return respons;

   }



   arrCreate(a) {
      let arr = []
      let rez = a
      while (rez) {
         arr.push(rez)
            --rez
      }
      arr.reverse()
      return arr;


   }



   numRandom(arr2) {

      let ranB = arr2[Math.floor(Math.random() * arr2.length)]

      let a = arr2.filter(el => el != ranB)

      arr2 = a;

      return ranB


   }





   validItem(item, basket) {

      let rezolt = true
      basket.forEach(el => {
         if (el.id == item[0].id) {

            rezolt = false
         }
      })

      return rezolt;

   }
   validItem2(item, basket) {

      let rezolt = true
      basket.forEach(el => {

         if (el.id == item[0].id) {
            console.log(el.id, item[0].id, 999999999999999);
            rezolt = false
         }
      })

      return rezolt;

   }





}



const basketdRender = new BasketdRender()


export {
   basketdRender
}