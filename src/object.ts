/**
 * 判断一个变量是否是对象
 * @param obj 目标对象
 * @returns 返回 boolean 类型
 */
export function isObject(obj: unknown) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 判断一个对象是否是空对象
 * @param obj 目标对象
 * @returns 返回 boolean 类型
 */
export function isEmptyObject(obj: Record<string, unknown>) {
  return Object.keys(obj).length === 0
}
