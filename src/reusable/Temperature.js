import React from 'react'
import { getTemperature } from "../components/helpers"
import { LowTemperatureWarning } from '../components/Warning'

const Temperature = ({term, temperature, unit}) => (
  <li>
    {term}: {getTemperature(temperature, unit)} <LowTemperatureWarning temperature={temperature} />
  </li>
)

export default Temperature