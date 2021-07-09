import { register, isLogin, login, logout } from "../../../services/api";
// import mutations from "./mutations";

export default {
  state() {
    return {};
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
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
  actions: {
    restoreLogin({ commit, dispatch }) {
      if (isLogin()) {
        // commit("SET_FETCHING");
        commit("SET_LOGINED_IN");
      } else {
        dispatch("doLogout", {});
      }
    },

    isRegistered({ commit }, { form }) {
      let result = register({ form });
      console.log(result);
      commit("SET_REGISTER");
      commit("SET_REGISTER", form);
    },

    async doLogin({ commit, dispatch }, { email, password }) {
      let result = await login({ email, password });
      if (result) {
        alert(result);
        commit("SET_LOGINED_IN");
      } else {
        dispatch("doLogout", {});
      }
    },

    doLogout({ commit }) {
      logout();
      commit("SET_LOGOUT");
    },
  },
};
