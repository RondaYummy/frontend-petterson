import Axios from 'axios';
const baseConfig = {
  baseURL: `http://${process.env.NODE_ENV === 'production' ? '89.43.33.126' : 'localhost'}:3000/api`,
};

const axios = Axios.create(baseConfig);
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  }

  return config;
})

export default {
  authorization(v) {
    return axios.post('/auth/auth', v);
  },
  register(v) {
    return axios.post('/auth/register', v);
  },

};
