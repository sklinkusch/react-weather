import React from 'react'
import { UvWarning } from '../components/Warning'

const UvIndex = ({uvIndex}) => (
  <li>
    UV index: {uvIndex.toFixed(0)} <UvWarning uvIndex={uvIndex.toFixed(0)} />
  </li>
)

export default UvIndex