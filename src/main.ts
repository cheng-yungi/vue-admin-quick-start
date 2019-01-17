import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {initDynamicRouteMap} from './router/index'

Vue.config.productionTip = false;

initDynamicRouteMap(router,store)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
