import React from 'react'
import { getDirection } from '../components/wind'

const WindDirection = ({angle}) => (
  <li>
    wind direction: {getDirection(angle)}
  </li>
)

export default WindDirection