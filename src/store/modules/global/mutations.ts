import {
  SET_ACCOUNT_MAP,
  SET_PAYTYPE_MAP,
  SET_PAYTYPE,
  SET_ROUTE_MAP,
  SET_ROUTE_EN_MAP,
  SET_ROUTE,
  SET_BASE_URL,
} from '@/store/types';

export const mutations = {
  [SET_ACCOUNT_MAP]: (state: GlobalState, accountMap: any) => {
    state.accountMap = accountMap;
  },
  [SET_PAYTYPE_MAP]: (state: GlobalState, payTypeMap: any) => {
    state.payTypeMap = payTypeMap;
  },
  [SET_PAYTYPE]: (state: GlobalState, payType: PayType[]) => {
    state.payType = payType;
  },
  [SET_ROUTE_MAP]: (state: GlobalState, routeMap: any) => {
    state.routeMap = routeMap;
  },
  [SET_ROUTE_EN_MAP]: (state: GlobalState, routeEnMap: any) => {
    state.routeEnMap = routeEnMap;
  },
  [SET_ROUTE]: (state: GlobalState, route: Route[]) => {
    state.route = route;
  },
  [SET_BASE_URL]: (state: GlobalState, baseUrl: string) => {
    state.baseUrl = baseUrl;
  },
};
