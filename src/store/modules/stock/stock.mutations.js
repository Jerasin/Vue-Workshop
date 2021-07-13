export default {
  SET_FETCHING_STOCK(state) {
    state.isFetching_STOCK = true;
    state.isGet = null;
    state.isCreate = null;
    state.isError = false;
    state.isDelete = false;
  },

  SET_GET(state, value) {
    state.isFetching_STOCK = false;
    state.isGet = value;
    state.isCreate = null;
    state.isError = false;
    state.isDelete = false;
  },

  SET_CREATE(state, value) {
    state.isFetching_STOCK = false;
    state.isCreate = value;
    state.isError = false;
    state.isGet = null;
    state.isDelete = false;
  },

  SET_ERROR(state){
    state.isFetching_STOCK = false;
    state.isCreate = null;
    state.isError = true;
    state.isGet = null;
    state.isDelete = false;
  },

  SET_DELETE(state){
    state.isFetching_STOCK = false;
    state.isCreate = null;
    state.isError = false;
    state.isGet = null;
    state.isDelete = true;
  }
};
