import React from 'react'

import { render } from '@testing-library/react'

import { Label } from './Label'
import { LabelContext } from './LabelContext'

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
