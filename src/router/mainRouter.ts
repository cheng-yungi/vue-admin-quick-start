import cIndex from '../views/client/Index.vue';
import cPayApply from '../views/client/PayApply.vue';
export default ({
  defaultRoutes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: { id: 0, icon: 'account_box' },
    },
    {
      path: '/forget',
      name: 'Forget',
      component: () => import('../views/Forget.vue'),
      meta: { id: 0, icon: 'account_box' },
    },
  ],
  mainRoutes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
      children: [
        { path: '/client/index', component: cIndex, name: '首页', meta: { id: 43, icon: 'account_box' } },
        { path: '/client/payApply', component: cPayApply, name: '收款查询', meta: { id: 44, icon: 'account_box' } },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/forget',
      name: 'Forget',
      component: () => import('../views/Forget.vue'),
    },
  ],
});
