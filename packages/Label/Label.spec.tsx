import React, { FunctionComponent } from 'react'

import { render } from '@testing-library/react'

import { Label } from './Label'
import { LabelContext } from './LabelContext'

const MockedLabels: FunctionComponent = ({ children }) => (
  <LabelContext.Provider value={{ foo: 'Foo Bar' }}>
    {children}
  </LabelContext.Provider>
)

it('should render label value as expected', () => {
  const { getByText } = render(
    <MockedLabels>
      <Label id="foo" />
    </MockedLabels>,
  )
  expect(getByText('Foo Bar')).toBeInTheDocument()
})

it('should render label key in case not registered', () => {
  const { getByText } = render(
    <MockedLabels>
      <Label id="unknown" />
    </MockedLabels>,
  )
  expect(getByText(/unknown/)).toBeInTheDocument()
})
