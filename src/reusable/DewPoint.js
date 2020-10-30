import React from 'react'
import { getTemperature } from '../components/helpers'
import { HotAndHumidWarning } from '../components/Warning'

const DewPoint = ({dewPoint, unit}) => (
  <li>
    dew point: {getTemperature(dewPoint, unit)}{" "}
    <HotAndHumidWarning temperature={dewPoint} />
  </li>
)

export default DewPoint