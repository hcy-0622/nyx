import { isObject, isEmptyObject } from './object'

test('test is object', () => {
  expect(isObject(1)).toBe(false)
  expect(isObject([])).toBe(false)
  expect(isObject(() => 1)).toBe(false)
  expect(isObject({})).toBe(true)
})

test('test is empty object', () => {
  expect(isEmptyObject({})).toBe(true)
  expect(isEmptyObject({ a: 1 })).toBe(false)
})
