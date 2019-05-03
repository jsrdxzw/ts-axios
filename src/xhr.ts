import { AxiosRequestConfig, AxiosResponse, AxiosResponsePromise } from './types'
import { headers2Object } from './helpers/headers'
import { transformResponseData } from './helpers/data'

export default function(config: AxiosRequestConfig): AxiosResponsePromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data, headers, timeout, responseType } = config
    const request = new XMLHttpRequest()
    if (responseType) request.responseType = responseType
    if (timeout) {
      request.timeout = timeout
    }
    Object.keys(headers).forEach(key => {
      request.setRequestHeader(key, headers[key])
    })
    request.open(method.toUpperCase(), url, true)
    request.ontimeout = function() {
      reject(new Error(`timeout error that more than ${timeout} ms`))
    }
    request.onerror = function() {
      reject(new Error('network error'))
    }
    request.onreadystatechange = function() {
      if (request.readyState !== 4) return
      if (request.status === 0) return
      if (request.status >= 200 && request.status < 300) {
        resolve(createResponse(request, config))
      } else {
        reject(new Error(`Request failed with status code ${request.status}`))
      }
    }
    request.send(data)
  })
}

function createResponse(request: XMLHttpRequest, config: AxiosRequestConfig): AxiosResponse {
  const { responseType } = config
  return {
    status: request.status,
    data: responseType !== 'text' ? transformResponseData(request.response) : request.responseText,
    statusText: request.statusText,
    headers: headers2Object(request.getAllResponseHeaders()),
    config,
    request
  }
}
