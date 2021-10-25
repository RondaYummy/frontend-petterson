import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import moment from "moment";
import router from './router'

Vue.config.productionTip = false
Vue.filter('dateFormat', (v) => {
  return moment(v).format('dd/MM/YY HH:mm');
});

import "@/assets/style/global.css"; // Global styles

new Vue({
  router,
  render: h => h(App),
  vuetify,
}).$mount('#app')
