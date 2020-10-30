import React from 'react'
import { getTime, getTimezone } from '../components/helpers'

const CurrentTime = ({time, zone, offset}) => (
  <li>
    current time: {getTime(time, zone)} ({getTimezone(offset)})
  </li>
) 

export default CurrentTime