import React from 'react'
import { getPercent } from '../components/helpers'

export const HumidityDarkSky = ({humidity}) => (
  <li>
    relative humidity: {getPercent(humidity)}
  </li>
)

export const HumidityOWM = ({humidity}) => (
  <li>
    relative humidity: {`${humidity}%`}
  </li>
)