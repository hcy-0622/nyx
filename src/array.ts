export type TreeNode<T = Record<string, unknown>> = T & { children?: T[] }
/**
 * 将具有父子结构的对象数组转换成树形结构
 * @param array 对象数组
 * @param idAttr id属性标识
 * @param parentIdAttr parentId属性标识
 * @param rootParentIdValue 父级根节点id属性标识
 * @param extraAttrs 需要增加的额外属性
 * @returns 返回一个具有树形结构的数组
 */
export function arrayToTree<T = Record<string, unknown>>(
  array: T[],
  idAttr: keyof T,
  parentIdAttr: keyof T,
  rootParentIdValue: string | number | null,
  extraAttrs?: Record<string, keyof T>
): TreeNode<T>[] {
  const hashMap = array.reduce<Record<string, T>>((preVal, curVal) => {
    const id = curVal[idAttr] as unknown
    preVal[id as keyof typeof preVal] = curVal
    return preVal
  }, Object.create(null))

  const result = array.reduce<TreeNode<T>[]>((preVal, curVal) => {
    const pid = curVal[parentIdAttr] as unknown
    // 额外添加的字段
    if (extraAttrs) {
      Object.keys(extraAttrs).forEach((attr) => {
        curVal[attr as keyof typeof curVal] = curVal[extraAttrs[attr]]
      })
    }
    const parent: TreeNode<T> = hashMap[pid as keyof typeof hashMap]
    if (parent) {
      parent.children
        ? parent.children.push(curVal)
        : (parent.children = [curVal])
    } else if (pid === rootParentIdValue) {
      preVal.push(curVal)
    }
    return preVal
  }, [])

  return result
}
