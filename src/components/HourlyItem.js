import React from 'react'
import CurrentImage from './CurrentImage';
import { getCelsius, getPercent, getDirection, getBeaufort, getTime } from './helpers';
import "../styles/HourlyItem.scss";

export default function HourlyItem(props) {
  return (
    <div className="col-md-4">
      <h2>{getTime(props.data.time)}</h2>
      <div className="imag">
        <CurrentImage icon={props.data.icon} />
      </div>
      <ul>
        <li>{props.data.summary}</li>
        <li>temperature: {getCelsius(props.data.temperature)} (feels like: {getCelsius(props.data.apparentTemperature)})</li>
        <li>cloud cover: {getPercent(props.data.cloudCover)}</li>
        <li>precipitation probability: {getPercent(props.data.precipProbability)}</li>
        <li>precipitation: {props.data.precipIntensity} mm/h</li>
        {props.data.precipType !== undefined && <li>precipitation type: {props.data.precipType}</li>}
        <li>air pressure: {props.data.pressure} mbar</li>
        <li>wind: {getDirection(props.data.windBearing)} {getBeaufort(props.data.windSpeed)} (gusts: {getBeaufort(props.data.windGust)})</li>
        <li>relative humidity: {getPercent(props.data.humidity)}</li>
        <li>UV index: {props.data.uvIndex}</li>
      </ul>
    </div>
  )
}
