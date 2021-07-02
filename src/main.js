import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";

// import { fa } from "@fortawesome/free-solid-svg-icons";
// library.add(fa)

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

;

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
