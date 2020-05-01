import axios from 'axios';
import env from 'react-native-config';

const api = axios.create({
  baseURL: env.API_HOST,
});

export default api;
