import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css'
import Scrollspy from 'vue2-scrollspy';


Vue.config.productionTip = false;
Vue.use(Scrollspy);

const opts = {
  icons: {
      iconfont: 'mdi'
  }
} 

new Vue({
  router,
  store,
  vuetify,
  opts,
  render: h => h(App)
}).$mount("#app");
