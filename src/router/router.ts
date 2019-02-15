import Vue from 'vue';
import Router from 'vue-router';
import routes from './mainRouter';

Vue.use(Router);

export default new Router({
  base: '/',
  routes: routes.defaultRoutes,
});
