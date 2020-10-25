import React from 'react'
import { getMoonPhase } from '../components/moon'

const LunarPhase = ({moonPhase, lat}) => (
  <li>
    lunar phase: {getMoonPhase(moonPhase,lat)}
  </li>
)

export default LunarPhase