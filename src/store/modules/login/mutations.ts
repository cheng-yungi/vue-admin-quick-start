import { SET_NEW_ROUTER, SET_ACCOUNT, SET_AUTH, SET_ROLE, SET_TOKEN, SET_BELONG_TO } from '../../store-type';

export const mutations = {
  [SET_NEW_ROUTER](state: any, newRouter: object[]) {
    state.newRouter = newRouter;
  },
  [SET_ACCOUNT](state: any, account: string) {
    state.account = account;
  },
  [SET_AUTH](state: any, auth: string[]) {
    state.auth = auth;
  },
  [SET_ROLE](state: any, role: string) {
    state.role = role;
  },
  [SET_TOKEN](state: any, token: string) {
    state.token = token;
  },
  [SET_BELONG_TO](state: any, belongTo: string) {
    state.token = belongTo;
  },
};
