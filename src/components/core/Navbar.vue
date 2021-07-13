<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand text-light">Vue3 WorkShop</span>

      <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      <span class="nav-link tab-status active text-light"
        >User: {{ email }}</span
      >

    </div>
  </nav>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: "Navbar",
  mounted() {
      const token =  localStorage.getItem("token");
      const decode = jwt_decode(token);
      this.email = decode.email;
  },
  data() {
    return {
      email: null,
    };
  },
};
</script>

<style scoped>
.side-navbar {
  width: 180px;
  height: 100%;
  position: fixed;
  margin-left: -300px;
  background-color: #100901;
  transition: 0.5s;
}

.nav-link:active,
.nav-link:focus,
.nav-link:hover {
  background-color: #ffffff26;
}

.my-container {
  transition: 0.4s;
}

.active-nav {
  margin-left: 0;
}

/* for main section */
.active-cont {
  margin-left: 180px;
}

@media only screen and (max-width: 992px) {
  .test {
    display: block;
  }
}

@media only screen and (max-width: 458px) {
  .tab-status {
    display: none;
  }

}

</style>