import React from 'react'
import { getTime, getTimezoneDarkSky, getTimezoneOWM } from '../components/helpers'

export const CurrentTimeDarksky = ({time, zone, offset}) => (
  <li>
    current time: {getTime(time, zone)} ({getTimezoneDarkSky(offset)})
  </li>
) 

export const CurrentTimeOWM = ({time, zone, offset}) => (
  <li>
    current time: {getTime(time, zone)} ({getTimezoneOWM(offset)})
  </li>
) 