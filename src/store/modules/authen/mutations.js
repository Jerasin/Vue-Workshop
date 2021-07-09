export default {
  SET_FETCHING(state) {
    console.log("SET_FETCHING");
    state.isFetching = true;
    state.isLogin = false;
    state.isRegister = false;
    state.isDuplicate = false;
    console.log("END_SET_FETCHING");
  },

  SET_REGISTER(state, value) {
    console.log("SET_REGISTER");
    state.isFetching = false;
    state.isLogin = false;
    state.isRegister = value;
    state.isDuplicate = false;
    console.log("END_SET_REGISTER");
  },

  SET_LOGINED_IN(state) {
    state.isFetching = false;
    state.isLogin = true;
    state.isRegister = false;
    state.isDuplicate = false;
  },

  SET_LOGOUT(state) {
    state.isFetching = false;
    state.isLogin = false;
    state.isRegister = false;
    state.isDuplicate = false;
  },
};
