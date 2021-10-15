import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import OverlayScrollbarsPlugin from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars";
import Tone from "tone";

Vue.use(OverlayScrollbarsPlugin);
Vue.component("overlay-scrollbars", OverlayScrollbarsComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
