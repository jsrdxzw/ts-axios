import { AxiosRequestConfig } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { processHeaders } from '../helpers/headers'
import { transformRequestData, transformResponseData } from '../helpers/data'

function dispatchRequest(config: AxiosRequestConfig) {
  processConfig(config)
  return xhr(config).then((res)=>{
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  const { url, params, data, headers = {} } = config
  config.url = buildURL(url, params)
  config.headers = processHeaders(headers, data)
  config.data = transformRequestData(data) // data被转化为json字符串
}

export default dispatchRequest
