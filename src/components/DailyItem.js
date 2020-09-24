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
  getMoonPhase,
} from "./helpers"
// import "../styles/DailyItem.scss";

export default function DailyItem({ data, all }) {
  const {
    time,
    icon,
    summary,
    temperatureMax,
    temperatureMaxTime,
    temperatureMin,
    temperatureMinTime,
    apparentTemperatureMax,
    apparentTemperatureMaxTime,
    apparentTemperatureMin,
    apparentTemperatureMinTime,
    cloudCover,
    precipIntensity,
    precipIntensityMax,
    precipIntensityMaxTime,
    precipProbability,
    precipType,
    pressure,
    windBearing,
    windGust,
    windGustTime,
    windSpeed,
    humidity,
    dewPoint,
    visibility,
    uvIndex,
    moonPhase,
  } = data
  const { timezone, latitude } = all
  return (
    <div className="col-md-4">
      <h2>{getDate(time, timezone)}</h2>
      <div className="imag">
        <CurrentImage icon={icon} />
      </div>
      <ul>
        <li>{summary}</li>
        <li>
          maximum: {getCelsius(temperatureMax)}/{getFahrenheit(temperatureMax)}{" "}
          at {getTime(temperatureMaxTime, timezone)}
        </li>
        <li>
          minimum: {getCelsius(temperatureMin)}/{getFahrenheit(temperatureMin)}{" "}
          at {getTime(temperatureMinTime, timezone)}
        </li>
        <li>
          apparent maximum: {getCelsius(apparentTemperatureMax)}/
          {getFahrenheit(apparentTemperatureMax)} at{" "}
          {getTime(apparentTemperatureMaxTime, timezone)}
        </li>
        <li>
          apparent minimum: {getCelsius(apparentTemperatureMin)}/
          {getFahrenheit(apparentTemperatureMin)} at{" "}
          {getTime(apparentTemperatureMinTime, timezone)}
        </li>
        <li>cloud cover: {getPercent(cloudCover)}</li>
        <li>precipitation probability: {getPercent(precipProbability)}</li>
        <li>
          daily precipitation: {(24 * precipIntensity).toFixed(2)} mm/
          {getInch(24 * precipIntensity)}
        </li>
        <li>
          maximal precipitation: {precipIntensityMax.toFixed(2)} mm/
          {getInch(precipIntensityMax)} at{" "}
          {getTime(precipIntensityMaxTime, timezone)}
        </li>
        {precipType !== undefined && <li>precipitation type: {precipType}</li>}
        <li>air pressure: {pressure} mbar</li>
        <li>wind direction: {getDirection(windBearing)}</li>
        <li>
          wind speed: {getBeaufort(windSpeed)}/{getKph(windSpeed)}/
          {getMph(windSpeed)}
        </li>
        <li>
          wind gusts: {getBeaufort(windGust)}/{getKph(windGust)}/
          {getMph(windGust)} at {getTime(windGustTime, timezone)}
        </li>
        <li>relative humidity: {getPercent(humidity)}</li>
        <li>
          dew point: {getCelsius(dewPoint)}/{getFahrenheit(dewPoint)}
        </li>
        <li>
          visibility: {visibility.toFixed(1)} km/
          {getMiles(visibility)}
        </li>
        <li>UV index: {uvIndex}</li>
        <li>lunar phase: {getMoonPhase(moonPhase, latitude)}</li>
      </ul>
    </div>
  )
}
