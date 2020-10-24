import React from 'react'
import { getTime } from '../components/helpers'
import { WindWarning } from '../components/Warning'
import { getBeaufort, getVelocity } from '../components/wind'

const WindSpeed = ({term, speed, unit, time = undefined}) => {
  if(time){
    return (
      <li>
        {term}: {getBeaufort(speed)} ({getVelocity(speed, unit)}){" "}
        at {getTime(time).substr(11)}{" "}<WindWarning velocity={speed} />
      </li>
    ) 
  }
    return (
      <li>
        {term}: {getBeaufort(speed)} ({getVelocity(speed, unit)}){" "}
        <WindWarning velocity={speed} />
      </li>
    )
}

export default WindSpeed