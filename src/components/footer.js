const FOOTER_BTN = document.querySelector('.footer__button-up')
const HEADER_MENU = document.querySelector('.header-menu')

class Footer {
   addEvent() {
      FOOTER_BTN.addEventListener('click', e => {
         HEADER_MENU.scrollIntoView({
            behavior: 'smooth',
            block: 'start',

         })
      })

   }
}
let footerEvent = new Footer()
export {
   footerEvent
}