import React, { FunctionComponent } from 'react'
export declare type LabelContextProps = {
  [key: string]: string
}
export declare type LabelContextProviderProps = {
  data: LabelData
}
export declare type LabelData = {
  [key: string]: LabelData | string
}
export declare type LabelProps = {
  id: string
  replacements?: LabelReplacements
}
export declare type LabelReplacements = {
  [key: string]: boolean | number | string
}
export declare const createPrefixKey: (prefix: string, key: string) => string
export declare const normalizeLabelData: (
  labelData: LabelData,
  prefix?: string,
) => LabelContextProps
export declare const parseReplacements: (
  source: string,
  replacements?: LabelReplacements,
) => string
export declare const LabelContext: React.Context<LabelContextProps>
export declare const LabelContextProvider: FunctionComponent<LabelContextProviderProps>
export declare const Label: FunctionComponent<LabelProps>
