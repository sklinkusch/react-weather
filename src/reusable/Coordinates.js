import React from 'react'
import { getCoordinates } from '../components/helpers'

const Coordinates = ({lat, lng}) => (
  <li>
    geocoordinates: {getCoordinates(lat, "lat")}, {getCoordinates(lng, "lng")}
  </li>
)

export default Coordinates