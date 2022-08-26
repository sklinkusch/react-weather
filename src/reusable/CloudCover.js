import React from 'react'
import { getPercent } from '../components/helpers'

export const CloudCoverDarkSky = ({value}) => (
  <li>
    cloud cover: {getPercent(value)}
  </li>
)

export const CloudCoverOWM = ({value}) => (
  <li>
    cloud cover: {`${value}%`}
  </li>
)