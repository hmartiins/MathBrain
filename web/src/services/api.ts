import axios from 'axios';

const apiConnect = axios.create({
  baseURL: 'http://localhost:3333'
});

export default apiConnect;