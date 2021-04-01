import { createPrefixKey, normalizeLabelData } from './normalizeLabelData'

describe('createPrefixKey', () => {
  it.each`
    input                 | output
    ${['', '']}           | ${''}
    ${['foo', '']}        | ${'foo'}
    ${['', 'foo']}        | ${'foo'}
    ${['foo', 'bar']}     | ${'foo.bar'}
    ${['foo.bar', 'baz']} | ${'foo.bar.baz'}
  `('should return "$output" as expected', ({ input, output }) => {
    expect(createPrefixKey(input[0], input[1])).toEqual(output)
  })
})

describe('normalizeLabelData', () => {
  it.each`
    input                               | output
    ${{}}                               | ${{}}
    ${{ foo: 'bar' }}                   | ${{ foo: 'bar' }}
    ${{ foo: { bar: 'baz' } }}          | ${{ 'foo.bar': 'baz' }}
    ${{ foo: { bar: { baz: 'quz' } } }} | ${{ 'foo.bar.baz': 'quz' }}
  `('should return label context props as expected', ({ input, output }) => {
    expect(normalizeLabelData(input)).toEqual(output)
  })
})
