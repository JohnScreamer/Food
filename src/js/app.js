
// import {event} from '../components/load-events.js'
// document.addEventListener('load',event.events())

// // if(window.innerWidth>1000){
// //    console.log('lol');
// // }
// console.log(document.documentElement.clientWidth,1);

// console.log(12);
// console.log(12);




// fetch('https://gist.githubusercontent.com/JohnScreamer/478608d0bf9175a04830659f8dfc73c1/raw/ec57cd0c88dbe62964253759ce902b504c4f04ed/gistfile1.txt')
// .then(respons=> respons)
// .then(data=>data.json())
// .then(data=>{
//    data.forEach(el => {
//       console.log(el.img);
//    });
// }



// )








function test(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return swiper;

}

test()

let list = document.querySelectorAll('.menu__item ')
console.log(list);

window.addEventListener('resize',e=>{
   if(window.innerWidth >768){
      list.forEach(el=>{
         el.classList.remove('swiper-slide')
      })
      
     
      return;
   
   }
 
   
   list.forEach(el=>{
      el.classList.add('swiper-slide')
   })

  
   
   
})


class Burger{

   render(){
      console.log(1);
      let window = document.querySelector(".header__burger-window")
      let btn = document.querySelector('.header-menu__burger')
      btn.addEventListener('click',(e)=>{
         window.classList.toggle('burger-activ')
      })

   }
}
let burger = new Burger()
burger.render()