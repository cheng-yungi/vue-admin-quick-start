import {
  SET_API_AGENTPAY_IS_LIMIT_IP,
  SET_API_AGENTPAY_LIMIT_IP,
  SET_BACKEND_AGENTPAY_IS_LIMIT_IP,
  SET_BACKEND_AGENTPAY_LIMIT_IP,
  SET_BACKEND_IS_LIMIT_IP,
  SET_BACKEND_LIMIT_IP,
  SET_EMAIL,
  SET_IS_GOOGLE_AUTHENTICATION,
  SET_IS_PAYPW,
  SET_LAST_LOGIN_DATE,
} from '@/store/types';

export const mutations = {
  [SET_API_AGENTPAY_IS_LIMIT_IP]: (state: SecurityState, apiAgentPayIsLimitIp: boolean) => {
    state.apiAgentPayIsLimitIp = apiAgentPayIsLimitIp;
  },
  [SET_API_AGENTPAY_LIMIT_IP]: (state: SecurityState, apiAgentPayLimitIp: string) => {
    state.apiAgentPayLimitIp = apiAgentPayLimitIp;
  },
  [SET_BACKEND_AGENTPAY_IS_LIMIT_IP]: (state: SecurityState, backendAgentPayIsLimitIp: boolean) => {
    state.backendAgentPayIsLimitIp = backendAgentPayIsLimitIp;
  },
  [SET_BACKEND_AGENTPAY_LIMIT_IP]: (state: SecurityState, backendAgentPayLimitIp: string) => {
    state.backendAgentPayLimitIp = backendAgentPayLimitIp;
  },
  [SET_BACKEND_IS_LIMIT_IP]: (state: SecurityState, backendIsLimitIp: boolean) => {
    state.backendIsLimitIp = backendIsLimitIp;
  },
  [SET_BACKEND_LIMIT_IP]: (state: SecurityState, backendLimitIp: string) => {
    state.backendLimitIp = backendLimitIp;
  },
  [SET_EMAIL]: (state: SecurityState, eMail: string) => {
    state.eMail = eMail;
  },
  [SET_IS_GOOGLE_AUTHENTICATION]: (state: SecurityState, isGoogleAuthentication: boolean) => {
    state.isGoogleAuthentication = isGoogleAuthentication;
  },
  [SET_IS_PAYPW]: (state: SecurityState, isPayPw: boolean) => {
    state.isPayPw = isPayPw;
  },
  [SET_LAST_LOGIN_DATE]: (state: SecurityState, lastLoginDate: string) => {
    state.lastLoginDate = lastLoginDate;
  },
};
