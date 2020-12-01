import React from 'react'
import { getPrecip } from '../components/helpers'
import { RainWarning, SnowWarning } from '../components/Warning'

const Precipitation = ({term, rain, snow, unit, time = undefined, zone = undefined}) => {
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

export default Precipitation