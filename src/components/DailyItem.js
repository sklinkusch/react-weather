import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getTemperature,
  getPercent,
  getDate,
  getTime,
} from "./helpers"
import { LowTemperatureWarning, HighTemperatureWarning } from "./Warning"
import Sun from "../reusable/Sun"
import LunarPhase from "../reusable/LunarPhase"
import UvIndex from "../reusable/uvIndex"
import Visibility from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import Humidity from "../reusable/Humidity"
import WindSpeed from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import PrecipType from "../reusable/PrecipType"
import Precipitation from "../reusable/Precipitation"
import DailyPrecipitation from "../reusable/DailyPrecipitation"
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
          at {getTime(temperatureMaxTime, timezone)}{" "}
          <LowTemperatureWarning temperature={temperatureMax} />
        </li>
        <li>
          minimum: {getTemperature(temperatureMin, unit)}{" "}
          at {getTime(temperatureMinTime, timezone)}
        </li>
        <li>
          apparent maximum: {getTemperature(apparentTemperatureMax, unit)} at{" "}
          {getTime(apparentTemperatureMaxTime, timezone)}{" "}
          <HighTemperatureWarning temperature={apparentTemperatureMax} />
        </li>
        <li>
          apparent minimum: {getTemperature(apparentTemperatureMin, unit)} at{" "}
          {getTime(apparentTemperatureMinTime, timezone)}
        </li>
        <li>cloud cover: {getPercent(cloudCover)}</li>
        <li>precipitation probability: {getPercent(precipProbability)}</li>
        <DailyPrecipitation intensity={24 * precipIntensity} unit={unit} type={precipType} />
        <Precipitation term="maximal precipitation" intensity={precipIntensityMax} unit={unit} time={precipIntensityMaxTime} zone={timezone} />
        <PrecipType type={precipType} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeed term="wind speed" speed={windSpeed} unit={unit} />
        <WindSpeed term="wind gusts" speed={windGust} unit={unit} time={windGustTime} zone={timezone} />
        <Humidity humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <Visibility visibility={visibility} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
        <Sun term="sunrise at" time={sunriseTime} zone={timezone} />
        <Sun term="sunset at" time={sunsetTime} zone={timezone} />
        <LunarPhase moonPhase={moonPhase} lat={latitude} />
      </ul>
    </div>
  )
}
