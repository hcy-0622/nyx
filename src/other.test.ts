import { generateClassName } from './other'

test('test generate className', () => {
  const cls = generateClassName('my-card')

  expect(cls()).toBe('my-card')
  expect(cls('header')).toBe('my-card-header')

  const cls2 = generateClassName()
  expect(cls2()).toBe('')
  expect(cls2('header')).toBe('header')
})
