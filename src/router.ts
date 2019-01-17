import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import routes from './router/mainRouter'

Vue.use(Router);

export default new Router({
  base: '/',
  routes: routes.defaultRoutes
});
