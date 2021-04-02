# `@koendirkvanesterik/label`

React context based component facilitating usage of labels throughout project

```sh
npm i @koendirkvanesterik/label
```

## Usage

Most general setup

```jsx
import React from 'react'

import { Label, LabelContextProvider } from '@koendirkvanesterik/label'

export const App: FunctionComponent = () => (
  <LabelContextProvider data={{ foo: { bar: { baz: 'Hello world' } } }}>
    <Header />
  </LabelContextProvider>
)

export const Header: FunctionComponent = () => (
  <h1>
    <Label id="foo.bar.baz" />
  </h1>
)
```

In case you would like to facilitate a replacement

```jsx

...

export const App: FunctionComponent = () => (
  <LabelContextProvider data={{ temperature: 'Temperature: {value} °C' }}>
    <Temperature />
  </LabelContextProvider>
)

export const Temperature: FunctionComponent = () => (
  <p>
    <Label id="temperature" replacement={{value: '20'}} />
  </p>
)
```
