import React from 'react'
import { getPrecip } from "../components/helpers"
import { PersistentPrecipWarning } from "../components/Warning"

const DailyPrecipitation = ({intensity, unit, type}) => (
  <li>
    daily precipitation: {getPrecip(24 * intensity, unit)}{" "}
    <PersistentPrecipWarning precipType={type} precipIntensity={24 * intensity} />
  </li>
)

export default DailyPrecipitation