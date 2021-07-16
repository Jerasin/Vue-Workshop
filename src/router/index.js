import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Report from "@/views/Report.vue";
import About from "@/views/About.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";
import Users from "@/views/Users.vue";
import Sell from '@/views/Sell.vue';


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { isSecured: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { isSecured: false },
  },
  {
    path: "/about",
    meta: { isSecured: true },
    name: "About",
    component: About,
  },
  {
    path: "/report",
    meta: { isSecured: true },
    name: "Report",
    component: Report,
  },
  {
    path: "/stock",
    meta: { isSecured: true },
    name: "Stock",
    component: Stock,
  },
  {
    path: "/stock-create",
    meta: { isSecured: true },
    name: "StockCreate",
    component: StockCreate,
  },
  {
    path: "/stock-edit/:id",
    meta: { isSecured: true },
    name: "StockEdit",
    component: StockEdit,
  },
  {
    path: "/users",
    meta: { isSecured: true },
    name: "Users",
    component: Users,
  },
  {
    path: "/sell",
    meta: { isSecured: true },
    name: "Sell",
    component: Sell,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// ? Logic เช็คว่า Private Route หรือ Public Route
router.beforeEach((to, from, next) => {
  if (to.meta.isSecured && !localStorage.getItem("token")) {
    next("/login");
  } else if (!to.meta.isSecured && localStorage.getItem("token")) {
    next("/stock");
  } else {
    next();
  }
});

export default router;
