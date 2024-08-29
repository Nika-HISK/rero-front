import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://back.reroapp.ge',
});

export default BaseApi;
