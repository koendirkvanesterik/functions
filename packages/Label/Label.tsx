import React, { FunctionComponent, useContext } from 'react'

import { LabelContext } from './LabelContext'
import { LabelProps } from './types'
import { parseReplacements } from './utils'

export const Label: FunctionComponent<LabelProps> = ({ id, replacements }) => {
  /**
   * Use context hook in order to get all labels from context
   */
  const labels = useContext(LabelContext)
  /**
   * Find value within labels object by given id or return id as default
   */
  const label = labels?.[id] ?? id
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
