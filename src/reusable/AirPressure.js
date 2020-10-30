import React from 'react'
import {getPressure} from "../components/helpers"

const AirPressure = ({pressure, unit}) => (
  <li>
    atmospheric pressure: {getPressure(pressure, unit)}
  </li>
)

export default AirPressure