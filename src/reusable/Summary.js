import React from 'react'
import { OtherWarning } from '../components/Warning'

const Summary = ({summary, icon, temperature, precipIntensity}) => {
  return (
  <li>
    {summary} <OtherWarning summary={summary} temperature={temperature} precipIntensity={precipIntensity} />
  </li>
)}

export default Summary