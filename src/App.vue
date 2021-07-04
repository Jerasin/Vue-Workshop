<template>
  <Navbar v-if="$store.state.isLogined" />
  <Content v-if="!$store.state.isLogined" />
  <Sidebar v-if="$store.state.isLogined" />
  <!-- <Footer /> -->
</template>

<script>
import Navbar from "@/components/core/Navbar";
import Sidebar from "@/components/core/Sidebar";
import Content from "@/components/core/Content";
// import Footer from '@/components/core/Footer'
export default {
  name: "app",
  components: {
    Navbar,
    Content,
    Sidebar,
    // Footer,
  },
  mounted(){
    this.$store.dispatch({type: "restoreLogin"})

  }
};
</script>

<style>
</style>