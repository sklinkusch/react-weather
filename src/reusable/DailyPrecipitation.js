import React from 'react'
import { getPrecip } from "../components/helpers"
import { PersistentPrecipWarning } from "../components/Warning"

export const DailyPrecipitationDarkSky = ({intensity, unit, type}) => (
  <li>
    daily precipitation: {getPrecip(24 * intensity, unit)}{" "}
    <PersistentPrecipWarning precipType={type} precipIntensity={24 * intensity} />
  </li>
)

export const DailyPrecipitationOWM = ({rain, snow, type}) => {
  if(rain > 0){
    return (
      <li>
        rain: {rain} mm{" "}
        <PersistentPrecipWarning precipType="rain" precipIntensity={rain} />
      </li>
    )
  }
  if(snow > 0) {
    return (
      <li>
        snow: {snow} mm{" "}
        <PersistentPrecipWarning precipType="snow" precipIntensity={snow} />
      </li>
    )
  }
  return null
}