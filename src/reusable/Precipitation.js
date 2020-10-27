import React from 'react'
import { getPrecip, getTime } from '../components/helpers'

const Precipitation = ({term, intensity, unit, time = undefined, zone = undefined}) => {
  if (intensity === 0){
    return ""
  }
  if (time && zone) {
    return (
      <li>
        {term}: {getPrecip(intensity, unit)} at {getTime(time, zone).substr(11)}
      </li>
    )
  }
  return (
    <li>
      {term}: {getPrecip(intensity, unit)}
    </li>
  )
}

export default Precipitation