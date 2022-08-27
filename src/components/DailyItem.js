import React from "react"
import { CurrentImageDarkSky, CurrentImageOWM } from "./CurrentImage"
import {
  getDate,
} from "./helpers"
import Sun from "../reusable/Sun"
import LunarPhase from "../reusable/LunarPhase"
import UvIndex from "../reusable/uvIndex"
import { VisibilityDarkSky } from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import { HumidityDarkSky, HumidityOWM } from "../reusable/Humidity"
import { WindSpeedDarkSky, WindSpeedOWM } from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import PrecipType from "../reusable/PrecipType"
import { PrecipitationDarkSky } from "../reusable/Precipitation"
import { DailyPrecipitationDarkSky, DailyPrecipitationOWM } from "../reusable/DailyPrecipitation"
import PrecipProbability from "../reusable/PrecipProbability"
import { CloudCoverDarkSky, CloudCoverOWM } from "../reusable/CloudCover"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Temperature from "../reusable/Temperature"
import TemperatureApparent from "../reusable/TemperatureApparent"
import Summary from "../reusable/Summary"
// import "../styles/DailyItem.scss";

export function DailyItemDarkSky({ data, all, unit }) {
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
        <CurrentImageDarkSky icon={icon} style={{ fontSize: "96px"}} />
      </div>
      <ul>
        <Summary summary={summary} icon={icon} temperature={temperatureMin} precipIntensity={precipIntensity} />
        <Temperature term="maximum" temperature={temperatureMax} unit={unit} time={temperatureMaxTime} zone={timezone} />
        <Temperature term="minimum" temperature={temperatureMin} unit={unit} time={temperatureMinTime} zone={timezone} />
        <ApparentTemperature term="apparent maximum" temperature={apparentTemperatureMax} unit={unit} time={apparentTemperatureMaxTime} zone={timezone} />
        <ApparentTemperature term="apparent minimum" temperature={apparentTemperatureMin} unit={unit} time={apparentTemperatureMinTime} zone={timezone} />
        <CloudCoverDarkSky value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <DailyPrecipitationDarkSky intensity={precipIntensity} unit={unit} type={precipType} />
        <PrecipitationDarkSky term="maximal precipitation" intensity={precipIntensityMax} unit={unit} time={precipIntensityMaxTime} zone={timezone} />
        <PrecipType type={precipType} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeedDarkSky term="wind speed" speed={windSpeed} unit={unit} />
        <WindSpeedDarkSky term="wind gusts" speed={windGust} unit={unit} time={windGustTime} zone={timezone} />
        <HumidityDarkSky humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <VisibilityDarkSky visibility={visibility} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
        <Sun term="sunrise at" time={sunriseTime} zone={timezone} />
        <Sun term="sunset at" time={sunsetTime} zone={timezone} />
        <LunarPhase moonPhase={moonPhase} lat={latitude} />
      </ul>
    </div>
  )
}

export function DailyItemOWM({ data, all, unit }) {
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
        <CurrentImageOWM id={id} icon={icon} style={{ fontSize: "96px"}} />
      </div>
      <ul>
        <Summary summary={summary} id={id} icon={icon} temperature={temperatureMin} precipIntensity={0} />
        <Temperature term="maximum" temperature={temperatureMax} unit={unit} />
        <Temperature term="minimum" temperature={temperatureMin} unit={unit} />
        <TemperatureApparent term="morning" temp={temperatureMorn} app={appTemperatureMorn} unit={unit} />
        <TemperatureApparent term="daytime" temp={temperatureDay} app={appTemperatureDay} unit={unit} />
        <TemperatureApparent term="evening" temp={temperatureEve} app={appTemperatureEve} unit={unit} />
        <TemperatureApparent term="night" temp={temperatureNight} app={appTemperatureNight} unit={unit} />
        <CloudCoverOWM value={cloudCover} />
        <PrecipProbability value={precipProbability} />
        <DailyPrecipitationOWM rain={rain} snow={snow} unit={unit} />
        <AirPressure pressure={pressure} unit={unit} />
        <WindDirection angle={windBearing} />
        <WindSpeedOWM term="wind speed" speed={windSpeed} unit={unit} />
        {windGust && windGust > 0 && <WindSpeedOWM term="wind gusts" speed={windGust} unit={unit} />}
        <HumidityOWM humidity={humidity} />
        <DewPoint dewPoint={dewPoint} unit={unit} />
        <UvIndex uvIndex={uvIndex} />
        <Sun term="sunrise at" time={sunriseTime} zone={timezone} />
        <Sun term="sunset at" time={sunsetTime} zone={timezone} />
      </ul>
    </div>
  )
}