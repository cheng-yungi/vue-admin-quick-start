import axios from '../../../config/AxiosConfig';
import { Commit } from 'vuex';
import { FETCH_SECURITY } from '@/store/types';
export const actions = {
  [FETCH_SECURITY](context: { commit: Commit, state: State } ) {
    return new Promise((resolve, reject) => {
      if (context.state.security.eMail.length === 1) {
        axios.get(`/api/v1/securityCenter`)
          .then((res: any) => {
            if (res.data.status !== '0') {
              reject('error');
            } else {
              const security = res.data.data;
              const email = security.eMail;
              if (email !== null && email.length !== 0) {
                const maxLength = email.length;
                const t = maxLength % 2;
                const x = maxLength / 2;
                const mid = t === 0 ? x : x + 1;
                const start = mid - x / 2;
                const temp = email.substring(start, start + x);
                const mock = '****';
                security.eMail = email.replace(temp, mock);
              }
              context.commit('SET_API_AGENTPAY_IS_LIMIT_IP', security.apiAgentPayLimitIp.isLimit);
              context.commit('SET_API_AGENTPAY_LIMIT_IP', security.apiAgentPayLimitIp.limitIp);
              context.commit('SET_BACKEND_AGENTPAY_IS_LIMIT_IP', security.backendAgentPayLimitIp.isLimit);
              context.commit('SET_BACKEND_AGENTPAY_LIMIT_IP', security.backendAgentPayLimitIp.limitIp);
              context.commit('SET_BACKEND_IS_LIMIT_IP', security.backendLimitIp.isLimit);
              context.commit('SET_BACKEND_LIMIT_IP', security.backendLimitIp.limitIp);
              context.commit('SET_EMAIL', security.eMail);
              context.commit('SET_IS_GOOGLE_AUTHENTICATION', security.isGoogleAuthentication);
              context.commit('SET_IS_PAYPW', security.isPayPw);
              context.commit('SET_LAST_LOGIN_DATE', security.lastLoginDate);
            }
            resolve('noSecurity');
          });
      } else {
        resolve('hasSecurity');
      }
    });
  },
};
