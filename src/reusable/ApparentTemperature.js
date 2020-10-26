import React from 'react'
import { getTemperature, getTime } from '../components/helpers'
import { HighTemperatureWarning } from '../components/Warning'

const ApparentTemperature = ({term, temperature, unit, time = undefined, zone = undefined}) => {
  if (time && zone) {
    return (
      <li>
        {term}: {getTemperature(temperature,unit)} at {getTime(time, zone).substr(11)} <HighTemperatureWarning temperature={temperature} />
      </li>
    )
  }
  return (
  <li>
    {term}: {getTemperature(temperature,unit)} <HighTemperatureWarning temperature={temperature} />
  </li>
)}

export default ApparentTemperature