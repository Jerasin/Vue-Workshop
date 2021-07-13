import { register, isLogin, login, logout } from "../../../services/api";
import Swal from "sweetalert2";
import router from "@/router/index";

export default {
  restoreLogin({ commit, dispatch }) {
    if (isLogin()) {
      commit("SET_LOGINED_IN");
    } else {
      dispatch("doLogout", {});
    }
  },

  isRegistered({ commit }, { form }) {
    const result = register({ form });

    // console.log(result);

    if (result.data.status === 404) {
      Swal.fire({
        icon: "warning",
        title: "Email Duplicate",
      });
      commit("SET_DUPLICATE");
    }

    if (result.data.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
      });
      commit("SET_REGISTER", form);
      return router.push("/login");
    } else {
      commit("SET_ERROR");
      return Swal.fire({
        icon: "error",
        title: "System Error",
      });
    }
  },

  async doLogin({ commit, dispatch }, { email, password }) {
    const result = await login({ email, password });
    if (result.data.status === 200) {
       localStorage.setItem("token", result.data.result);
       commit("SET_LOGINED_IN");
       return router.push("/stock");
      // return result.data.result;
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Check Email and Password",
      });
      return  dispatch("doLogout", {});
    }
  },

  doLogout({ commit }) {
    logout();
    commit("SET_LOGOUT");
  },
};
