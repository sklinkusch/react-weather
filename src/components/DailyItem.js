import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getDate,
} from "./helpers"
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
import PrecipProbability from "../reusable/PrecipProbability"
import CloudCover from "../reusable/CloudCover"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Temperature from "../reusable/Temperature"
import Summary from "../reusable/Summary"
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
        <Summary summary={summary} />
        <Temperature term="maximum" temperature={temperatureMax} unit={unit} time={temperatureMaxTime} zone={timezone} />
        <Temperature term="minimum" temperature={temperatureMin} unit={unit} time={temperatureMinTime} zone={timezone} />
        <ApparentTemperature term="apparent maximum" temperature={apparentTemperatureMax} unit={unit} time={apparentTemperatureMaxTime} zone={timezone} />
        <ApparentTemperature term="apparent minimum" temperature={apparentTemperatureMin} unit={unit} time={apparentTemperatureMinTime} zone={timezone} />
        <CloudCover value={cloudCover} />
        <PrecipProbability value={precipProbability} />
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
