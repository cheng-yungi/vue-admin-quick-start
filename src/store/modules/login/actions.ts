import axios from '../../../config/AxiosConfig';
import {
  FETCH_LOGIN,
  SET_ACCOUNT,
  SET_AUTH,
  SET_NEW_ROUTER,
  SET_ROLE,
  SET_TOKEN,
  SET_BELONG_TO,
} from '../../store-type';

export const actions = {
  [FETCH_LOGIN]({ commit }, payload: any) {
    return axios.post(`/authenticate`, payload)
      .then((res) => {
        if (res.data.status === '0') {
          const token = res.data.data.token;
          const account = res.data.data.userId;
          const auth = res.data.data.rolePermission;
          const role = res.data.data.level;
          const belongTo = res.data.data.belongTo;
          const lastLoginIp = res.data.data.lastLoginIp;
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('account', account);
          sessionStorage.setItem('auth', JSON.stringify(auth));
          sessionStorage.setItem('role', role);
          sessionStorage.setItem('belongTo', belongTo);
          sessionStorage.setItem('lastLoginIp', lastLoginIp);
          commit(SET_ACCOUNT, account);
          commit(SET_AUTH, auth);
          commit(SET_ROLE, role);
          commit(SET_TOKEN, token);
          commit(SET_BELONG_TO, belongTo);
          return 'success';
        } else {
          return 'fail';
        }
      })
      .catch((error) => {
        return error.response.status;
      });
  },
  [SET_NEW_ROUTER]({commit}, payload: any) {
    return commit(SET_NEW_ROUTER, payload);
  },
};
