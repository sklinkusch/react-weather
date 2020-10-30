import React from 'react'
import { getPrecip, getTime } from '../components/helpers'
import { RainWarning } from '../components/Warning'

const Precipitation = ({term, intensity, unit, time = undefined, zone = undefined}) => {
  if (intensity === 0){
    return ""
  }
  if (time && zone) {
    return (
      <li>
        {term}: {getPrecip(intensity, unit)} at {getTime(time, zone).substr(11)} <RainWarning precipIntensity={intensity} />
      </li>
    )
  }
  return (
    <li>
      {term}: {getPrecip(intensity, unit)} <RainWarning precipIntensity={intensity} />
    </li>
  )
}

export default Precipitation