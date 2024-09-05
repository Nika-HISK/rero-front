import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://back.reroapp.ge',
});

// Request Interceptor
BaseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

BaseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default BaseApi;
