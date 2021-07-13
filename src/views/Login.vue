<template>
  <div class="container-fluid">
    <div class="container-form">
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <!--Start Logo Image -->
          <div class="container-img">
            <img class="img" src="@/assets/login_header.jpg" alt="" />
            <div class="register-logo text-light">
              <b>Login</b>
            </div>
          </div>
          <!--End Logo Image -->

          <!--Start Email -->
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
        <!--End Email -->

        <!--Start Password -->
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
        <!--End Password -->

        <!--Start Button -->
        <button
          :disabled="form.password && form.email ? false : true"
          type="submit"
          class="btn btn-warning me-2"
        >
          Login
        </button>
        <router-link to="/register"
          ><button type="submit" class="btn btn-dark">
            Register
          </button></router-link
        >
        <!--End Button -->
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";

export default {
  name: "Login",
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  },
  setup() {
    const form = reactive({ email: "", password: "" });
    // const router = useRouter();
    const disabledbtn = ref(true);
    const store = useStore();

    const onSubmit = () => {
      store.dispatch({
        type: "doLogin",
        email: form.email,
        password: form.password,
      });
    };

    return { form, onSubmit, disabledbtn };
  },
};
</script>

<style scoped>
.container-form {
  margin-top: 150px;
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid gray;
  padding: 15px;
  background-color: rgb(68, 79, 91);
}

.img {
  width: 100%;
  max-width: 260px;
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