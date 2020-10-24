import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getTemperature,
  getPercent,
  getLength,
  getPrecip,
  getDate,
  getTime,
} from "./helpers"
import { getMoonPhase } from "./moon"
import {getDirection,
  getBeaufort,
  getVelocity} from "./wind"
import { PersistentPrecipWarning, WindWarning } from "./Warning"
// import "../styles/DailyItem.scss";

export default function DailyItem({ data, all, unit }) {
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
    sunriseTime,
    sunsetTime,
  } = data
  const { timezone, latitude } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getDate(time, timezone)}</h2>
      <div className="imag">
        <CurrentImage icon={icon} style={{ fontSize: "96px"}} />
      </div>
      <ul>
        <li>{summary}</li>
        <li>
          maximum: {getTemperature(temperatureMax, unit)}{" "}
          at {getTime(temperatureMaxTime, timezone)}
        </li>
        <li>
          minimum: {getTemperature(temperatureMin, unit)}{" "}
          at {getTime(temperatureMinTime, timezone)}
        </li>
        <li>
          apparent maximum: {getTemperature(apparentTemperatureMax, unit)} at{" "}
          {getTime(apparentTemperatureMaxTime, timezone)}
        </li>
        <li>
          apparent minimum: {getTemperature(apparentTemperatureMin, unit)} at{" "}
          {getTime(apparentTemperatureMinTime, timezone)}
        </li>
        <li>cloud cover: {getPercent(cloudCover)}</li>
        <li>precipitation probability: {getPercent(precipProbability)}</li>
        <li>
          daily precipitation: {getPrecip(24 * precipIntensity, unit)}{" "}
          <PersistentPrecipWarning precipType={precipType} precipIntensity={24 * precipIntensity} />
        </li>
        <li>
          maximal precipitation: {getPrecip(precipIntensityMax, unit)} at{" "}
          {getTime(precipIntensityMaxTime, timezone).substr(11)}
        </li>
        {precipType !== undefined && <li>precipitation type: {precipType}</li>}
        <li>air pressure: {pressure.toFixed(1)} mbar</li>
        <li>wind direction: {getDirection(windBearing)}</li>
        <li>
          wind speed: {getBeaufort(windSpeed)} ({getVelocity(windSpeed, unit)}){" "}
          <WindWarning velocity={windSpeed} />
        </li>
        <li>
          wind gusts: {getBeaufort(windGust)} ({getVelocity(windGust, unit)}) at {getTime(windGustTime, timezone).substr(11)}{" "}
          <WindWarning velocity={windGust} />
        </li>
        <li>relative humidity: {getPercent(humidity)}</li>
        <li>
          dew point: {getTemperature(dewPoint, unit)}
        </li>
        <li>
          visibility: {getLength(visibility, unit)}
        </li>
        <li>UV index: {uvIndex}</li>
        <li>sunrise at {getTime(sunriseTime, timezone).substr(11)}</li>
        <li>sunset at {getTime(sunsetTime, timezone).substr(11)}</li>
        <li>lunar phase: {getMoonPhase(moonPhase, latitude)}</li>
      </ul>
    </div>
  )
}
