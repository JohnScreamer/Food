let FORM = document.querySelector('.order-information')
let H2_FORM = document.querySelector('.order-information__title')

class FormScroll {

   show() {
      FORM.style.display = 'flex';
      H2_FORM.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })

   }
}

let formScroll = new FormScroll()
export {
   formScroll
}