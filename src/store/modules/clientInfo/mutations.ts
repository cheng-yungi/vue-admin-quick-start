import {
  SET_AGENT_ACCOUNT, SET_DETAIL, SET_TOTAL_BALANCE, SET_CLIENT_INFO_IS_FETCHING,
} from '@/store/types';

export const mutations = {
  [SET_AGENT_ACCOUNT]: (state: ClientInfoState, agentAccount: string) => {
    state.agentAccount = agentAccount;
  },
  [SET_DETAIL]: (state: ClientInfoState, detail: ClientDetail[]) => {
    state.detail = detail;
  },
  [SET_CLIENT_INFO_IS_FETCHING]: (state: ClientInfoState, isFetching: boolean) => {
    state.isFetching = isFetching;
  },
  [SET_TOTAL_BALANCE]: (state: ClientInfoState, totalBalance: number) => {
    state.totalBalance = totalBalance;
  },
};
