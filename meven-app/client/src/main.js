import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';


//setting default vue's http modules for api calls
Vue.config.productionTip = false
//loading token from localStorage
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
//if there is any token then we will simply append default axios
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
