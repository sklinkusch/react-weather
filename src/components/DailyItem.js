import React from 'react'
import CurrentImage from './CurrentImage';
import { getCelsius, getPercent, getDirection, getBeaufort, getDate } from './helpers';
// import "../styles/DailyItem.scss";

export default function DailyItem(props) {
  return (
    <div className="col-md-4">
      <h2>{getDate(props.data.time)}</h2>
      <div className="imag">
        <CurrentImage icon={props.data.icon} />
      </div>
      <ul>
        <li>{props.data.summary}</li>
        <li>maximum: {getCelsius(props.data.temperatureMax)} (feels like: {getCelsius(props.data.apparentTemperatureMax)})</li>
        <li>minimum: {getCelsius(props.data.temperatureMin)} (feels like: {getCelsius(props.data.apparentTemperatureMin)})</li>
        <li>cloud cover: {getPercent(props.data.cloudCover)}</li>
        <li>precipitation probability: {getPercent(props.data.precipProbability)}</li>
        <li>precipitation: {(24 * props.data.precipIntensity).toFixed(2)} mm/d</li>
        {props.data.precipType !== undefined && <li>precipitation type: {props.data.precipType}</li>}
        <li>air pressure: {props.data.pressure} mbar</li>
        <li>wind: {getDirection(props.data.windBearing)} {getBeaufort(props.data.windSpeed)} (gusts: {getBeaufort(props.data.windGust)})</li>
        <li>relative humidity: {getPercent(props.data.humidity)}</li>
        <li>UV index: {props.data.uvIndex}</li>
      </ul>
    </div>
  )
}