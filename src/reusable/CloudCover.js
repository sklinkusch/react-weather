import React from 'react'
import { getPercent } from '../components/helpers'

const CloudCover = ({value}) => (
  <li>
    cloud cover: {getPercent(value)}
  </li>
)

export default CloudCover