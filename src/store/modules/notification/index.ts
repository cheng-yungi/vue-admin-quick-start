import { mutations } from './mutations';
import { actions } from './actions';

const initialState: NotificationState = {
  notifications: [],
  notification: {
    header: '',
    id: 0,
    lastEditTime: 0,
    type: '',
    content: '',
    creator: '',
    lastEditor: '',
    object: '',
    spName: '',
  },
  isFetching: false,
};

export default {
  state: initialState,
  mutations,
  actions,
};
