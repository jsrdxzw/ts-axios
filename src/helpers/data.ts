import { isObject } from './util'

export function transformRequestData(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
