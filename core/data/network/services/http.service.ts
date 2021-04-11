import IHttpService from '@core/domain/interfaces/http.interface';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';

@injectable()
class HttpService implements IHttpService {
  private client: AxiosInstance;

  private options: AxiosRequestConfig = {
    baseURL: process.env.BASE_URL,
    timeout: 60000,
  };

  constructor() {
    this.client = axios.create(this.options);

    this.client.interceptors.request.use((req) => {
      console.log(req);
      return req;
    });

    this.client.interceptors.response.use(
      (res) => {
        console.log(res);
        return res;
      },
      (err: AxiosError) => {
        console.log(err.response?.data);
        return Promise.reject(err);
      }
    );
  }

  getClient(): AxiosInstance {
    if (!this.client) {
      throw Error('Attempt to use Http Service before it was initialized');
    }
    return this.client;
  }
}

export default HttpService;
