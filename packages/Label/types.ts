export type LabelContextProps = {
  /**
   * String type based key-value pairs
   */
  [key: string]: string
}

export type LabelContextProviderProps = {
  /**
   * Object of type `LabelData` containing all label data in nested structure
   */
  data: LabelData
}

export type LabelData = {
  /**
   * Nested data object containing raw label data
   */
  [key: string]: LabelData | string
}

export type LabelProps = {
  /**
   * String value representing id of label
   */
  id: string
  /**
   * Optional object of type `Replacement` holding possible replacement
   */
  replacements?: LabelReplacements
}

export type LabelReplacements = {
  /**
   * Dynamic property containing possible replacement key-value pairs within
   * label ie. {'key-to-be-replaced': 'with-value'}
   */
  [key: string]: boolean | number | string
}
