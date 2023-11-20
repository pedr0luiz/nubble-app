import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:3333/';
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer MQ.tgAFy2h5iO_mDfwiBqb9UW5V0hLgVI77YmVxRx3eHfj_XMWm8fDh_L5Ynvic',
  },
});
