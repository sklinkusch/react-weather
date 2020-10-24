import React from 'react'
import { getPercent } from '../components/helpers'

const Humidity = ({humidity}) => (
  <li>
    relative humidity: {getPercent(humidity)}
  </li>
)

export default Humidity