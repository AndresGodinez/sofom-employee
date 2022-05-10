import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from "axios";
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import VModal from 'vue-js-modal'



Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

const optionsSweetAlert = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, optionsSweetAlert);
Vue.use(VModal);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
