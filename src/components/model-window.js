const MODEL_WINDOW_CONTEINER = document.querySelector('.model-window-conteiner')

const BODY = document.querySelector("body")


class ModelWindow {

   modelMessageWindow() {
      MODEL_WINDOW_CONTEINER.style.display = 'flex';
      let HTML = `<div class="model-window">
         <img src="img/Vectorbasket.png">
         <h3>Корзина пуста</h3>
         <button>Перейти до меню</button>
         <span class="close__model-window-btn"></span>
         
      </div>`

      MODEL_WINDOW_CONTEINER.innerHTML = HTML

      BODY.style.overflow = 'hidden';


   }
   modelErrorWindow() {
      MODEL_WINDOW_CONTEINER.style.display = 'flex';
      let HTML = `<div class="model-window-error">
         <img src="img/delivery-failed.png">
         <h3>Заказ повинен бути більше 150₴</h3>
         <span class="close__model-window-btn"></span>
         
      </div>`

      MODEL_WINDOW_CONTEINER.innerHTML = HTML
      BODY.style.overflow = 'hidden';
   }

   closeWindow() {
      MODEL_WINDOW_CONTEINER.style.display = 'none';
      BODY.style.overflow = 'auto';
   }

}
let modelWindow = new ModelWindow()
export {
   modelWindow
}