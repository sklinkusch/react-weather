import React from 'react'
import { getPrecip, getTime } from '../components/helpers'
import { RainWarning, SnowWarning } from '../components/Warning'

export const PrecipitationDarkSky = ({term, intensity, unit, time = undefined, zone = undefined}) => {
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

export const PrecipitationOWM = ({term, rain, snow, unit, time = undefined, zone = undefined}) => {
  if (rain > 0 && snow > 0) {
    return <React.Fragment>
      <li>
        {term} (rain): {getPrecip(rain, unit)} <RainWarning precipIntensity={rain} />
      </li>
      <li>
        {term} (snow): {getPrecip(snow, unit)} <SnowWarning />
      </li>
    </React.Fragment>
  }
  if (rain > 0) {
    return <li>
      {term} (rain): {getPrecip(rain, unit)} <RainWarning precipIntensity={rain} />
    </li>
  }
  if (snow > 0) {
    return <li>
      {term} (snow): {getPrecip(snow, unit)} <SnowWarning />
    </li>
  }
  return null
  
}
