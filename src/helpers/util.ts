const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): boolean {
  return toString.call(val) === '[object Object]'
}

/**
 * 混合类型
 * @param from
 * @param to
 * 交叉类型，包含了T和U的所有属性
 */
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    if (from.hasOwnProperty(key)) {
      const value = from[key];
      (to as T & U)[key] = value as any
    }
  }
  return to as T & U
}
