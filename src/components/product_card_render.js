const CARD_WRAPPER = document.querySelector('.product-card__wrapper');
const RECOMMENDATION_WRAPPER = document.querySelector('.recommendation__wrapper')
import {
   getData
} from './getData.js'

import {
   basketStorage
} from './basketStorage.js'


class ProductCard {
   async render() {
      let basket = await basketStorage.valid()
      let respons = sessionStorage.getItem('id');
      respons = JSON.parse(respons)
      let id = respons[respons.length - 1]

      let data = await getData.get()

      let cardHTML = '';
      let recomendHTML = '';
      let capacityWeight;
      let type;
      let hasInBasket = false;
      let button;

      basket.forEach(el => {
         if (el.id == respons[respons.length - 1]) {
            hasInBasket = true;
         }
      })

      if (hasInBasket) {
         button = `<button class="remove-btn">Забрати з корзини</button>`

      } else {
         button = `<button class="add-btn">Корзина</button>`
      }



      data.forEach(el => {
         if (el.id == id) {
            el.type == "drinks" ? capacityWeight = `${el.weight} Л` : capacityWeight = `Вага: ${el.weight} г`;
            type = el.type
            cardHTML = `<div class="product-card__item" data-id="${el.id}">
            <img src="${el.img}">
             <div class="item__block-info">
             <h2>${el.name}</h2>
             <p>${el.description}</p>
             <span class="item__weight">${capacityWeight}</span>
             <div class="item__bottom">
               ${button}
             <span>${el.price} ₴</span>
             </div></div>

            </div>`
         }

      });





      if (type == "drinks") {


         let recomend = data.filter(el => {
            if (el.type != type) {
               return el;
            }
         })

         let num = recomend.length

         let render = new Set()


         while (render.size < 4) {
            render.add(Math.floor(Math.random() * num))
         }
         let capacityWeight;

         Array.from(render).forEach(id => {


            let amount = 0;
            basket.forEach(basket => {

               console.log(data, 'data');
               console.log(recomend, 'recomend');
               console.log(recomend[id], 'recomendID');
               if (basket.id == recomend[id].id) {
                  amount = basket.amount;
               }
            });
            recomend[id].type == "drinks" ? capacityWeight = `${recomend[id].weight} Л` : capacityWeight = `Вага: ${recomend[id].weight} г`;
            if (amount) {
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
           <span class='card__counter' style="display: flex;" >${amount}</span>
           <a  href="product-card.html"><img class="card__img"  src="${recomend[id].img}"></a>
           <div class="card__info">
           <span class="card__name">${recomend[id].name}</span>
           <span class="card__weight">${capacityWeight}</span>        
           </div>
           <p class="card__describtion">${recomend[id].description}</p>
           <div class="card__bottom">
           <div class='card__btn-minus'  style="display: block;"></div>
           <span class="card__price">${recomend[id].price} Грн</span>
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
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
         <span class='card__counter' style="display: none;">${amount}</span>
         <a  href="product-card.html"><img class="card__img"   src="${recomend[id].img}"></a>
         <div class="card__info">
         <span class="card__name">${recomend[id].name}</span>
         <span class="card__weight">${capacityWeight}</span>        
         </div>
         <p class="card__describtion">${recomend[id].description}</p>
         <div class="card__bottom">
         <div class='card__btn-minus' style="display: none;"></div>
         <span class="card__price">${recomend[id].price} Грн</span>
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
         })







      }

      if (type == "hot-dish") {


         let recomend = data.filter(el => {
            if (el.type != type) {
               return el;
            }
         })

         let num = recomend.length

         let render = new Set()


         while (render.size < 4) {
            render.add(Math.floor(Math.random() * num))
         }
         let capacityWeight;

         Array.from(render).forEach(id => {


            let amount = 0;
            basket.forEach(basket => {

               if (basket.id == recomend[id].id) {
                  amount = basket.amount;
               }
            });
            recomend[id].type == "drinks" ? capacityWeight = `${recomend[id].weight} Л` : capacityWeight = `Вага: ${recomend[id].weight} г`;
            if (amount) {
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
           <span class='card__counter' style="display: flex;" >${amount}</span>
           <a  href="product-card.html"><img class="card__img"  src="${recomend[id].img}"></a>
           <div class="card__info">
           <span class="card__name">${recomend[id].name}</span>
           <span class="card__weight">${capacityWeight}</span>        
           </div>
           <p class="card__describtion">${recomend[id].description}</p>
           <div class="card__bottom">
           <div class='card__btn-minus'  style="display: block;"></div>
           <span class="card__price">${recomend[id].price} Грн</span>
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
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
         <span class='card__counter' style="display: none;">${amount}</span>
         <a  href="product-card.html"><img class="card__img"   src="${recomend[id].img}"></a>
         <div class="card__info">
         <span class="card__name">${recomend[id].name}</span>
         <span class="card__weight">${capacityWeight}</span>        
         </div>
         <p class="card__describtion">${recomend[id].description}</p>
         <div class="card__bottom">
         <div class='card__btn-minus' style="display: none;"></div>
         <span class="card__price">${recomend[id].price} Грн</span>
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
         })







      }
      if (type == "snack") {


         let recomend = data.filter(el => {
            if (el.type != type) {
               return el;
            }
         })

         let num = recomend.length

         let render = new Set()


         while (render.size < 4) {
            render.add(Math.floor(Math.random() * num))
         }
         let capacityWeight;

         Array.from(render).forEach(id => {


            let amount = 0;
            // basket.forEach(basket => {

            //    if (basket.id == recomend[id].id) {
            //       amount = basket.amount;
            //    }
            // });
            recomend[id].type == "drinks" ? capacityWeight = `${recomend[id].weight} Л` : capacityWeight = `Вага: ${recomend[id].weight} г`;
            if (amount) {
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
           <span class='card__counter' style="display: flex;" >${amount}</span>
           <a  href="product-card.html"><img class="card__img"  src="${recomend[id].img}"></a>
           <div class="card__info">
           <span class="card__name">${recomend[id].name}</span>
           <span class="card__weight">${capacityWeight}</span>        
           </div>
           <p class="card__describtion">${recomend[id].description}</p>
           <div class="card__bottom">
           <div class='card__btn-minus'  style="display: block;"></div>
           <span class="card__price">${recomend[id].price} Грн</span>
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
               recomendHTML += `<li class="swiper-slide card" data-id='${recomend[id].id}' data-food-type='${recomend[id].type}' >
         <span class='card__counter' style="display: none;">${amount}</span>
         <a  href="product-card.html"><img class="card__img"   src="${recomend[id].img}"></a>
         <div class="card__info">
         <span class="card__name">${recomend[id].name}</span>
         <span class="card__weight">${capacityWeight}</span>        
         </div>
         <p class="card__describtion">${recomend[id].description}</p>
         <div class="card__bottom">
         <div class='card__btn-minus' style="display: none;"></div>
         <span class="card__price">${recomend[id].price} Грн</span>
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
         })







      }
      let conteiner = `<ul class="swiper-wrapper"> ${recomendHTML}</ul>`

      RECOMMENDATION_WRAPPER.innerHTML = conteiner;


      CARD_WRAPPER.innerHTML = cardHTML;


   }

}

let productCard = new ProductCard()
export {
   productCard
}