import {
  SET_NEW_ROUTER,
  SET_ACCOUNT,
  SET_AUTH,
  SET_ROLE,
  SET_TOKEN,
  SET_BELONG_TO,
  SET_LAST_LOGIN_IP,
  SET_ROLE_NAME,
} from '../../types';

export const mutations = {
  [SET_NEW_ROUTER](state: LoginState, newRouter: []) {
    state.newRouter = newRouter;
  },
  [SET_ACCOUNT](state: LoginState, account: string) {
    state.account = account;
  },
  [SET_ROLE_NAME](state: LoginState, roleName: string) {
    state.roleName = roleName;
  },
  [SET_AUTH](state: LoginState, auth: string) {
    state.auth = auth;
  },
  [SET_ROLE](state: LoginState, role: string) {
    state.role = role;
  },
  [SET_TOKEN](state: LoginState, token: string) {
    state.token = token;
  },
  [SET_BELONG_TO](state: LoginState, belongTo: string) {
    state.belongTo = belongTo;
  },
  [SET_LAST_LOGIN_IP](state: LoginState, lastLoginIp: string) {
    state.lastLoginIp = lastLoginIp;
  },
};
