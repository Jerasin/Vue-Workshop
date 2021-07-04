import { server } from "./constants";
import router from "@/router";
export const login = (value) => {
  // let result = await httpClient.post(server.LOGIN_URL, value);
  // if(result.data.result == "ok"){
  //     localStorage.setItem(server.EMAIL,value.email)
  //     localStorage.setItem(server.TOKEN_KEY,result.data.token)
  //     router.push('/stock')
  //     return true;
  // }
  // else{
  //     return false;
  // }
  localStorage.setItem(server.EMAIL, value.email);
  localStorage.setItem(server.TOKEN_KEY, "1234");
  return true;
};

export const isLogin = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

export const logout = () => {
    localStorage.clear();
    router.push("/login");

}
