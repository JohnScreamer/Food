import {HEADER_BOTTOM_ROW} from '../constants/constants.js'
import {HEADER_UPPER_ROW_INPUT_CONTEINER} from '../constants/constants.js'

class HeaderInput{

   render(){
      let html=` <div class="input-decor">
                          
      <input type="text" value="Введите адрес доставки" class="header-menu__search-input">
       </div>`
      
       HEADER_BOTTOM_ROW.innerHTML=html;
   }
}
 let Headerinput = new HeaderInput();
 export {Headerinput};