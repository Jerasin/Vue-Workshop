import { createStore } from "vuex";
// import actions from './modules/authen/actions'
import Authen from "./modules/authen/index";

// import { register, isLogin, login, logout } from "../services/api";

export default createStore({
  state: {
    isLogin: false,
    isFetching: false,
    isRegister: null,
    isDuplicate: null,
  },
  mutations: {
    SET_FETCHING(state) {
      state.isFetching = true;
      state.isLogin = false;
      state.isRegister = false;
      state.isDuplicate = false;
    },

    SET_REGISTER(state, value) {
      state.isFetching = false;
      state.isLogin = false;
      state.isRegister = value;
      state.isDuplicate = false;
    },

    SET_LOGINED_IN(state) {
      // state.obj.isFetching = false;
      state.isLogin = true;
      // state.obj.isRegister = false;
      // state.obj.isDuplicate = false;
      // console.log(state.obj.isFetching)
    },

    SET_LOGOUT(state) {
      state.isFetching = false;
      state.isLogin = false;
      state.isRegister = false;
      state.isDuplicate = false;
    },
  },
  modules: {
    Authen,
  },
});
