import axios from '../../../config/AxiosConfig';
import { Commit } from 'vuex';
import {
  FETCH_ACCOUNT_MAP,
  SET_ACCOUNT_MAP,
  FETCH_PAYTYPE_MAP,
  SET_PAYTYPE_MAP,
  SET_PAYTYPE,
  FETCH_ROUTE_MAP,
  SET_ROUTE_MAP,
  SET_ROUTE,
  SET_ROUTE_EN_MAP,
} from '@/store/types';

export const actions = {
  [FETCH_ACCOUNT_MAP](context: { commit: Commit, state: State }) {
    return new Promise((resolve, reject) => {
      if (!context.state.global.accountMap) {
        axios.get(`/api/v1/common/userIdMappingSpNameInLevelAandC`)
          .then((res: any) => {
            if (res.data.status !== '0') {
              reject('error');
            } else {
              const accountMap = res.data.data;
              context.commit(SET_ACCOUNT_MAP, accountMap);
              sessionStorage.setItem('accountMap', JSON.stringify(accountMap));
            }
            resolve('noAccountMap');
          });
      } else {
        resolve('hasAccountMap');
      }
    });
  },
  [FETCH_PAYTYPE_MAP](context: { commit: Commit, state: State }) {
    return new Promise((resolve, reject) => {
      if (!context.state.global.payTypeMap || !context.state.global.payType) {
        axios.get(`/api/v1/common/payType`)
        .then((res: any) => {
          if (res.data.status !== '0') {
            reject('error');
          } else {
            const payType: PayType[] = res.data.data;
            const payTypeMap = {};
            payType.forEach((item: PayType) => {
              payTypeMap[item.payTypeId] = item.payTypeName;
            });
            context.commit(SET_PAYTYPE_MAP, payTypeMap);
            context.commit(SET_PAYTYPE, payType);
            sessionStorage.setItem('payType', JSON.stringify(payType));
            sessionStorage.setItem('payTypeMap', JSON.stringify(payTypeMap));
          }
          resolve('noPayTypeMap');
        });
      } else {
        resolve('hasPayTypeMap');
      }
    });
  },
  [FETCH_ROUTE_MAP](context: { commit: Commit, state: State }) {
    return new Promise((resolve, reject) => {
      if (!context.state.global.routeMap) {
        axios.get(`/api/v1/route`)
        .then((res: any) => {
          if (res.data.status !== '0') {
            reject('error');
          } else {
            const route: Route[] = res.data.data;
            const routeMap = {};
            const routeEnMap = {};
            route.forEach((item: Route) => {
              routeMap[item.routeAlias] = item.routeName;
              routeEnMap[item.routeAlias] = item.routeCode;
            });
            context.commit(SET_ROUTE_MAP, routeMap);
            context.commit(SET_ROUTE, route);
            context.commit(SET_ROUTE_EN_MAP, routeEnMap);
            sessionStorage.setItem('route', JSON.stringify(route));
            sessionStorage.setItem('routeMap', JSON.stringify(routeMap));
            sessionStorage.setItem('routeEnMap', JSON.stringify(routeEnMap));
          }
          resolve('noRouteMap');
        });
      } else {
        resolve('hasRouteMap');
      }
    });
  },
};
