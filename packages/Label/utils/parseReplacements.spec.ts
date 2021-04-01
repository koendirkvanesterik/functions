import { parseReplacements } from './parseReplacements'

it('should return string with replaced template', () => {
  expect(parseReplacements('foo {value}', { value: 'bar' })).toBe('foo bar')
})

it('should return string with original template in case replacements are not given', () => {
  expect(parseReplacements('foo {value}')).toBe('foo')
})
