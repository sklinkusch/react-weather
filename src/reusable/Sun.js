import React from 'react'
import { getTime } from '../components/helpers'

const Sun = ({term, time, zone}) => (
  <li>
    {term} {getTime(time, zone).substr(11)}
  </li>
)

export default Sun