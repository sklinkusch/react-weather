import React, {Fragment} from "react"
import AppContext from "../context/AppContext"
import "../styles/Current.css"
import CurrentImage from "./CurrentImage"
import UvIndex from "../reusable/uvIndex"
import Visibility from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import Humidity from "../reusable/Humidity"
import WindSpeed from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import CloudCover from "../reusable/CloudCover"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Temperature from "../reusable/Temperature"
import Summary from "../reusable/Summary"
import CurrentTime from "../reusable/CurrentTime"
import Coordinates from "../reusable/Coordinates"
import Precipitation from "../reusable/Precipitation"
// import { getCountry, getAdminDiv } from "../data/"

const CurrentDesktop = () => (
  <AppContext.Consumer>
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
                    <CurrentTime time={context.weatherData.current.dt} zone={context.weatherData.timezone} offset={context.weatherData.timezone_offset} />
                    <Temperature term="current temperature" temperature={context.weatherData.current.temp} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.current.feels_like} unit={context.unit} />
                    <CloudCover value={context.weatherData.current.clouds} />
                    {"rain" in context.weatherData.current && !context.weatherData.current.hasOwnProperty("snow") && (<Precipitation term="precipitation" rain={context.weatherData.current.rain["1h"]} snow={0} unit={context.unit} />)}
                    {"snow" in context.weatherData.current && !context.weatherData.current.hasOwnProperty("rain") && (<Precipitation term="precipitation" snow={context.weatherData.current.snow["1h"]} rain={0} unit={context.unit} />)}
                    {"rain" in context.weatherData.current && "snow" in context.weatherData.current && (<Precipitation term="precipitation" snow={context.weatherData.current.snow["1h"]} rain={context.weatherData.current.rain["1h"]} unit={context.unit} />)}
                    <AirPressure pressure={context.weatherData.current.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.current.wind_deg} />
                    <WindSpeed term="wind speed" speed={context.weatherData.current.wind_speed} unit={context.unit} />
                    {context.weatherData.current.wind_gust && <WindSpeed term="wind gusts" speed={context.weatherData.current.wind_gust} unit={context.unit} />}
                    <Humidity humidity={context.weatherData.current.humidity} />
                    <DewPoint dewPoint={context.weatherData.current.dew_point} unit={context.unit} />
                    <Visibility visibility={context.weatherData.current.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.current.uvi} />
                  </>
                )}
              </ul>
            </div>
            {"current" in context.weatherData && (
              <CurrentImage id={context.weatherData.current.weather[0].id} icon={context.weatherData.current.weather[0].icon} style={{ fontSize: "152px"}} />
            )}
          </div>
        </div>
      )}
    </AppContext.Consumer>
)

const CurrentMobile = () => (
  <AppContext.Consumer>
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
              <CurrentImage id={context.weatherData.current.weather[0].id} icon={context.weatherData.current.weather[0].icon} style={{ fontSize: "152px"}} />
            )}
              <ul>
                {"current" in context.weatherData && (
                  <>
                    <Coordinates lat={context.weatherData.lat} lng={context.weatherData.lon} />
                    <CurrentTime time={context.weatherData.current.dt} zone={context.weatherData.timezone} offset={context.weatherData.timezone_offset} />
                    <Summary summary={context.weatherData.current.weather[0].description} />
                    <Temperature term="current temperature" temperature={context.weatherData.current.temp} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.current.feels_like} unit={context.unit} />
                    <CloudCover value={context.weatherData.current.clouds} />
                    {/* <PrecipProbability value={context.weatherData.currently.precipProbability} /> */}
                    <AirPressure pressure={context.weatherData.current.pressure} unit={context.unit} />
                    <WindDirection angle={context.weatherData.current.wind_deg} />
                    <WindSpeed term="wind speed" speed={context.weatherData.current.wind_speed} unit={context.unit} />
                    {context.weatherData.current.wind_gust && <WindSpeed term="wind gusts" speed={context.weatherData.current.wind_gust} unit={context.unit} />}
                    <Humidity humidity={context.weatherData.current.humidity} />
                    <DewPoint dewPoint={context.weatherData.current.dew_point} unit={context.unit} />
                    <Visibility visibility={context.weatherData.current.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.current.uvi} />
                  </>
                )}
              </ul>
            </div>
        </div>
      )}
    </AppContext.Consumer>
)

export default function Current() {
  return (
    <Fragment>
      <CurrentDesktop />
      <CurrentMobile />
    </Fragment>
  )
}
