import { mutations } from './mutations';
import { actions } from './actions';

const initialState: SecurityState = {
  apiAgentPayIsLimitIp: false,
  apiAgentPayLimitIp: '',
  backendAgentPayIsLimitIp: false,
  backendAgentPayLimitIp: '',
  backendIsLimitIp: false,
  backendLimitIp: '',
  eMail: '',
  isGoogleAuthentication: false,
  isPayPw: false,
  lastLoginDate: '',
};

export default {
  state: initialState,
  mutations,
  actions,
};
