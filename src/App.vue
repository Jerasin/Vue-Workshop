<template>
  <Navbar v-if="checkToken()" />
  <Content v-if="!checkToken()" />
  <Sidebar v-if="checkToken()" />
  <!-- <Footer /> -->
</template>

<script>
import Navbar from "@/components/core/Navbar";
import Sidebar from "@/components/core/Sidebar";
import Content from "@/components/core/Content";
import { useStore } from "vuex";
// import Footer from '@/components/core/Footer'
export default {
  name: "app",
  components: {
    Navbar,
    Content,
    Sidebar,
    // Footer,
  },
  setup() {
    const store = useStore();
    const checkToken =  () => {
      const token =  localStorage.getItem("token");
      if (store.state.authen.isLogin && token) {
        return true;
      } else {
        return false;
      }
    };

    return { checkToken};
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
    // console.log(this.checkToken())
    // console.log(this.$store.state.authen.isLogin);
    // console.log("token", this.token);
  },
};
</script>

<style scoped>
</style>