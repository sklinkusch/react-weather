import React, {Fragment} from "react"
import AppContext from "../context/AppContext"
import {
  getCelsius,
  getPercent,
  getTime,
  getFahrenheit,
  getMiles,
  getTimezone,
  getCoordinates,
} from "./helpers"
import { getDirection,
  getBeaufort,
  getKph,
  getMph,} from "./wind"
import "../styles/Current.scss"
import CurrentImage from "./CurrentImage"
import { getCountry, getAdminDiv } from "../data/"

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
                      {getCelsius(context.weatherData.currently.temperature)}/
                      {getFahrenheit(context.weatherData.currently.temperature)}
                    </li>
                    <li>
                      feels like:{" "}
                      {getCelsius(
                        context.weatherData.currently.apparentTemperature
                      )}
                      /
                      {getFahrenheit(
                        context.weatherData.currently.apparentTemperature
                      )}
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
                    <li>
                      wind direction:{" "}
                      {getDirection(context.weatherData.currently.windBearing)}
                    </li>
                    <li>
                      wind speed:{" "}
                      {getBeaufort(context.weatherData.currently.windSpeed)}/
                      {getKph(context.weatherData.currently.windSpeed)}/
                      {getMph(context.weatherData.currently.windSpeed)}
                    </li>
                    <li>
                      wind gusts:{" "}
                      {getBeaufort(context.weatherData.currently.windGust)}/
                      {getKph(context.weatherData.currently.windGust)}/
                      {getMph(context.weatherData.currently.windGust)}
                    </li>
                    <li>
                      relative humidity:{" "}
                      {getPercent(context.weatherData.currently.humidity)}
                    </li>
                    <li>
                      dew point:{" "}
                      {getCelsius(context.weatherData.currently.dewPoint)}/
                      {getFahrenheit(context.weatherData.currently.dewPoint)}
                    </li>
                    <li>
                      visibility:{" "}
                      {context.weatherData.currently.visibility.toFixed(1)} km/
                      {getMiles(context.weatherData.currently.visibility)}
                    </li>
                    <li>UV index: {context.weatherData.currently.uvIndex}</li>
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
                  <p className="display-12">{getAdminDiv(context.selectedCity.country, context.selectedCity.adminCode)}</p>
                  <p className="display-12">{getCountry(context.selectedCity.country)}</p>
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
                      {getCelsius(context.weatherData.currently.temperature)}/
                      {getFahrenheit(context.weatherData.currently.temperature)}
                    </li>
                    <li>
                      feels like:{" "}
                      {getCelsius(
                        context.weatherData.currently.apparentTemperature
                      )}
                      /
                      {getFahrenheit(
                        context.weatherData.currently.apparentTemperature
                      )}
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
                    <li>
                      wind direction:{" "}
                      {getDirection(context.weatherData.currently.windBearing)}
                    </li>
                    <li>
                      wind speed:{" "}
                      {getBeaufort(context.weatherData.currently.windSpeed)}/
                      {getKph(context.weatherData.currently.windSpeed)}/
                      {getMph(context.weatherData.currently.windSpeed)}
                    </li>
                    <li>
                      wind gusts:{" "}
                      {getBeaufort(context.weatherData.currently.windGust)}/
                      {getKph(context.weatherData.currently.windGust)}/
                      {getMph(context.weatherData.currently.windGust)}
                    </li>
                    <li>
                      relative humidity:{" "}
                      {getPercent(context.weatherData.currently.humidity)}
                    </li>
                    <li>
                      dew point:{" "}
                      {getCelsius(context.weatherData.currently.dewPoint)}/
                      {getFahrenheit(context.weatherData.currently.dewPoint)}
                    </li>
                    <li>
                      visibility:{" "}
                      {context.weatherData.currently.visibility.toFixed(1)} km/
                      {getMiles(context.weatherData.currently.visibility)}
                    </li>
                    <li>UV index: {context.weatherData.currently.uvIndex}</li>
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
