import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import global from './modules/global';
import security from './modules/security';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    login,
    global,
    security,
  },
});
