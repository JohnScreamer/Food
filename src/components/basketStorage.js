import {
   getData
} from '../components/getData.js'


class BasketStorage {






   async valid() {
      let basket = await localStorage.key('basket')
      if (!basket) {
         basket = []
         localStorage.setItem('basket', JSON.stringify(basket))
      }
      return JSON.parse(localStorage.getItem('basket'))
   }

   async addItem(id) {
      let data = await getData.get();

      let basket = await this.valid()


      data.forEach(el => {
         if (el.id == id) {
            let item = {
               ...el
            }
            item.amount = 1;



            basket.push(item)
            localStorage.setItem('basket', JSON.stringify(basket))
         }

      });


   }


   async increment(id) {
      let basket = await this.valid()
      basket = basket.map(item => {
         if (item.id == id) {
            item.amount = +item.amount + 1;

         }
         return item;
      })

      localStorage.setItem('basket', JSON.stringify(basket));
   }


   async decrement(id) {
      let basket = await this.valid()
      basket = basket.filter(item => {
         if (item.id == id) {
            if (item.amount > 1) {
               item.amount = +item.amount - 1;
               return item;
            } else {
               return;
            }



         }
         return item;
      })

      localStorage.setItem('basket', JSON.stringify(basket));


   }
   async getInfo() {
      let data = await this.valid();
      let totalPrice = 0;
      let totalAmout = 0

      data.forEach(({
         price,
         amount
      }) => {
         totalAmout += amount;
         totalPrice += price;
      })


      console.log(totalPrice,
         totalAmout);
      return {
         totalPrice,
         totalAmout
      }

   }






}




let basketStorage = new BasketStorage()
export {
   basketStorage
}