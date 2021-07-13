import actions from "./stock.actions";
import mutations from './stock.mutations'
export const stock = {
  state: () => ({
    isGet: null,
    isCreate: null,
    isFetching_STOCK: false,
    isError: false,
  }),
  mutations,
  actions,
};
