import { server } from "@/constatns";
import router from "@/router";
import { httpClient } from "./httpClient";
// import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export const login = async (value) => {
  return await httpClient.post(server.LOGIN_URL, value);
};

export const register = async (value) => {
  return await httpClient.post(server.REGISTER_URL, value.form);
  
};

export const isLogin = () => {
  try {
    let token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    return decode;
  } catch (err) {
    return false;
  }
};

export const logout = () => {
  localStorage.clear();
  router.push("/login");
};
