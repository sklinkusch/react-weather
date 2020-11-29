import React from 'react'
import { getTime } from '../components/helpers'
import { WindWarning } from '../components/Warning'
import { getBeaufort, getVelocity } from '../components/wind'

const WindSpeed = ({term, speed, unit, time = undefined, zone = undefined}) => {
  const speedKph = 3.6*speed
  if(time && zone){
    return (
      <li>
        {term}: {getBeaufort(speedKph)} ({getVelocity(speedKph, unit)}){" "}
        at {getTime(time, zone).substr(11)}{" "}<WindWarning velocity={speed} />
      </li>
    ) 
  }
    return (
      <li>
        {term}: {getBeaufort(speedKph)} ({getVelocity(speedKph, unit)}){" "}
        <WindWarning velocity={speedKph} />
      </li>
    )
}

export default WindSpeed