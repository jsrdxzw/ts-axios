import { isObject } from './util'

function normalizeName(headers: any, normalizeName: string): void {
  const key = Object.keys(headers).find(key => key.toUpperCase() === normalizeName.toUpperCase())
  if (key) {
    headers[normalizeName] = headers[key]
    delete headers[key]
  }
}

export function processHeaders(headers: any, data?: any): any {
  if (isObject(headers)) {
    normalizeName(headers, 'Content-Type')
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    // 没有body数据需要删除对应的属性
    if (!data) {
      delete headers['Content-Type']
    }
  }
  return headers
}
