import React from "react"
import CurrentImage from "./CurrentImage"
import {
  getDate,
} from "./helpers"
import Sun from "../reusable/Sun"
import UvIndex from "../reusable/uvIndex"
import DewPoint from "../reusable/DewPoint"
import Humidity from "../reusable/Humidity"
import WindSpeed from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import DailyPrecipitation from "../reusable/DailyPrecipitation"
import PrecipProbability from "../reusable/PrecipProbability"
import CloudCover from "../reusable/CloudCover"
import Temperature from "../reusable/Temperature"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Summary from "../reusable/Summary"
// import "../styles/DailyItem.scss";

export default function DailyItem({ data, all, unit }) {
  console.dir(data)
  const {
    dt: time,
    weather,
    temp,
    feels_like,
    clouds: cloudCover,
    rain = 0,
    snow = 0,
    pop: precipProbability,
    pressure,
    wind_deg: windBearing,
    wind_gust: windGust,
    wind_speed: windSpeed,
    humidity,
    dew_point: dewPoint,
    uvi: uvIndex,
    sunrise: sunriseTime,
    sunset: sunsetTime,
  } = data
  const { min: temperatureMin, max: temperatureMax, morn: temperatureMorn, day: temperatureDay, eve: temperatureEve, night: temperatureNight } = temp
  const { morn: appTemperatureMorn, day: appTemperatureDay, eve: appTemperatureEve, night: appTemperatureNight } = feels_like
  const { id, icon, description: summary } = weather[0]
  const { timezone } = all
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{getDate(time, timezone)}</h2>
      <div className="imag">
        <CurrentImage id={id} icon={icon} style={{ fontSize: "96px"}} />
      </div>
      <ul>
        <Summary summary={summary} icon={icon} temperature={temperatureMin} precipIntensity={0} />
        <Temperature term="maximum" temperature={temperatureMax} unit={unit} />
        <Temperature term="minimum" temperature={temperatureMin} unit={unit} />
        <Temperature term="morning temperature" temperature={temperatureMorn} unit={unit} />
        <Temperature term="daytime temperature" temperature={temperatureDay} unit={unit} />
        <Temperature term="evening temperature" temperature={temperatureEve} unit={unit} />
        <Temperature term="night temperature" temperature={temperatureNight} unit={unit} />
        <ApparentTemperature term="apparent morning temperature" temperature={appTemperatureMorn} unit={unit} />
        <ApparentTemperature term="apparent daytime temperature" temperature={appTemperatureDay} unit={unit} />
        <ApparentTemperature term="apparent evening temperature" temperature={appTemperatureEve} unit={unit} />
        <ApparentTemperature term="apparent night temperature" temperature={appTemperatureNight} unit={unit} />
        <CloudCover value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <DailyPrecipitation rain={rain} snow={snow} unit={unit} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeed term="wind speed" speed={windSpeed} unit={unit} />
        {windGust && windGust > 0 && <WindSpeed term="wind gusts" speed={windGust} unit={unit} />}
        <Humidity humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
        <Sun term="sunrise at" time={sunriseTime} zone={timezone} />
        <Sun term="sunset at" time={sunsetTime} zone={timezone} />
      </ul>
    </div>
  )
}
