import React, { createContext, FunctionComponent } from 'react'

import { LabelContextProps, LabelContextProviderProps } from './types'
import { normalizeLabelData } from './utils'

export const LabelContext = createContext<LabelContextProps>({})

export const LabelContextProvider: FunctionComponent<LabelContextProviderProps> = ({
  children,
  data,
}) => (
  <LabelContext.Provider value={normalizeLabelData(data)}>
    {children}
  </LabelContext.Provider>
)

LabelContextProvider.displayName = 'LabelContextProvider'
