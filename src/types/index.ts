export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any // ajax的request对象
}

// ajax请求后返回的Promise对象
export interface AxiosResponsePromise extends Promise<AxiosResponse> {
}

export interface IAxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: XMLHttpRequest
  response?: AxiosResponse
}

export interface Axios {
  request(config: AxiosRequestConfig): AxiosResponsePromise

  get(url: string, config?: AxiosRequestConfig): AxiosResponsePromise

  delete(url: string, config?: AxiosRequestConfig): AxiosResponsePromise

  head(url: string, config?: AxiosRequestConfig): AxiosResponsePromise

  options(url: string, config?: AxiosRequestConfig): AxiosResponsePromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise
}

/**
 * 扩展接口，可以直接调用
 */
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosResponsePromise,
  (url: string, config?: AxiosRequestConfig): AxiosResponsePromise
}
