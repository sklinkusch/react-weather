import React from 'react'
import { UvWarning } from '../components/Warning'

const UvIndex = ({uvIndex}) => (
  <li>
    UV index: {uvIndex} <UvWarning uvIndex={uvIndex} />
  </li>
)

export default UvIndex