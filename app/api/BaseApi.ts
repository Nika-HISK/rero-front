import axios from 'axios';
import getToken from './getToken';

const BaseApi = axios.create({
  baseURL: 'https://back.reroapp.ge',
});

BaseApi.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default BaseApi;
