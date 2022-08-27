import React, {Fragment} from "react"
import { DarkSkyContext, OWMContext } from "../context/AppContext"
import "../styles/Current.css"
import { CurrentImageDarkSky, CurrentImageOWM } from "./CurrentImage"
import UvIndex from "../reusable/uvIndex"
import { VisibilityDarkSky, VisibilityOWM } from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import { HumidityDarkSky, HumidityOWM } from "../reusable/Humidity"
import { WindSpeedDarkSky, WindSpeedOWM } from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import { PrecipitationOWM } from "../reusable/Precipitation"
import PrecipProbability from "../reusable/PrecipProbability"
import { CloudCoverDarkSky, CloudCoverOWM } from "../reusable/CloudCover"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Temperature from "../reusable/Temperature"
import Summary from "../reusable/Summary"
import { CurrentTimeDarksky, CurrentTimeOWM } from "../reusable/CurrentTime"
import Coordinates from "../reusable/Coordinates"
import SunPosition from "./SunPosition"
// import { getCountry, getAdminDiv } from "../data/"

const CurrentDarkSkyDesktop = () => (
  <DarkSkyContext.Consumer>
      {(context) => (
        <div className="jumbotron d-none d-lg-block">
          <div className="container sk-flex-row">
            <div className="text-container">
              {"selectedCity" in context && context.selectedCity && (
                <h1 className="display-3">{context.selectedCity.dropname}</h1>
              )}
              <ul>
                {"currently" in context.weatherData && (
                  <>
                    <Coordinates lat={context.weatherData.latitude} lng={context.weatherData.longitude} />
                    <Summary summary={context.weatherData.currently.summary} icon={context.weatherData.currently.icon} temperature={context.weatherData.currently.temperature} precipIntensity={0} />
                    <CurrentTimeDarksky time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                    <Temperature term="current temperature" temperature={context.weatherData.currently.temperature} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.currently.apparentTemperature} unit={context.unit} />
                    <CloudCoverDarkSky value={context.weatherData.currently.cloudCover} />
                    <PrecipProbability value={context.weatherData.currently.precipProbability} />
                    <AirPressure pressure={context.weatherData.currently.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.currently.windBearing} />
                    <WindSpeedDarkSky term="wind speed" speed={context.weatherData.currently.windSpeed} unit={context.unit} />
                    <WindSpeedDarkSky term="wind gusts" speed={context.weatherData.currently.windGust} unit={context.unit} />
                    <HumidityDarkSky humidity={context.weatherData.currently.humidity} />
                    <DewPoint dewPoint={context.weatherData.currently.dewPoint} unit={context.unit} />
                    <VisibilityDarkSky visibility={context.weatherData.currently.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.currently.uvIndex} />
                    <SunPosition lat={context.weatherData.latitude} lng={context.weatherData.longitude} time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                  </>
                )}
              </ul>
            </div>
            {"currently" in context.weatherData && (
              <CurrentImageDarkSky icon={context.weatherData.currently.icon} style={{ fontSize: "152px"}} />
            )}
          </div>
        </div>
      )}
    </DarkSkyContext.Consumer>
)

const CurrentDarkSkyMobile = () => (
  <DarkSkyContext.Consumer>
      {(context) => (
        <div className="jumbotron d-block d-lg-none">
            <div className="text-container">
              {"selectedCity" in context && context.selectedCity && (
                <>
                  <h1 className="display-12">{context.selectedCity.dropname}</h1>
                  {/* <p className="display-12">{getAdminDiv(context.selectedCity.country, context.selectedCity.adminCode)}</p>
                  <p className="display-12">{getCountry(context.selectedCity.country)}</p> */}
                </>
              )}
              {"currently" in context.weatherData && (
              <CurrentImageDarkSky icon={context.weatherData.currently.icon} style={{ fontSize: "152px"}} />
            )}
              <ul>
                {"currently" in context.weatherData && (
                  <>
                    <Coordinates lat={context.weatherData.latitude} lng={context.weatherData.longitude} />
                    <CurrentTimeDarksky time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                    <Summary summary={context.weatherData.currently.summary} />
                    <Temperature term="current temperature" temperature={context.weatherData.currently.temperature} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.currently.apparentTemperature} unit={context.unit} />
                    <CloudCoverDarkSky value={context.weatherData.currently.cloudCover} />
                    <PrecipProbability value={context.weatherData.currently.precipProbability} />
                    <AirPressure pressure={context.weatherData.currently.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.currently.windBearing} />
                    <WindSpeedDarkSky term="wind speed" speed={context.weatherData.currently.windSpeed} unit={context.unit} />
                    <WindSpeedDarkSky term="wind gusts" speed={context.weatherData.currently.windGust} unit={context.unit} />
                    <HumidityDarkSky humidity={context.weatherData.currently.humidity} />
                    <DewPoint dewPoint={context.weatherData.currently.dewPoint} unit={context.unit} />
                    <VisibilityDarkSky visibility={context.weatherData.currently.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.currently.uvIndex} />
                    <SunPosition lat={context.weatherData.latitude} lng={context.weatherData.longitude} time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                  </>
                )}
              </ul>
            </div>
        </div>
      )}
    </DarkSkyContext.Consumer>
)

export function CurrentDarkSky() {
  return (
    <Fragment>
      <CurrentDarkSkyDesktop />
      <CurrentDarkSkyMobile />
    </Fragment>
  )
}


const CurrentOWMDesktop = () => (
  <OWMContext.Consumer>
      {(context) => (
        <div className="jumbotron d-none d-lg-block">
          <div className="container sk-flex-row">
            <div className="text-container">
              {"selectedCity" in context && context.selectedCity && (
                <h1 className="display-3">{context.selectedCity.dropname}</h1>
              )}
              <ul>
                {"current" in context.weatherData && (
                  <>
                    <Coordinates lat={context.weatherData.lat} lng={context.weatherData.lon} />
                    <Summary summary={context.weatherData.current.weather[0].description} icon={context.weatherData.current.weather[0].icon} id={context.weatherData.current.weather[0].id} temperature={context.weatherData.current.temp} precipIntensity={0} />
                    <CurrentTimeOWM time={context.weatherData.current.dt} zone={context.weatherData.timezone} offset={context.weatherData.timezone_offset} />
                    <Temperature term="current temperature" temperature={context.weatherData.current.temp} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.current.feels_like} unit={context.unit} />
                    <CloudCoverOWM value={context.weatherData.current.clouds} />
                    {"rain" in context.weatherData.current && !context.weatherData.current.hasOwnProperty("snow") && (<PrecipitationOWM term="precipitation" rain={context.weatherData.current.rain["1h"]} snow={0} unit={context.unit} />)}
                    {"snow" in context.weatherData.current && !context.weatherData.current.hasOwnProperty("rain") && (<PrecipitationOWM term="precipitation" snow={context.weatherData.current.snow["1h"]} rain={0} unit={context.unit} />)}
                    {"rain" in context.weatherData.current && "snow" in context.weatherData.current && (<PrecipitationOWM term="precipitation" snow={context.weatherData.current.snow["1h"]} rain={context.weatherData.current.rain["1h"]} unit={context.unit} />)}
                    <AirPressure pressure={context.weatherData.current.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.current.wind_deg} />
                    <WindSpeedOWM term="wind speed" speed={context.weatherData.current.wind_speed} unit={context.unit} />
                    {context.weatherData.current.wind_gust && <WindSpeedOWM term="wind gusts" speed={context.weatherData.current.wind_gust} unit={context.unit} />}
                    <HumidityOWM humidity={context.weatherData.current.humidity} />
                    <DewPoint dewPoint={context.weatherData.current.dew_point} unit={context.unit} />
                    <VisibilityOWM visibility={context.weatherData.current.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.current.uvi} />
                  </>
                )}
              </ul>
            </div>
            {"current" in context.weatherData && (
              <CurrentImageOWM id={context.weatherData.current.weather[0].id} icon={context.weatherData.current.weather[0].icon} style={{ fontSize: "152px"}} />
            )}
          </div>
        </div>
      )}
    </OWMContext.Consumer>
)

const CurrentOWMMobile = () => (
  <OWMContext.Consumer>
      {(context) => (
        <div className="jumbotron d-block d-lg-none">
            <div className="text-container">
              {"selectedCity" in context && context.selectedCity && (
                <>
                  <h1 className="display-12">{context.selectedCity.dropname}</h1>
                  {/* <p className="display-12">{getAdminDiv(context.selectedCity.country, context.selectedCity.adminCode)}</p>
                  <p className="display-12">{getCountry(context.selectedCity.country)}</p> */}
                </>
              )}
              {"current" in context.weatherData && (
              <CurrentImageOWM id={context.weatherData.current.weather[0].id} icon={context.weatherData.current.weather[0].icon} style={{ fontSize: "152px"}} />
            )}
              <ul>
                {"current" in context.weatherData && (
                  <>
                    <Coordinates lat={context.weatherData.lat} lng={context.weatherData.lon} />
                    <CurrentTimeOWM time={context.weatherData.current.dt} zone={context.weatherData.timezone} offset={context.weatherData.timezone_offset} />
                    <Summary summary={context.weatherData.current.weather[0].description} />
                    <Temperature term="current temperature" temperature={context.weatherData.current.temp} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.current.feels_like} unit={context.unit} />
                    <CloudCoverOWM value={context.weatherData.current.clouds} />
                    {/* <PrecipProbability value={context.weatherData.currently.precipProbability} /> */}
                    <AirPressure pressure={context.weatherData.current.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.current.wind_deg} />
                    <WindSpeedOWM term="wind speed" speed={context.weatherData.current.wind_speed} unit={context.unit} />
                    {context.weatherData.current.wind_gust && <WindSpeedOWM term="wind gusts" speed={context.weatherData.current.wind_gust} unit={context.unit} />}
                    <HumidityOWM humidity={context.weatherData.current.humidity} />
                    <DewPoint dewPoint={context.weatherData.current.dew_point} unit={context.unit} />
                    <VisibilityOWM visibility={context.weatherData.current.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.current.uvi} />
                  </>
                )}
              </ul>
            </div>
        </div>
      )}
    </OWMContext.Consumer>
)

export function CurrentOWM() {
  return (
    <Fragment>
      <CurrentOWMDesktop />
      <CurrentOWMMobile />
    </Fragment>
  )
}
