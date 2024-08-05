import axios from 'axios';

const BaseApi = axios.create({
    baseURL: 'http://localhost:3001',
  });

export default BaseApi;