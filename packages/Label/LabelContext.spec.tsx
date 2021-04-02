import React from 'react'

import { render } from '@testing-library/react'

import { Label } from './Label'
import { LabelContextProvider } from './LabelContext'

it('should render label value as expected', () => {
  const { getByText } = render(
    <LabelContextProvider data={{ foo: 'Foo' }}>
      <Label id="foo" />
    </LabelContextProvider>,
  )
  expect(getByText('Foo')).toBeInTheDocument()
})
