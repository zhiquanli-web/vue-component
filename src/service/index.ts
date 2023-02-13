import type { AxiosRequestConfig } from 'axios';
import IRequest from './request';
import localCache from '@/utils/localCache';

import { tokenKey } from '@/common';

const TIMEOUT = 5000;

const Request = new IRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config: AxiosRequestConfig) => {
      const token = localCache.getCache(tokenKey);
      if (token) {
        config.headers!.Authorization = token;
      }
      return config;
    }
  }
});

export default Request;
