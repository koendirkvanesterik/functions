import { LabelContextProps, LabelData } from '../types'

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
