class DeliveryEvents {
   addEvents() {
      document.addEventListener('click', e => {
         let title = e.target.closest('.information-block__title')

         if (title) {
            console.log(1);
            title.closest('.information-block__wrapper').querySelector('.information-block__text').classList.toggle('text-active')

         }
      })
   }
}
let deliveryEvents = new DeliveryEvents()
export {
   deliveryEvents
}