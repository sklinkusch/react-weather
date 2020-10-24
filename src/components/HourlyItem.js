import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getTemperature,
  getPercent,
  getLength,
  getPrecip,
  getTime,
} from "./helpers"
import {getDirection,
  getBeaufort,
  getVelocity} from "./wind"
import "../styles/HourlyItem.scss"
import { LowTemperatureWarning, HighTemperatureWarning, RainWarning, WindWarning } from "./Warning"

export default function HourlyItem({data, all, unit}) {
  const { time, icon, summary, temperature, apparentTemperature, cloudCover, precipProbability, precipIntensity, precipType, pressure, windBearing, windSpeed, windGust, humidity, dewPoint, visibility, uvIndex } = data
  const { timezone } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getTime(time, timezone)}</h2>
      <div className="imag">
        <CurrentImage icon={icon}  style={{ fontSize: "96px" }} />
      </div>
      <ul>
        <li>{summary}</li>
        <li>
          temperature: {getTemperature(temperature, unit)}{" "}
          <LowTemperatureWarning temperature={temperature} />
        </li>
        <li>
          feels like: {getTemperature(apparentTemperature, unit)}{" "}
          <HighTemperatureWarning temperature={apparentTemperature} />
        </li>
        <li>cloud cover: {getPercent(cloudCover)}</li>
        <li>
          precipitation probability: {getPercent(precipProbability)}
        </li>
        {precipIntensity > 0 && (<li>
          hourly precipitation: {getPrecip(precipIntensity, unit)}{" "}
          <RainWarning precipIntensity={precipIntensity} />
        </li>)}
        {precipType !== undefined && (
          <li>precipitation type: {precipType}</li>
        )}
        <li>air pressure: {pressure.toFixed(1)} mbar</li>
        <li>wind direction: {getDirection(windBearing)}</li>
        <li>
          wind speed: {getBeaufort(windSpeed)} ({getVelocity(windSpeed, unit)})}{" "}
          <WindWarning velocity={windSpeed} />
        </li>
        <li>
          wind gusts: {getBeaufort(windGust)} ({getVelocity(windGust, unit)}){" "}
          <WindWarning velocity={windSpeed} />
        </li>
        <li>relative humidity: {getPercent(humidity)}</li>
        <li>
          dew point: {getTemperature(dewPoint, unit)}
        </li>
        <li>
          visibility: {getLength(visibility, unit)}
        </li>
        <li>UV index: {uvIndex}</li>
      </ul>
    </div>
  )
}
