import React from 'react'
import { getPercent } from '../components/helpers'

const PrecipProbability = ({value}) => (
  <li>
    precipitation probability: {getPercent(value)}
  </li>
)

export default PrecipProbability