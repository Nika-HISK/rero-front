import axios from 'axios';
import getToken from './getToken';

const BaseApi = axios.create({
  baseURL: 'https://back.reroapp.ge',
});

BaseApi.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken(); 
      console.log(token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error in request interceptor:', error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default BaseApi;
