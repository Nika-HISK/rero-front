import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://back.novatori.ge',
});

export default BaseApi;
