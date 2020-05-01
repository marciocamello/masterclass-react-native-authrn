import axios from 'axios';

const options = {
  dev: {
    baseURL: 'http://localhost:3333',
  },
  prod: {
    baseURL: 'http://localhost:3333',
  },
};

const api = axios.create(options);

export default api;
