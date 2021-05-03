import React from 'react'
import { getPercent2 } from '../components/helpers'

const PrecipProbability = ({value}) => (
  <li>
    precipitation probability: {getPercent2(value)}
  </li>
)

export default PrecipProbability