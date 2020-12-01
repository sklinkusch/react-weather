import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getTime,
} from "./helpers"
import "../styles/HourlyItem.scss"
import Summary from "../reusable/Summary"
import Temperature from "../reusable/Temperature"
import ApparentTemperature from "../reusable/ApparentTemperature"
import CloudCover from "../reusable/CloudCover"
import PrecipProbability from "../reusable/PrecipProbability"
import Precipitation from "../reusable/Precipitation"
import AirPressure from "../reusable/AirPressure"
import WindDirection from "../reusable/WindDirection"
import WindSpeed from "../reusable/WindSpeed"
import Humidity from "../reusable/Humidity"
import DewPoint from "../reusable/DewPoint"
import Visibility from "../reusable/Visibility"
import UvIndex from "../reusable/uvIndex"

export default function HourlyItem({data, all, unit}) {
  const { dt: time, weather, temp: temperature, feels_like: apparentTemperature, clouds: cloudCover, pop: precipProbability, rain = {}, snow = {}, pressure, wind_deg: windBearing, wind_speed: windSpeed, wind_gust: windGust, humidity, dew_point: dewPoint, visibility, uvi: uvIndex } = data
  const { id, icon, description: summary } = weather[0]
  const { "1h": rain1h = 0 } = rain
  const { "1h": snow1h = 0 } = snow
  const { timezone } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getTime(time, timezone)}</h2>
      <div className="imag">
        <CurrentImage id={id} icon={icon}  style={{ fontSize: "96px" }} />
      </div>
      <ul>
        <Summary summary={summary} icon={icon} temperature={temperature} precipIntensity={0} />
        <Temperature term="temperature" temperature={temperature} unit={unit} />
        <ApparentTemperature term="feels like" temperature={apparentTemperature} unit={unit} />
        <CloudCover value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <Precipitation term="hourly precipitation" rain={rain1h} snow={snow1h} unit={unit} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeed term="wind speed" speed={windSpeed} unit={unit} />
        {windGust && <WindSpeed term="wind gusts" speed={windGust} unit={unit} />}
        <Humidity humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <Visibility visibility={visibility} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
      </ul>
    </div>
  )
}
