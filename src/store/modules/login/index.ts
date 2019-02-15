import { mutations } from './mutations';
import { actions } from './actions';

const initialState: LoginState = {
  newRouter: [],
  account: sessionStorage.getItem('account'),
  auth: sessionStorage.getItem('auth'),
  role: sessionStorage.getItem('role'),
  belongTo: sessionStorage.getItem('belongTo'),
  token: sessionStorage.getItem('token'),
};

export default {
  state: initialState,
  mutations,
  actions,
};
