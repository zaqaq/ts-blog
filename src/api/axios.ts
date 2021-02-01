import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const service: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 60000,
    withCredentials: true
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, function (error: AxiosError) {
  return Promise.reject(error)
})

service.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
}, function (error: AxiosError) {
  return Promise.reject(error);
});

export default service;

