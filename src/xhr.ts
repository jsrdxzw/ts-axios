import { AxiosRequestConfig } from './types'

export default function(config: AxiosRequestConfig) {
  const { url, method = 'get', data, headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(key => {
    request.setRequestHeader(key, headers[key])
  })
  request.send(data)
}
