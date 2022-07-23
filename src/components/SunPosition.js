import React, { Fragment } from 'react'
import { getTime } from './helpers'
import { getSunPosition } from "./solarFunctions"

function SunPosition({lat, lng, time, zone, offset}) {
  const timeRaw = getTime(time, zone)
  const date = timeRaw.substring(0,10)
  const clock = timeRaw.substring(11,16)
  const [day, month, year] = date.split('/')
  const [hour, minute] = clock.split(':')
  const { azimuth: solarAzimuth, elevation: solarElevation } = getSunPosition(lat, lng, day, month, year, hour, minute, offset)
  return (
    <Fragment>
      <li>solar azimuth: {solarAzimuth}</li>
      <li>solar elevation: {solarElevation}</li>
    </Fragment>
  )
}

export default SunPosition