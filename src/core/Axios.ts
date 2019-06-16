import { AxiosRequestConfig, AxiosResponsePromise, Method } from '../types'
import dispatchRequest from './dispatchRequest'


export default class Axios {

  /**
   * 重载的一种思路的实现
   * @param url
   * @param config
   */
  request(url: any, config: AxiosRequestConfig = {}): AxiosResponsePromise {
    if (typeof url === 'string') {
      config.url = url
    } else {
      config = url
    }
    return dispatchRequest(config) as AxiosResponsePromise
  }

  get(url: string, config?: AxiosRequestConfig): AxiosResponsePromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosResponsePromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosResponsePromise {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosResponsePromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, config?: AxiosRequestConfig, data?: any): AxiosResponsePromise {
    return this._requestMethodWithData('post', url, config, data)
  }

  put(url: string, config?: AxiosRequestConfig, data?: any): AxiosResponsePromise {
    return this._requestMethodWithData('put', url, config, data)
  }

  patch(url: string, config?: AxiosRequestConfig, data?: any): AxiosResponsePromise {
    return this._requestMethodWithData('patch', url, config, data)
  }

  private _requestMethodWithoutData(method: Method, url: string, config: AxiosRequestConfig = {}) {
    return this.request(Object.assign(config, {
      method,
      url
    }))
  }

  private _requestMethodWithData(method: Method, url: string, config: AxiosRequestConfig = {}, data?: any) {
    return this.request(Object.assign(config, {
      method,
      url,
      data
    }))
  }
}
