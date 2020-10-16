import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getCelsius,
  getFahrenheit,
  getPercent,
  getMiles,
  getInch,
  getTime,
} from "./helpers"
import {getDirection,
  getBeaufort,
  getKph,
  getMph,} from "./wind"
import "../styles/HourlyItem.scss"

export default function HourlyItem(props) {
  return (
    <div className="col-md-4">
      <h2>{getTime(props.data.time, props.all.timezone)}</h2>
      <div className="imag">
        <CurrentImage icon={props.data.icon} />
      </div>
      <ul>
        <li>{props.data.summary}</li>
        <li>
          temperature: {getCelsius(props.data.temperature)}/
          {getFahrenheit(props.data.temperature)}
        </li>
        <li>
          feels like: {getCelsius(props.data.apparentTemperature)}/
          {getFahrenheit(props.data.apparentTemperature)}
        </li>
        <li>cloud cover: {getPercent(props.data.cloudCover)}</li>
        <li>
          precipitation probability: {getPercent(props.data.precipProbability)}
        </li>
        <li>
          hourly precipitation: {props.data.precipIntensity} mm/
          {getInch(props.data.precipIntensity)}
        </li>
        {props.data.precipType !== undefined && (
          <li>precipitation type: {props.data.precipType}</li>
        )}
        <li>air pressure: {props.data.pressure.toFixed(1)} mbar</li>
        <li>wind direction: {getDirection(props.data.windBearing)}</li>
        <li>
          wind speed: {getBeaufort(props.data.windSpeed)}/
          {getKph(props.data.windSpeed)}/{getMph(props.data.windSpeed)}
        </li>
        <li>
          wind gusts: {getBeaufort(props.data.windGust)}/
          {getKph(props.data.windGust)}/{getMph(props.data.windGust)}
        </li>
        <li>relative humidity: {getPercent(props.data.humidity)}</li>
        <li>
          dew point: {getCelsius(props.data.dewPoint)}/
          {getFahrenheit(props.data.dewPoint)}
        </li>
        <li>
          visibility: {props.data.visibility.toFixed(1)} km/
          {getMiles(props.data.visibility)}
        </li>
        <li>UV index: {props.data.uvIndex}</li>
      </ul>
    </div>
  )
}
