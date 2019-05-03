import { AxiosRequestConfig, AxiosResponse, AxiosResponsePromise } from './types'
import { headers2Object } from './helpers/headers'
import { transformResponseData } from './helpers/data'
import { AxiosError } from './helpers/error'

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
      reject(
        new AxiosError(
          `timeout error that more than ${timeout} ms`,
          config,
          'ECONNABORTED',
          request
        )
      )
    }
    request.onerror = function() {
      reject(new AxiosError('Network Error', config, undefined, request))
    }
    request.onreadystatechange = function() {
      if (request.readyState !== 4) return
      if (request.status === 0) return
      if (request.status >= 200 && request.status < 300) {
        resolve(createResponse(request, config))
      } else {
        reject(
          new AxiosError(
            `Request failed with status code ${request.status}`,
            config,
            undefined,
            request,
            createResponse(request, config)
          )
        )
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
