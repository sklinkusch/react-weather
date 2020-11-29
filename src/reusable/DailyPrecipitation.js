import React from 'react'
import { PersistentPrecipWarning } from "../components/Warning"

const DailyPrecipitation = ({rain, snow, type}) => {
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

export default DailyPrecipitation