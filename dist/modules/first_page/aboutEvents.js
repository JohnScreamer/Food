const ABOUT__CONTEINER = document.querySelector('.about__conteiner')



class About {
   addEvent() {
      let legenda = document.querySelector('.item-slide1')
      let friday = document.querySelector('.item-slide3')
      let caribian = document.querySelector('.item-slide4')
      let oldDog = document.querySelector('.item-slide2')

      ABOUT__CONTEINER.addEventListener('mouseover', (e) => {

         let btnGroup = document.querySelector('.about__btn-groups')

         if (!e.target.closest('.about__btn-groups')) {
            if (!document.querySelector('.about__title1').classList.contains('active-title')) {
               document.querySelector('.about__title1').classList.add('active-title')
               document.querySelector('.about__text1').classList.add('active-text')
               ABOUT__CONTEINER.classList.add('bg1')
            }


         } else {
            document.querySelector('.about__title1').classList.remove('active-title')
            document.querySelector('.about__text1').classList.remove('active-text')



         }






      })
      legenda.addEventListener('mouseenter', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.add('bg2')

         document.querySelector('.about__title4').classList.add('active-title')
         document.querySelector('.about__text4').classList.add('active-text')

      })
      legenda.addEventListener('mouseleave', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.remove('bg2')

         document.querySelector('.about__title4').classList.remove('active-title')
         document.querySelector('.about__text4').classList.remove('active-text')

      })







      friday.addEventListener('mouseenter', (e) => {
         e.stopPropagation()

         ABOUT__CONTEINER.classList.add('bg3')
         document.querySelector('.about__title3').classList.add('active-title')
         document.querySelector('.about__text3').classList.add('active-text')
      })
      friday.addEventListener('mouseleave', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.remove('bg3')

         document.querySelector('.about__title3').classList.remove('active-title')
         document.querySelector('.about__text3').classList.remove('active-text')
      })





      caribian.addEventListener('mouseenter', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.add('bg4')
         document.querySelector('.about__title5').classList.add('active-title')
         document.querySelector('.about__text5').classList.add('active-text')
      })
      caribian.addEventListener('mouseleave', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.remove('bg4')

         document.querySelector('.about__title5').classList.remove('active-title')
         document.querySelector('.about__text5').classList.remove('active-text')
      })







      oldDog.addEventListener('mouseenter', (e) => {
         e.stopPropagation()
         ABOUT__CONTEINER.classList.add('bg5')

         document.querySelector('.about__title2').classList.add('active-title')
         document.querySelector('.about__text2').classList.add('active-text')
      })
      oldDog.addEventListener('mouseleave', (e) => {

         e.stopPropagation()

         ABOUT__CONTEINER.classList.remove('bg5')
         document.querySelector('.about__title2').classList.remove('active-title')
         document.querySelector('.about__text2').classList.remove('active-text')






      })



   }
}
let about = new About();
export {
   about
}