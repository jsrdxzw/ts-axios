import { IAxiosError, AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError implements IAxiosError {
  config: AxiosRequestConfig
  message: string
  code?: string
  name: string
  request?: XMLHttpRequest
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string,
    request?: XMLHttpRequest,
    response?: AxiosResponse,
    name: string = 'AxiosError'
  ) {
    this.code = code
    this.message = message
    this.config = config
    this.request = request
    this.name = name
    this.response = response
  }
}
