export default {
  SET_FETCHING(state) {
    state.isFetching = true;
    state.isError = false;
    state.isLogin = null;
    state.isRegister = null;
    state.isDuplicate = false;
  },

  SET_ERROR(state) {
    state.isError = true;
    state.isLogin = null;
    state.isRegister = null;
    state.isFetching = false;
    state.isDuplicate = false;
  },

  SET_REGISTER(state, value) {
    state.isRegister = value;
    state.isError = true;
    state.isLogin = null;
    state.isFetching = false;
    state.isDuplicate = false;
  },

  SET_LOGINED_IN(state) {
    state.isLogin = true;
    state.isRegister = null;
    state.isError = false;
    state.isFetching = false;
    state.isDuplicate = false;
  },

  SET_DUPLICATE(state) {
    state.isLogin = null;
    state.isRegister = null;
    state.isError = false;
    state.isFetching = false;
    state.isDuplicate = true;
  },

  SET_LOGOUT(state) {
    state.isLogin = null;
    state.isRegister = null;
    state.isError = false;
    state.isFetching = false;
    state.isDuplicate = false;
  },
};
