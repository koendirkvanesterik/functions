import { LabelReplacements } from '../types'

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
