import axios from '../../../config/AxiosConfig';
import { Commit } from 'vuex';
import {
  FETCH_LOGIN,
  SET_ACCOUNT,
  SET_AUTH,
  SET_ROLE,
  SET_TOKEN,
  SET_BELONG_TO,
  SET_LAST_LOGIN_IP,
} from '@/store/types';

export const actions = {
  [FETCH_LOGIN]( context: { commit: Commit, state: LoginState } , payload: LoginForm) {
    return axios.post(`/authenticate`, payload)
      .then((res: any) => {
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
          context.commit(SET_ACCOUNT, account);
          context.commit(SET_AUTH, auth);
          context.commit(SET_ROLE, role);
          context.commit(SET_TOKEN, token);
          context.commit(SET_BELONG_TO, belongTo);
          context.commit(SET_LAST_LOGIN_IP, lastLoginIp);
          return 'success';
        } else {
          return 'fail';
        }
      })
      .catch((error) => {
        return error.response.status;
      });
  },
};
