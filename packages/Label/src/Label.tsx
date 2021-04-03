import React, { createContext, FunctionComponent, useContext } from 'react'

/**
 * -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------
 */

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

/**
 * -----------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------
 */

/**
 * Small util function creating a prefix key
 */
export const createPrefixKey = (prefix: string, key: string): string =>
  [prefix, key].filter((_) => _).join('.')

/**
 * Recursive util function which iterates through a nested object and flattens
 * it by creating prefix keys mapped to its label value
 */
export const normalizeLabelData = (
  labelData: LabelData,
  prefix = '',
): LabelContextProps =>
  Object.keys(labelData).reduce((labels, key) => {
    const prefixKey = createPrefixKey(prefix, key)
    const labelValue = labelData[key]

    return typeof labelValue === 'string'
      ? {
          ...labels,
          [prefixKey]: labelValue,
        }
      : {
          ...labels,
          ...normalizeLabelData(labelValue, prefixKey),
        }
  }, {})

/**
 * Replace string template with given object
 *
 * @access public
 * @param {string} source to-be-replaced template accolades and key
 * @param {object} replacements key-pair value matching key in source string
 * @return {string} string with replacements applied
 */
export const parseReplacements = (
  source: string,
  replacements: LabelReplacements = {},
): string => {
  /**
   * Remove string template if no replacements are given
   */
  if (Object.keys(replacements).length === 0) {
    return source.replace(/ {.*}/g, '')
  }
  /**
   * Loop through all given keys within object with reduce function to
   * recursively replace all string templates within source string
   */
  return Object.keys(replacements).reduce(
    (replacement, key) =>
      replacement.replace(new RegExp(`{${key}}`, 'g'), `${replacements[key]}`),
    source,
  )
}

/**
 * -----------------------------------------------------------------------------
 * Components
 * -----------------------------------------------------------------------------
 */

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

export const Label: FunctionComponent<LabelProps> = ({ id, replacements }) => {
  /**
   * Use context hook in order to get all labels from context
   */
  const labels = useContext(LabelContext)
  /**
   * Find value within labels object by given id or return id as default
   */
  const label = labels[id] ?? id
  /**
   * If replacements property is set, apply replacements and return processed
   * label with replacements object
   */
  if (replacements) {
    return <>{parseReplacements(label, replacements)}</>
  }
  /**
   * Return label as found
   */
  return <>{label}</>
}

Label.displayName = 'Label'
