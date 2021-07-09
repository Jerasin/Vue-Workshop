<template>
  <div class="container">
    <div class="container-form">
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <div class="container-img">
            <img
              class="img"
              src="@/assets/login_header.jpg"
              alt=""
              width="260"
            />
            <div class="register-logo text-light">
              <b>Register</b>
            </div>
          </div>
          <label for="exampleInputEmail1" class="form-label text-light fs-5"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model.trim="form.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label text-light fs-5"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model.trim="form.password"
          />
        </div>

        <button
          :disabled="form.password && form.email ? false : true"
          type="submit"
          class="btn btn-warning me-2"
        >
          Register
        </button>
        <router-link to="/"
          ><button type="submit" class="btn btn-dark">
            Cancel
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "Register",
  setup() {
    const form = reactive({ email: "", password: "" });
    const store = useStore();
    const regularEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const regularPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const onSubmit = async () => {
      if (regularEmail.test(form.email) === false) {
        return alert("Please Check Email");
      }
      if (regularPassword.test(form.password) === false) {
        return alert(
          "Please Check Minimum eight characters, at least one letter, one number and one special character:"
        );
      }

      store.dispatch({
        type: "isRegistered",
        form: form,
      });
    };

    return { form, onSubmit };
  },
};
</script>

<style scoped>
.container-form {
  margin-top: 150px;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid gray;
  padding: 15px;
  background-color: rgb(68, 79, 91);
}
.container-img {
  position: relative;
}
.register-logo {
  position: absolute;
  bottom: 0;
  z-index: 999;
}
</style>