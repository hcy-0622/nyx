/**
 * 生成 CSS className
 * @param prefix 生成 CSS className 的前缀
 * @returns 返回一个函数，参数为要生成部分的 className
 */
export function generateClassName(prefix?: string) {
  return function (partCls?: string) {
    return [prefix, partCls].filter((v) => Boolean(v)).join('-')
  }
}

/**
 * 动态创建一个 a 标签去点击
 * @param url a 标签的 href 属性
 * @param isBlank 是否新窗口打开
 */
export function goLink(url: string, isBlank = false) {
  const el = document.createElement('a')
  el.href = url
  if (isBlank) el.target = '_blank'
  document.body.appendChild(el)
  el.click()
  el.remove()
}
