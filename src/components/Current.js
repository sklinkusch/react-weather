import React, {Fragment} from "react"
import AppContext from "../context/AppContext"
import "../styles/Current.scss"
import CurrentImage from "./CurrentImage"
import UvIndex from "../reusable/uvIndex"
import Visibility from "../reusable/Visibility"
import DewPoint from "../reusable/DewPoint"
import Humidity from "../reusable/Humidity"
import WindSpeed from "../reusable/WindSpeed"
import WindDirection from "../reusable/WindDirection"
import AirPressure from "../reusable/AirPressure"
import PrecipProbability from "../reusable/PrecipProbability"
import CloudCover from "../reusable/CloudCover"
import ApparentTemperature from "../reusable/ApparentTemperature"
import Temperature from "../reusable/Temperature"
import Summary from "../reusable/Summary"
import CurrentTime from "../reusable/CurrentTime"
import Coordinates from "../reusable/Coordinates"
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
                    <Coordinates lat={context.weatherData.latitude} lng={context.weatherData.longitude} />
                    <Summary summary={context.weatherData.currently.summary} icon={context.weatherData.currently.icon} temperature={context.weatherData.currently.temperature} precipIntensity={0} />
                    <CurrentTime time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                    <Temperature term="current temperature" temperature={context.weatherData.currently.temperature} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.currently.apparentTemperature} unit={context.unit} />
                    <CloudCover value={context.weatherData.currently.cloudCover} />
                    <PrecipProbability value={context.weatherData.currently.precipProbability} />
                    <AirPressure pressure={context.weatherData.currently.pressure} unit={context.unit} />
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
                    <Coordinates lat={context.weatherData.latitude} lng={context.weatherData.longitude} />
                    <CurrentTime time={context.weatherData.currently.time} zone={context.weatherData.timezone} offset={context.weatherData.offset} />
                    <Summary summary={context.weatherData.currently.summary} />
                    <Temperature term="current temperature" temperature={context.weatherData.currently.temperature} unit={context.unit} />
                    <ApparentTemperature term="feels like" temperature={context.weatherData.currently.apparentTemperature} unit={context.unit} />
                    <CloudCover value={context.weatherData.currently.cloudCover} />
                    <PrecipProbability value={context.weatherData.currently.precipProbability} />
                    <AirPressure pressure={context.weatherData.currently.pressure} unit={context.unit} />
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
