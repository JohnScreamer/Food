class MainSlider {
   sliderMain() {
      var swiper = new Swiper(".mySwiper", {
         slidesPerView: 'auto',

         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
      });
      return swiper;

   }
}
let mainSlider = new MainSlider()
export {
   mainSlider
}