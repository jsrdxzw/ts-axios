import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequestData } from './helpers/data'
import { processHeaders } from './helpers/headers'

function TangYueFan(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  const { url, params, data, headers = {} } = config
  config.url = buildURL(url, params)
  config.headers = processHeaders(headers, data)
  config.data = transformRequestData(data) // data被转化为json字符串
}

export default TangYueFan
