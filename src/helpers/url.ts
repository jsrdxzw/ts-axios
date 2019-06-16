// url编码并排除特殊字符
import { isDate, isObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/g, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/g, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
}

export function buildURL(url?: string, params?: any): string {
  // 去除url #后面的参数
  if (!url) return ''
  const indexHashMark = url.indexOf('#')
  let res: string = indexHashMark !== -1 ? url.slice(0, indexHashMark) : url
  if (!params) return res
  res += res.indexOf('?') !== -1 ? '' : '?'
  res += res.lastIndexOf('?') !== res.length - 1 ? '&' : ''
  // 处理params参数并拼接
  const values: string[] = []
  Object.keys(params).forEach(key => {
    const keyValue = processParam(key, params[key])
    keyValue && values.push(keyValue)
  })
  return res + values.join('&')
}

function processParam(key: any, val: any): string {
  if (val === null || typeof val === 'undefined') return ''
  // 数组bar:['I','am'] => bar[]=I&bar[]=am
  if (Array.isArray(val)) {
    return val.map(item => `${encode(key)}[]=${encode(item)}`).join('&')
  }
  if (isDate(val)) {
    val = val.toISOString()
    return `${encode(key)}=${encode(val)}`
  }
  if (isObject(val)) {
    val = JSON.stringify(val)
    return `${encode(key)}=${encode(val)}`
  }
  return `${encode(key)}=${encode(val)}`
}
