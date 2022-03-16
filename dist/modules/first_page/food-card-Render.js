import {
   getData
} from '../../components/getData.js'

import {
   basketStorage
} from '../../components/basketStorage.js'


const SNACKS_CONTEINER = document.querySelector('.snacks__conteiner');
const HOT_MEALS_CONTEINER = document.querySelector('.hot-meals__conteiner')
const DRINKS_CONTEINER = document.querySelector('.drinks__conteiner')






class CardRender {
   async render() {
      let data = await getData.get()
      let htmlSnacks = ''
      let htmlHotMeal = ''
      let htmlDrinks = ''
      let htmlVariable;
      let basket = await basketStorage.valid()
      console.log(basket);
      let capacityWeight;

      data.forEach(el => {
         let amount = 0;
         basket.forEach(basket => {
            if (basket.id == el.id) {
               amount = basket.amount;
            }
         });
         el.type == "drinks" ? capacityWeight = `${el.weight} Л` : capacityWeight = `Вага: ${el.weight} г`;

         if (amount) {


            htmlVariable = `<li class="swiper-slide card" data-id='${el.id}' data-food-type='${el.type}' >
         <span class='card__counter' style="display: flex;" >${amount}</span>
         <img class="card__img"  src="${el.img}">
         <div class="card__info">
         <span class="card__name">${el.name}</span>
         <span class="card__weight">${capacityWeight}</span>        
         </div>
         <p class="card__describtion">${el.description}</p>
         <div class="card__bottom">
         <div class='card__btn-minus'  style="display: block;"></div>
         <span class="card__price">${el.price} Грн</span>
         <div class='card__btn-basket'  style="display: none;">В корзину <span class="card__icon"><svg width="24px" height="24px" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path d="M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path d="M11.7712 8.99583H14.082" stroke="white" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
    </svg></span></div>
         <div class='card__btn-plus'  style="display:block;"></div>
         </div>

         </li>`


         } else {

            htmlVariable = `<li class="swiper-slide card" data-id='${el.id}' data-food-type='${el.type}' >
         <span class='card__counter' style="display: none;">${amount}</span>
         <img class="card__img"  src="${el.img}">
         <div class="card__info">
         <span class="card__name">${el.name}</span>
         <span class="card__weight">${capacityWeight}</span>        
         </div>
         <p class="card__describtion">${el.description}</p>
         <div class="card__bottom">
         <div class='card__btn-minus' style="display: none;"></div>
         <span class="card__price">${el.price} Грн</span>
         <div class='card__btn-basket' display: flex;>В корзину <span class="card__icon"><svg width="24px" height="24px" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.18525 16.5169C6.53692 16.5169 6.82275 16.8028 6.82275 17.1544C6.82275 17.5061 6.53692 17.7911 6.18525 17.7911C5.83358 17.7911 5.54858 17.5061 5.54858 17.1544C5.54858 16.8028 5.83358 16.5169 6.18525 16.5169Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.5622 16.5169C15.9139 16.5169 16.1997 16.8028 16.1997 17.1544C16.1997 17.5061 15.9139 17.7911 15.5622 17.7911C15.2105 17.7911 14.9247 17.5061 14.9247 17.1544C14.9247 16.8028 15.2105 16.5169 15.5622 16.5169Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path d="M2.29156 2.70834L4.0249 3.00834L4.8274 12.5692C4.8924 13.3483 5.54323 13.9467 6.3249 13.9467H15.4182C16.1649 13.9467 16.7982 13.3983 16.9057 12.6583L17.6966 7.19334C17.7941 6.51918 17.2716 5.91584 16.5907 5.91584H4.30323"
              stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
         <path d="M11.7712 8.99583H14.082" stroke="white" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
    </svg></span></div>
         <div class='card__btn-plus' style="display: none;"></div>
         </div>

         </li>`

         }






         switch (el.type) {
            case 'drinks':

               htmlDrinks += htmlVariable
               break;

            case 'hot-dish':
               htmlHotMeal += htmlVariable
               break;

            case 'snack':
               htmlSnacks += htmlVariable

               break;

         }



      })




      let snacksUl = `<ul class="swiper-wrapper " >${htmlSnacks}</ul>`;
      let hotMealUl = `<ul class="swiper-wrapper" >${htmlHotMeal}</ul>`;
      let drinnksUl = `<ul class="swiper-wrapper" >${htmlDrinks}</ul>`;




      SNACKS_CONTEINER.innerHTML = snacksUl;
      HOT_MEALS_CONTEINER.innerHTML = hotMealUl;
      DRINKS_CONTEINER.innerHTML = drinnksUl;

   }




}



const cardRender = new CardRender()


export {
   cardRender
}