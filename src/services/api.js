import { server } from "@/constatns";
import router from "@/router";
import {httpClient} from './httpClient';

export const login = async (value) => {
  let result = await httpClient.post(server.LOGIN_URL, value);
  // console.log(result.data.status)
  if(result.data.status === 200){
    console.log(result.data.status)
    localStorage.setItem("token" , result.data.result)
    router.push('/stock')
    return result.data.result
  }
  else{
      return alert("Error");
  }
  
};

export const register = async (value) => {
  let result = await httpClient.post(server.REGISTER_URL, value.form);
  if (result.data.status === 404) {
    return alert("Please Check Email");
  }
  if (result.data.status === 200) {
    alert(JSON.stringify(result.data));
    return router.push("/login");
  }
}

export const isLogin = () => {
  let token = localStorage.getItem("token");
  return token ;
};

export const logout = () => {
    localStorage.clear();
    router.push("/login");
}
