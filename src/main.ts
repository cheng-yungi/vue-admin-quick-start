import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import { initDynamicRouteMap } from './router/index';
import './plugins/iview';
import * as moment from 'moment';
// import moment from 'moment';
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
initDynamicRouteMap(router, store);
// 声明为 Vue 补充的东西
declare module 'vue/types/vue' {
  interface Vue {
    $moment: any;
  }
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
