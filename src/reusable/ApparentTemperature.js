import React from 'react'
import { getTemperature } from '../components/helpers'
import { HighTemperatureWarning } from '../components/Warning'

const ApparentTemperature = ({term, temperature, unit}) => (
  <li>
    {term}: {getTemperature(temperature,unit)} <HighTemperatureWarning temperature={temperature} />
  </li>
)

export default ApparentTemperature