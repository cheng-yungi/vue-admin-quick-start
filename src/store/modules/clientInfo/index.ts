import { mutations } from './mutations';
import { actions } from './actions';

const initialState: ClientInfoState = {
  agentAccount: '无隶属代理商',
  detail: [],
  totalBalance: 0,
  isFetching: false,
};

export default {
  state: initialState,
  mutations,
  actions,
};
