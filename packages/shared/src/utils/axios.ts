import axios from 'axios';

export const http = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  // headers: {
  //   Version: '1.0',
  //   clientId: 'ABC', // 샘플 key
  //   platform: 'PC',
  // },
});
