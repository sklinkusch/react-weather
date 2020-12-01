import React from 'react'
import { getTemperature } from '../components/helpers'
import { HighTemperatureWarning, LowTemperatureWarning } from '../components/Warning'

const TemperatureApparent = ({term, temp, app, unit}) => (
  <li>
    {term}: {getTemperature(temp, unit)} (feels like {getTemperature(app, unit)}) <LowTemperatureWarning temperature={temp} /><HighTemperatureWarning temperature={app} />
  </li>
)

export default TemperatureApparent