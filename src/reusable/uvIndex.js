import React from 'react'
import { UvWarning } from '../components/Warning'

const UvIndex = ({uvIndex}) => {
  const uv = Number(uvIndex.toFixed(0))
  return (
  <li>
    UV index: {uv} <UvWarning uvIndex={uv} />
  </li>
)}

export default UvIndex