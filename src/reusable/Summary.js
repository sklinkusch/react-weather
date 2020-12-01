import React from 'react'
import { OtherWarning } from '../components/Warning'

const Summary = ({summary, id, icon, temperature, precipIntensity}) => {
  return (
  <li>
    {summary} <OtherWarning id={id} summary={summary} temperature={temperature} precipIntensity={precipIntensity} />
  </li>
)}

export default Summary