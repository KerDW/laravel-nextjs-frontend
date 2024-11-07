// utils/axios.ts
import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: 'http://localhost/api/',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
});

apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken;
      config.headers['Accept'] = 'application/json'
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.defaults.withCredentials = true;


export default apiClient;