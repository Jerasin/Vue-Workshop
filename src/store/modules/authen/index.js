import { register, isLogin, login, logout } from "../../../services/api";

export const authen = {
  state: () => ({
    isLogin: false,
    isFetching: false,
    isRegister: null,
    isDuplicate: null,
  }),
  mutations: {
    SET_FETCHING(state) {
      state.isFetching = true;
    },

    SET_REGISTER(state, value) {
      state.isRegister = value;
    },

    SET_LOGINED_IN(state) {
      state.isLogin = true;
    },

    SET_LOGOUT(state) {
      state.isLogin = false;
    },
  },
  actions: {
    restoreLogin({ commit, dispatch }) {
      if (isLogin()) {
        commit("SET_LOGINED_IN");
      } else {
        dispatch("doLogout", {});
      }
    },

    isRegistered({ commit }, { form }) {
      let result = register({ form });
      console.log(result);
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
