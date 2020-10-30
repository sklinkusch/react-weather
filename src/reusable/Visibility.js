import React from 'react'
import { getLength } from '../components/helpers'
import { FogWarning } from '../components/Warning'

const Visibility = ({visibility, unit}) => (
  <li>
    visibility: {getLength(visibility, unit)}{" "}
    <FogWarning visibility={visibility} />
  </li>
)

export default Visibility