# `@koendirkvanesterik/label`

React context based component facilitating usage of labels throughout project

```sh
npm i @koendirkvanesterik/label
```

## Usage

```jsx
import React from 'react'

import { Label, LabelContextProvider } from '@koendirkvanesterik/label'

export default (props) => (
  <LabelContextProvider data={{ foo: { bar: { baz: 'Hello world' } } }}>
    <Label id="foo.bar.baz" />
  </LabelContextProvider>
)
```
