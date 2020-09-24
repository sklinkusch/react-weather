import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getCelsius,
  getFahrenheit,
  getPercent,
  getDirection,
  getBeaufort,
  getKph,
  getMph,
  getMiles,
  getInch,
  getDate,
  getTime,
} from "./helpers"
// import "../styles/DailyItem.scss";

export default function DailyItem(props) {
  return (
    <div className="col-md-4">
      <h2>{getDate(props.data.time, props.all.timezone)}</h2>
      <div className="imag">
        <CurrentImage icon={props.data.icon} />
      </div>
      <ul>
        <li>{props.data.summary}</li>
        <li>
          maximum: {getCelsius(props.data.temperatureMax)}/
          {getFahrenheit(props.data.temperatureMax)} at{" "}
          {getTime(props.data.temperatureMaxTime, props.all.timezone)}
        </li>
        <li>
          minimum: {getCelsius(props.data.temperatureMin)}/
          {getFahrenheit(props.data.temperatureMin)} at{" "}
          {getTime(props.data.temperatureMinTime, props.all.timezone)}
        </li>
        <li>
          apparent maximum: {getCelsius(props.data.apparentTemperatureMax)}/
          {getFahrenheit(props.data.apparentTemperatureMax)} at{" "}
          {getTime(props.data.apparentTemperatureMaxTime, props.all.timezone)}
        </li>
        <li>
          apparent minimum: {getCelsius(props.data.apparentTemperatureMin)}/
          {getFahrenheit(props.data.apparentTemperatureMin)} at{" "}
          {getTime(props.data.apparentTemperatureMinTime, props.all.timezone)}
        </li>
        <li>cloud cover: {getPercent(props.data.cloudCover)}</li>
        <li>
          precipitation probability: {getPercent(props.data.precipProbability)}
        </li>
        <li>
          daily precipitation: {(24 * props.data.precipIntensity).toFixed(2)}{" "}
          mm/{getInch(24 * props.data.precipIntensity)}
        </li>
        <li>
          maximal precipitation: {props.data.precipIntensityMax.toFixed(2)} mm/
          {getInch(props.data.precipIntensityMax)} at{" "}
          {getTime(props.data.precipIntensityMaxTime, props.all.timezone)}
        </li>
        {props.data.precipType !== undefined && (
          <li>precipitation type: {props.data.precipType}</li>
        )}
        <li>air pressure: {props.data.pressure} mbar</li>
        <li>wind direction: {getDirection(props.data.windBearing)}</li>
        <li>
          wind speed: {getBeaufort(props.data.windSpeed)}/
          {getKph(props.data.windSpeed)}/{getMph(props.data.windSpeed)}
        </li>
        <li>
          wind gusts: {getBeaufort(props.data.windGust)}/
          {getKph(props.data.windGust)}/{getMph(props.data.windGust)} at{" "}
          {getTime(props.data.windGustTime, props.all.timezone)}
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
