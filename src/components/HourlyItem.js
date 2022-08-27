import React from "react"
import { CurrentImageDarkSky, CurrentImageOWM } from "./CurrentImage"
import {
  getTime,
} from "./helpers"
import "../styles/HourlyItem.css"
import Summary from "../reusable/Summary"
import Temperature from "../reusable/Temperature"
import ApparentTemperature from "../reusable/ApparentTemperature"
import { CloudCoverDarkSky, CloudCoverOWM } from "../reusable/CloudCover"
import PrecipProbability from "../reusable/PrecipProbability"
import { PrecipitationDarkSky, PrecipitationOWM } from "../reusable/Precipitation"
import PrecipType from "../reusable/PrecipType"
import AirPressure from "../reusable/AirPressure"
import WindDirection from "../reusable/WindDirection"
import { WindSpeedDarkSky, WindSpeedOWM } from "../reusable/WindSpeed"
import { HumidityDarkSky, HumidityOWM } from "../reusable/Humidity"
import DewPoint from "../reusable/DewPoint"
import { VisibilityDarkSky, VisibilityOWM } from "../reusable/Visibility"
import UvIndex from "../reusable/uvIndex"

export function HourlyItemDarkSky({data, all, unit}) {
  const { time, icon, summary, temperature, apparentTemperature, cloudCover, precipProbability, precipIntensity, precipType, pressure, windBearing, windSpeed, windGust, humidity, dewPoint, visibility, uvIndex } = data
  const { timezone } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getTime(time, timezone)}</h2>
      <div className="imag">
        <CurrentImageDarkSky icon={icon}  style={{ fontSize: "96px" }} />
      </div>
      <ul>
        <Summary summary={summary} icon={icon} temperature={temperature} precipIntensity={precipIntensity} />
        <Temperature term="temperature" temperature={temperature} unit={unit} />
        <ApparentTemperature term="feels like" temperature={apparentTemperature} unit={unit} />
        <CloudCoverDarkSky value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <PrecipitationDarkSky term="hourly precipitation" intensity={precipIntensity} unit={unit} />
        <PrecipType type={precipType} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeedDarkSky term="wind speed" speed={windSpeed} unit={unit} />
        <WindSpeedDarkSky term="wind gusts" speed={windGust} unit={unit} />
        <HumidityDarkSky humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <VisibilityDarkSky visibility={visibility} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
      </ul>
    </div>
  )
}

export function HourlyItemOWM({data, all, unit}) {
  const { dt: time, weather, temp: temperature, feels_like: apparentTemperature, clouds: cloudCover, pop: precipProbability, rain = {}, snow = {}, pressure, wind_deg: windBearing, wind_speed: windSpeed, wind_gust: windGust, humidity, dew_point: dewPoint, visibility, uvi: uvIndex } = data
  const { id, icon, description: summary } = weather[0]
  const { "1h": rain1h = 0 } = rain
  const { "1h": snow1h = 0 } = snow
  const { timezone } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getTime(time, timezone)}</h2>
      <div className="imag">
        <CurrentImageOWM id={id} icon={icon}  style={{ fontSize: "96px" }} />
      </div>
      <ul>
        <Summary summary={summary} id={id} icon={icon} temperature={temperature} precipIntensity={0} />
        <Temperature term="temperature" temperature={temperature} unit={unit} />
        <ApparentTemperature term="feels like" temperature={apparentTemperature} unit={unit} />
        <CloudCoverOWM value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <PrecipitationOWM term="hourly precipitation" rain={rain1h} snow={snow1h} unit={unit} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeedOWM term="wind speed" speed={windSpeed} unit={unit} />
        {windGust && <WindSpeedOWM term="wind gusts" speed={windGust} unit={unit} />}
        <HumidityOWM humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <VisibilityOWM visibility={visibility} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
      </ul>
    </div>
  )
}