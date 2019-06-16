import { isObject } from './util'

export function transformRequestData(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponseData(data?: any): object {
  if (!data) return data
  if (typeof data === 'string') {
    try {
      return JSON.parse(data)
    } catch (e) {
      console.log(`tangyuefan:${e.message}`)
    }
  }
  return data
}
