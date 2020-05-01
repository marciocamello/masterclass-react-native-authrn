import axios from 'axios';

const url = {
  dev: {
    baseURL: 'http://localhost:3333',
  },
  prod: {
    baseURL: 'http://localhost:3333',
  },
};

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
