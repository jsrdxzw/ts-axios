import { AxiosRequestConfig, AxiosResponse, AxiosResponsePromise } from './types'
import { headers2Object } from './helpers/headers'

export default function(config: AxiosRequestConfig): AxiosResponsePromise {
  return new Promise(resolve => {
    const { url, method = 'get', data, headers, responseType } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    if (responseType) request.responseType = responseType
    Object.keys(headers).forEach(key => {
      request.setRequestHeader(key, headers[key])
    })
    request.send(data)
    request.onreadystatechange = function() {
      if (request.readyState === request.DONE) {
        resolve(createResponse(request, config))
      }
    }
  })
}

function createResponse(request: XMLHttpRequest, config: AxiosRequestConfig): AxiosResponse {
  const { responseType } = config
  return {
    status: request.status,
    data: responseType !== 'text' ? request.response : request.responseText,
    statusText: request.statusText,
    headers: headers2Object(request.getAllResponseHeaders()),
    config,
    request
  }
}
