import { server } from "../constatns";
import { httpClient } from "./httpClient";
// import router from "@/router/index";

export const getProducts = async () => {
  try {
    return await httpClient.get(server.GET_PRODUCT_URL);
  } catch (err) {
    localStorage.clear();
    console.log(err);
  }
};

export const getProductById = async (id) => {
  try {
    return await httpClient.post(`${server.GET_PRODUCTBYID_URL}/${id}`);
  } catch (err) {
    localStorage.clear();
    console.log(err);
  }
};

export const createProduct = async (form) => {
  try {
    return await httpClient.post(server.CREATE_PRODUCT_URL, form);

    // ? Check Data from formData
    // for (let value of form.values()) {
    //     console.log(value);
    //   }
  } catch (err) {
    // router.push("/stock");
    localStorage.clear();
    console.log(err);
  }
};


export const updatedProductById = async (form,id) => {
  try {
    return await httpClient.put(`${server.UPDATE_PRODUCTBYID_URL}/${id}` , form);
  } catch (err) {
    localStorage.clear();
    console.log(err);
  }
};

export const deleteProduct = async (id) => {
  try {
    return await httpClient.delete(`${server.DELETE_PRODUCT_URL}/${id}`);
  } catch (err) {
    localStorage.clear();
    console.log(err);
  }
};
