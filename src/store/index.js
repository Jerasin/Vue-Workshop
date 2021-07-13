import { createStore } from "vuex";
import { authen } from "./modules/authen/index";
import {stock} from './modules/stock/index';

export default createStore({
  modules: {
    authen: authen,
    stock: stock,
  },
});
