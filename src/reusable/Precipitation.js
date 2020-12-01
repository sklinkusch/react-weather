import React from 'react'
import { getPrecip, getTime } from '../components/helpers'
import { RainWarning, SnowWarning } from '../components/Warning'

const Precipitation = ({term, rain, snow, unit, time = undefined, zone = undefined}) => {
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

export default Precipitation