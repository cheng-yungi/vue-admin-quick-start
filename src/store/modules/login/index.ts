import { mutations } from './mutations';
import { actions } from './actions';

const initialState = {
  newRouter: [],
  account: sessionStorage.getItem('account'),
  auth: sessionStorage.getItem('auth'),
  role: sessionStorage.getItem('role'),
  belongTo: sessionStorage.getItem('belongTo'),
};

export default {
  state: { ...initialState },
  mutations,
  actions,
};
