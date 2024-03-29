import React from 'react'
import { getTime } from '../components/helpers'
import { WindWarning } from '../components/Warning'
import { getBeaufort, getTorro, getVelocity } from '../components/wind'

export const WindSpeedDarkSky = ({term, speed, unit, time = undefined, zone = undefined}) => {
  if(time && zone){
    return (
      <li>
        {term}: {getBeaufort(speed)} ({getVelocity(speed, unit)}){" "}
        at {getTime(time, zone).substr(11)}{" "}<WindWarning velocity={speed} />
      </li>
    ) 
  }
    return (
      <li>
        {term}: {getBeaufort(speed)}{getTorro(speed)} ({getVelocity(speed, unit)}){" "}
        <WindWarning velocity={speed} />
      </li>
    )
}

export const WindSpeedOWM = ({term, speed, unit, time = undefined, zone = undefined}) => {
  const speedKph = 3.6*speed
  if(time && zone){
    return (
      <li>
        {term}: {getBeaufort(speedKph)}{getTorro(speedKph)} ({getVelocity(speedKph, unit)}){" "}
        at {getTime(time, zone).substr(11)}{" "}<WindWarning velocity={speedKph} />
      </li>
    ) 
  }
    return (
      <li>
        {term}: {getBeaufort(speedKph)}{getTorro(speedKph)} ({getVelocity(speedKph, unit)}){" "}
        <WindWarning velocity={speedKph} />
      </li>
    )
}
