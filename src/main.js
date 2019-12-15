import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import {store} from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(axios);

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.dispatch("LOGIN_FROM_STORAGE");
  }
}).$mount("#app");
