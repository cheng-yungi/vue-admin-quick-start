import { mutations } from './mutations';
import { actions } from './actions';
import platformConfig from '../../../config/PlatformConfig';
import aesConfig from '../../../config/AesConfig';

const initialState: GlobalState = {
  accountMap: {},
  payTypeMap: JSON.parse(sessionStorage.getItem('payTypeMap')),
  payType: JSON.parse(sessionStorage.getItem('payType')),
  routeMap: JSON.parse(sessionStorage.getItem('routeMap')),
  routeEnMap: JSON.parse(sessionStorage.getItem('routeEnMap')),
  route: JSON.parse(sessionStorage.getItem('route')),
  baseUrl: platformConfig.baseUrl,
  aesKey: aesConfig.baseAes,
  aesKeyAccName: aesConfig.jjj2,
  aesKeyAccNo: aesConfig.kkk2,
};

export default {
  state: initialState,
  mutations,
  actions,
};
