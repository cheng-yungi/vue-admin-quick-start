import axios from 'axios';
import platformConfig from './PlatformConfig';
class AxiosConfig {
  public axios: any;
  constructor(instanse: any) {
    this.axios = instanse;
  }
  public init(): any {
    this.axios.defaults.timeout = 10000;
    this.axios.defaults.baseURL = platformConfig.baseUrl;
    axios.interceptors.request.use((config) => {
      config.headers = {
        Authorization: `${sessionStorage.getItem('token')}`,
      };
      return config;
    }, (err) => {
      return Promise.reject(err);
    });
    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      // if (error.code === 'ECONNABORTED') {
      // } else {
      // }
    });
  }
}
const t = new AxiosConfig(axios);
export default t.axios;
