import { LabelContextProps, LabelData } from '../types'

export const createPrefixKey = (prefix: string, key: string): string =>
  [prefix, key].filter((_) => _).join('.')

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
