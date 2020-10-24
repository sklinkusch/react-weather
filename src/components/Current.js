import React, {Fragment} from "react"
import AppContext from "../context/AppContext"
import {
  getPercent,
  getTime,
  getTemperature,
  getTimezone,
  getCoordinates,
} from "./helpers"
import "../styles/Current.scss"
import CurrentImage from "./CurrentImage"
import { HighTemperatureWarning, LowTemperatureWarning } from "./Warning"
import UvIndex from "../reusable/uvIndex"
import Visibility from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import Humidity from "../reusable/Humidity"
import WindSpeed from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
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
                {"currently" in context.weatherData && (
                  <>
                    <li>
                      geocoordinates:{" "}
                      {getCoordinates(context.weatherData.latitude, "lat")},{" "}
                      {getCoordinates(context.weatherData.longitude, "lng")}
                    </li>
                    <li>
                      current time:{" "}
                      {getTime(
                        context.weatherData.currently.time,
                        context.weatherData.timezone
                      )} ({getTimezone(context.weatherData.offset)})
                    </li>
                    <li>{context.weatherData.currently.summary}</li>
                    <li>
                      current temperature:{" "}
                      {getTemperature(context.weatherData.currently.temperature, context.unit)}{" "}
                      <LowTemperatureWarning temperature={context.weatherData.currently.temperature} />
                    </li>
                    <li>
                      feels like:{" "}
                      {getTemperature(
                        context.weatherData.currently.apparentTemperature, context.unit
                      )}{" "}<HighTemperatureWarning temperature={context.weatherData.currently.apparentTemperature} />
                    </li>
                    <li>
                      cloud cover:{" "}
                      {getPercent(context.weatherData.currently.cloudCover)}
                    </li>
                    <li>
                      precipitation probability:{" "}
                      {getPercent(
                        context.weatherData.currently.precipProbability
                      )}
                    </li>
                    <li>
                      air pressure: {context.weatherData.currently.pressure.toFixed(1)}{" "}
                      mbar
                    </li>
                    <WindDirection angle={context.weatherData.currently.windBearing} />
                    <WindSpeed term="wind speed" speed={context.weatherData.currently.windSpeed} unit={context.unit} />
                    <WindSpeed term="wind gusts" speed={context.weatherData.currently.windGust} unit={context.unit} />
                    <Humidity humidity={context.weatherData.currently.humidity} />
                    <DewPoint dewPoint={context.weatherData.currently.dewPoint} unit={context.unit} />
                    <Visibility visibility={context.weatherData.currently.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.currently.uvIndex} />
                  </>
                )}
              </ul>
            </div>
            {"currently" in context.weatherData && (
              <CurrentImage icon={context.weatherData.currently.icon} style={{ fontSize: "152px"}} />
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
                  <h1 className="display-12">{context.selectedCity.name}</h1>
                  {/* <p className="display-12">{getAdminDiv(context.selectedCity.country, context.selectedCity.adminCode)}</p>
                  <p className="display-12">{getCountry(context.selectedCity.country)}</p> */}
                </>
              )}
              {"currently" in context.weatherData && (
              <CurrentImage icon={context.weatherData.currently.icon} style={{ fontSize: "152px"}} />
            )}
              <ul>
                {"currently" in context.weatherData && (
                  <>
                    <li>
                      geocoordinates:{" "}
                      {getCoordinates(context.weatherData.latitude, "lat")},{" "}
                      {getCoordinates(context.weatherData.longitude, "lng")}
                    </li>
                    <li>
                      current time:{" "}
                      {getTime(
                        context.weatherData.currently.time,
                        context.weatherData.timezone
                      )} ({getTimezone(context.weatherData.offset)})
                    </li>
                    <li>{context.weatherData.currently.summary}</li>
                    <li>
                      current temperature:{" "}
                      {getTemperature(context.weatherData.currently.temperature, context.unit)}{" "}
                      <LowTemperatureWarning temperature={context.weatherData.currently.temperature} />
                    </li>
                    <li>
                      feels like:{" "}
                      {getTemperature(context.weatherData.currently.apparentTemperature, context.unit)}{" "}<HighTemperatureWarning temperature={context.weatherData.currently.apparentTemperature} />
                    </li>
                    <li>
                      cloud cover:{" "}
                      {getPercent(context.weatherData.currently.cloudCover)}
                    </li>
                    <li>
                      precipitation probability:{" "}
                      {getPercent(
                        context.weatherData.currently.precipProbability
                      )}
                    </li>
                    <li>
                      air pressure: {context.weatherData.currently.pressure.toFixed(1)}{" "}
                      mbar
                    </li>
                    <WindDirection angle={context.weatherData.currently.windBearing} />
                    <WindSpeed term="wind speed" speed={context.weatherData.currently.windSpeed} unit={context.unit} />
                    <WindSpeed term="wind gusts" speed={context.weatherData.currently.windGust} unit={context.unit} />
                    <Humidity humidity={context.weatherData.currently.humidity} />
                    <DewPoint dewPoint={context.weatherData.currently.dewPoint} unit={context.unit} />
                    <Visibility visibility={context.weatherData.currently.visibility} unit={context.unit} />
                    <UvIndex uvIndex={context.weatherData.currently.uvIndex} />
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
