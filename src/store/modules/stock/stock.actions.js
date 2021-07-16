import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updatedProductById,
} from "@/services/product.api";
import Swal from "sweetalert2";
import router from "@/router/index";

export default {
  async isCreateProduct({ commit }, { form }) {
    const result = await createProduct(form);
    // console.log(result);
    commit("SET_FETCHING_STOCK");

    // ? Check Data from formData
    // for (let value of form.values()) {
    //   console.log(value);
    // }
    // console.log(result);

    if (result.data.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Create Successfully",
      });

      commit("SET_CREATE", result);
      return router.push("/stock");
    }
    if (result.data.status === 404) {
      Swal.fire({
        icon: "warning",
        title: "Duplicate",
      });
    }
  },

  async getProducts({ commit, dispatch }) {
    const result = await getProducts();
    console.log(result);
    if (result) {
      commit("SET_GET", result);
    } else {
      commit("SET_ERROR");
      dispatch("doLogout", {});
    }
  },

  async updatedProductById({ commit, dispatch }, { form , id }) {
    const result = await updatedProductById(form , id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Edit Successfully",
      });
      commit("SET_UPDATE", result);
      return router.push("/stock");
    } else {
      commit("SET_ERROR");
      dispatch("doLogout", {});
    }
  },

  async getProductById({ commit }, { id }) {
    const result = await getProductById(id);
    console.log(result);
    if (result) {
      commit("SET_GET_BYID", result);
    } else {
      commit("SET_ERROR");
      // dispatch("doLogout", {});
    }
  },

  async deleteItem({ commit, dispatch }, { id }) {
    const result = await deleteProduct(id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Delete Successfully",
      });
      commit("SET_DELETE");
    } else {
      commit("SET_ERROR");
      dispatch("doLogout", {});
    }
  },
};
