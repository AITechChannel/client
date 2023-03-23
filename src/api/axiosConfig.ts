import axios from 'axios';
import errorConstants from './constants';

export const RequestApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor

RequestApi.interceptors.request.use(
  (config) => {
    let params = config.params || {};
    // const token = getAccessToken();
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    return {
      ...config,
      params: params
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor

RequestApi.interceptors.response.use(
  (response) => response.data
  // (error) => {
  //   const status = get(error, 'response.status');
  //   const errorData = get(error, 'response.data');
  //   switch (status) {
  //     case errorConstants.StatusCode.Unauthorized: {
  //       // revokeUser();
  //       window.location.reload();
  //       break;
  //     }
  //     case errorConstants.StatusCode.ValidationFailed:
  //     case errorConstants.StatusCode.BadRequest: {
  //       return Promise.reject({ ...errorData, status });
  //     }
  //     case errorConstants.StatusCode.Forbidden: {
  //       break;
  //     }
  //     case errorConstants.StatusCode.InternalServerError: {
  //       break;
  //     }
  //     case errorConstants.StatusCode.TooManyRequests: {
  //       break;
  //     }
  //   }
  //   return Promise.reject({ ...errorData, status });
  // }
);
