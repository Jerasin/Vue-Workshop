import actions from "./authen.actions";
import mutations from './authen.mutations'
export const authen = {
  state: () => ({
    isLogin: null,
    isError: false,
    isFetching: false,
    isRegister: null,
    isDuplicate: false,
  }),
  mutations,
  actions,
};
