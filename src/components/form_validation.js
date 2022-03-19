const FORM_AREA = document.querySelector('.order-information');
const DELIVERY_INPUT1 = document.querySelector('.delivery-input1');
const DELIVERY_INPUT2 = document.querySelector('.delivery-input2');
import {
   sselect
} from "./castom-selectXDd.js";
import {
   basketStorage
} from "./basketStorage.js";

const DELIVERY_WRAPPER = document.querySelector('.order-location__wrapper');

const PAY_INFO_CONTEINER = document.querySelector('.pay-info__input-conteiner');

const PAY_INFO_INPUT1 = document.querySelector('.pay-info__input1');

const PAY_INFO_INPUT2 = document.querySelector('.pay-info__input2');

const PAY_INFO_INPUT3 = document.querySelector('.pay-info__input3');






class ValidForm {








   addEvents() {
      DELIVERY_INPUT1.addEventListener('click', e => {

         DELIVERY_WRAPPER.innerHTML = `<h3 class="order-location__subtitle">Адреса доставки</h3>
            <div class="order-location__order-adress-info">
               <input placeholder="Вкажіть вулицю *" type="text" name="streat-info"
                  class="order-location__streat-info">
               <input placeholder="Номер будинку *" type="text" maxlength="5" name="house-number"
                  class="order-location__house-number">
               <input placeholder="№ квартири" type="text" maxlength="4" name="apartment-number"
                  class="order-location__apartment-number">
               <input placeholder="Під'їзд" type="text" maxlength="3" name="porch" class="order-location__porch">
               <input placeholder="Поверх" type="text" maxlength="2" name="floor" class="order-location__floor">
               <input placeholder="Коментарій" type="text" name="comment" class="order-location__comment">
            </div>`

         sselect()
         this.valid();


      })

      DELIVERY_INPUT2.addEventListener('click', e => {
         DELIVERY_WRAPPER.innerHTML = `<div class="custom-select">
         <select class="order-location__pick-up-list-drop " value="" name="restaurants" id="restaurants">
            <option>Виберіть ресторан</option>
            <option value="Старий пес">Старий пес</option>
            <option value="П'ятниця">П'ятниця</option>
            <option value="Легенда">Легенда</option>
            <option value="Малібу">Малібу ❤️</option>

         </select>
      </div>`


         sselect()
         this.valid();
      })


      PAY_INFO_INPUT1.addEventListener('click', e => {
         PAY_INFO_CONTEINER.innerHTML = `<input type="text" name="cardnum" placeholder="Номер карти"  class="pay-info__card-num">`

      })
      PAY_INFO_INPUT3.addEventListener('click', e => {
         PAY_INFO_CONTEINER.innerHTML = `<input type="text" name="banknotes" placeholder="Купюра" class="pay-info__banknotes">`;

      })
      PAY_INFO_INPUT2.addEventListener('click', e => {
         PAY_INFO_CONTEINER.innerHTML = ``;

      })

   }


   valid() {
      const allInputs = document.querySelectorAll('input')

      let placeholderText;
      allInputs.forEach(input => {
         input.addEventListener('focus', e => {
            placeholderText = input.placeholder;
            input.placeholder = "";
         })
      })

      allInputs.forEach(input => {
         input.addEventListener('blur', e => {
            input.placeholder = placeholderText;
         })
      })


   }

   async ValidAllForm() {
      const mainForm = document.forms.main;
      // console.log(mainForm.elements.phone.value);
      // console.log(mainForm.elements.name.value);

      // console.log(mainForm.elements.streatinfo.value);

      // let payType = mainForm.elements.cardnum.value || mainForm.elements.banknotes.value;

      // if (mainForm.elements.cardnum.value || false) {
      //    payType = mainForm.elements.cardnum.value
      // } else {
      //    payType = mainForm.elements.banknotes.value
      // }

      // console.log(mainForm.elements.housenumber.value);
      let regExpPhone = new RegExp(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/)

      let regExpName = new RegExp(/^[А-Яа-яёЁЇїІіЄєҐґ]+$/)

      let regCard = new RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)



      // console.log(regExpName.test('вапе'));
      // console.log(regExpPhone.test('+380500431354'));
      // console.log(regCard.test('5168'));

      // console.log(mainForm.elements.banknotes.value);

      mainForm.addEventListener("submit", function (event) {


         let valid = regCard.test(mainForm.elements.cardnum.value) && regExpPhone.test(mainForm.elements.phone.value) && regExpName.test(mainForm.elements.name.value)

         let checkForm = document.querySelector('.submit-block__checkbox')


         if (!checkForm.checked || !valid || !totalPrice > 150) {
            event.preventDefault()
         }


      })

   }




}

let validForm = new ValidForm()

export {
   validForm
}