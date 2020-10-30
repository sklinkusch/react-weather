import React from 'react'
import { getTemperature, getTime } from "../components/helpers"
import { LowTemperatureWarning } from '../components/Warning'

const Temperature = ({term, temperature, unit, time = undefined, zone = undefined}) => {
  if(time && zone){
    return (
      <li>
        {term}: {getTemperature(temperature,unit)} at {getTime(time, zone).substr(11)} <LowTemperatureWarning temperature={temperature} />
      </li>
    )
  }
  return (
  <li>
    {term}: {getTemperature(temperature, unit)} <LowTemperatureWarning temperature={temperature} />
  </li>
)}

export default Temperature