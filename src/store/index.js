import { createStore } from "vuex";
import { isLogin, login , logout } from "../services/api";
import { server } from "../services/constants";

export default createStore({
  state: {
    isLogined: false,
    email: "",
  },
  getters: {
    isLogin(state) {
      return state.isLogined;
    },
    email(state) {
      return state.email.split("@")[0];
    },
  },
  mutations: {
    SET_LOGINED_IN(state) {
      state.isLogined = true;
    },
    SET_LOGOUT(state) {
      state.isLogined = false;
    },
    SET_EMAIL(state, value) {
      state.email = value;
    },
  },
  actions: {
    restoreLogin({ commit }) {
      if (isLogin() == true) {
        let email = localStorage.getItem(server.EMAIL);
        commit("SET_LOGINED_IN");
        commit("SET_EMAIL", email);
      }
    },

    doLogin({ commit, dispatch }, { email }) {
      let result = login({ email });
      if (result == true) {
        commit("SET_LOGINED_IN");
        commit("SET_EMAIL", email);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      logout();
      commit("SET_LOGOUT");
      commit("SET_EMAIL", "");
    },
  },
  modules: {},
});
