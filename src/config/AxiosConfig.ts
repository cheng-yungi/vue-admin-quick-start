import axios from 'axios'
import platformConfig from './PlatformConfig'
class AxiosConfg {
  axios: any;
  constructor(axios: any) {
    this.axios = axios;
  }
  init():any {
    this.axios.defaults.timeout = 10000
    this.axios.defaults.baseURL = platformConfig.baseUrl
    axios.interceptors.request.use(config => {
      config.headers = {
        'Authorization': `${sessionStorage.getItem('token')}`,
      }
      return config
    }, err => {
      return Promise.reject(err)
    })
    axios.interceptors.response.use(function (response) {
      return response
    }, error => {
      if (error.code === 'ECONNABORTED') {

      } else {

      }
    })
  }
}
export default new AxiosConfg(axios).init()