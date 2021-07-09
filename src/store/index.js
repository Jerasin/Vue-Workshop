import { createStore } from "vuex";
// import actions from './modules/authen/actions'
import { authen } from "./modules/authen/index";

export default createStore({
  modules: {
    authen: authen,
  },
});
