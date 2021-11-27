import { arrayToTree } from './array'

const TEST_DATA = [
  {
    id: 44,
    pid: 2,
    name: '张三',
  },
  {
    id: 77,
    pid: 2,
    name: '王五',
  },
  {
    id: 27,
    pid: 1,
    name: '赵六',
  },
  {
    id: 1,
    pid: 0,
    name: '哈哈哈',
  },
  {
    id: 2,
    pid: 0,
    name: '李四',
  },
  {
    id: 20,
    pid: 2,
    name: 'qqq',
  },
]

test('test array to array tree', () => {
  const result = arrayToTree(TEST_DATA, 'id', 'pid', 0)
  expect(result.length).toBe(2)
  expect(result.find((item) => item.name === '李四')?.children?.length).toBe(3)
})
