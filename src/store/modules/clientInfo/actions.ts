import axios from '../../../config/AxiosConfig';
import { Commit } from 'vuex';
import {
  FETCH_CLIENT_INFO, SET_CLIENT_INFO_IS_FETCHING, SET_AGENT_ACCOUNT, SET_TOTAL_BALANCE, SET_DETAIL,
} from '@/store/types';
export const actions = {
  [FETCH_CLIENT_INFO](context: { commit: Commit, state: ClientInfoState } ) {
    context.commit(SET_CLIENT_INFO_IS_FETCHING, true);
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/account/index`)
        .then((res: any) => {
          if (res.data.status !== '0') {
            reject('error');
          } else {
            const data = res.data.data;
            context.commit(SET_AGENT_ACCOUNT, data.agentAccount);
            context.commit(SET_TOTAL_BALANCE, data.totalBalance);
            context.commit(SET_DETAIL, data.detail);
            resolve('success');
          }
        })
        .catch((error: any) => {
          reject('request error');
        });
      context.commit(SET_CLIENT_INFO_IS_FETCHING, false);
    });
  },
};
