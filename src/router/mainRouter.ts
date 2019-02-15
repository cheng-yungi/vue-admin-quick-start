import cIndex from '../views/client/Index.vue';
import cPayApply from '../views/client/PayApply.vue';
export default {
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
        {
          path: '/client/index',
          component: () => import('../views/client/Index.vue'),
          name: '首页',
          meta: { id: '43', icon: 'account_box' },
        },
        {
          path: '/client/payApply',
          component: () => import('../views/client/PayApply.vue'),
          name: '收款查询',
          meta: { id: '44', icon: 'account_box' },
        },
        {
          path: '/client/agentPay',
          component: () => import('../views/client/AgentPay.vue'),
          name: '出款查询',
          meta: { id: '45', icon: 'account_box' },
        },
        {
          path: '/client/accounting',
          component: () => import('../views/client/Accounting.vue'),
          name: '帐务总表',
          meta: { id: '46', icon: 'account_box' },
        },
        {
          path: '/client/settlement',
          component: () => import('../views/client/Settlement.vue'),
          name: '结算单记录',
          meta: { id: '47', icon: 'account_box' },
        },
        {
          path: '/client/agentPay/single',
          component: () => import('../views/client/AgentPaySingle.vue'),
          name: '单笔代付',
          meta: { id: '48', icon: 'account_box' },
        },
        {
          path: '/client/agentPay/multiple',
          component: () => import('../views/client/AgentPayMultiple.vue'),
          name: '批量代付',
          meta: { id: '49', icon: 'account_box' },
        },
        {
          path: '/client/security',
          component: () => import('../views/common/Security.vue'),
          name: '安全中心',
          meta: { id: '50', icon: 'account_box' },
        },
        {
          path: '/client/document/download',
          component: () => import('../views/client/Download.vue'),
          name: '文档下载',
          meta: { id: '51', icon: 'account_box' },
        },
        {
          path: '/client/account',
          component: () => import('../views/client/Account.vue'),
          name: '帐号管理',
          meta: { id: '52', icon: 'account_box' },
        },
      ],
    },
  ],
};
