import React from 'react'

import { render } from '@testing-library/react'

import {
  createPrefixKey,
  Label,
  LabelContext,
  LabelContextProvider,
  normalizeLabelData,
  parseReplacements,
} from './Label'

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

describe('parseReplacements', () => {
  it('should return string with replaced template', () => {
    expect(parseReplacements('foo {value}', { value: 'bar' })).toBe('foo bar')
  })
  it('should return string with original template in case replacements are not given', () => {
    expect(parseReplacements('foo {value}')).toBe('foo')
  })
})

describe('Label', () => {
  it('should render label value as expected', () => {
    const { getByText } = render(
      <LabelContext.Provider value={{ foo: 'Foo' }}>
        <Label id="foo" />
      </LabelContext.Provider>,
    )
    expect(getByText('Foo')).toBeInTheDocument()
  })
  it('should render label with replacement', () => {
    const { getByText } = render(
      <LabelContext.Provider value={{ bar: 'Bar {value}' }}>
        <Label id="bar" replacements={{ value: 100 }} />
      </LabelContext.Provider>,
    )
    expect(getByText('Bar 100')).toBeInTheDocument()
  })
  it('should render label key in case not registered', () => {
    const { getByText } = render(
      <LabelContext.Provider value={{}}>
        <Label id="not.registered" />
      </LabelContext.Provider>,
    )
    expect(getByText('not.registered')).toBeInTheDocument()
  })
})

describe('LabelContextProvider', () => {
  it('should render label value as expected', () => {
    const { getByText } = render(
      <LabelContextProvider data={{ foo: 'Foo' }}>
        <Label id="foo" />
      </LabelContextProvider>,
    )
    expect(getByText('Foo')).toBeInTheDocument()
  })
})
