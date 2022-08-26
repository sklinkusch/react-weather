import React from 'react'
import { getLengthDarkSky, getLengthOWM } from '../components/helpers'
import { FogWarning } from '../components/Warning'

export const VisibilityDarkSky = ({visibility, unit}) => (
  <li>
    visibility: {getLengthDarkSky(visibility, unit)}{" "}
    <FogWarning visibility={visibility} isOWM={false} />
  </li>
)

export const VisibilityOWM = ({visibility, unit}) => (
  <li>
    visibility: {getLengthOWM(visibility, unit)}{" "}
    <FogWarning visibility={visibility} idOWM={true} />
  </li>
)