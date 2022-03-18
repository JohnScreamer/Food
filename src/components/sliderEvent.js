const SLIDER__LINKS = document.querySelectorAll('.menu-active')

class SliderEvents {
   add() {
      SLIDER__LINKS.forEach(el => {

         el.addEventListener('click', e => {
            console.log('1');
            let type = el.getAttribute('data-type')
            console.log(type);
            sessionStorage.setItem('type', type)
         })
      })

   }
}

let sliderEvents = new SliderEvents()

export {
   sliderEvents
}