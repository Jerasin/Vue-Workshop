<template>
  <Navbar v-if="false" />
  <Content v-if="true" />
  <Sidebar v-if="false" />
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
};
</script>

<style>
</style>