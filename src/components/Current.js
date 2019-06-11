import React from "react";
import AppContext from "../context/AppContext";
import { getCelsius, getPercent, getDirection, getBeaufort } from "./helpers";
import "../styles/Current.scss";
import CurrentImage from "./CurrentImage";

export default class Current extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="jumbotron">
            <div className="container sk-flex-row">
              <div className="text-container">
                <h1 className="display-3">{context.selectedCity.name}</h1>
                <ul>
                  {"currently" in context.weatherData && (
                    <>
                      <li>{context.weatherData.currently.summary}</li>
                      <li>
                        current temperature:{" "}
                        {getCelsius(context.weatherData.currently.temperature)}
                      </li>
                      <li>
                        feels like:{" "}
                        {getCelsius(
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
                        air pressure: {context.weatherData.currently.pressure}{" "}
                        mbar
                      </li>
                      <li>
                        wind:{" "}
                        {getDirection(
                          context.weatherData.currently.windBearing
                        )}{" "}
                        {getBeaufort(context.weatherData.currently.windSpeed)}{" "}
                        (gusts:{" "}
                        {getBeaufort(context.weatherData.currently.windGust)})
                      </li>
                      <li>
                        relative humidity:{" "}
                        {getPercent(context.weatherData.currently.humidity)}
                      </li>
                      <li>
                        dew point:{" "}
                        {getCelsius(context.weatherData.currently.dewPoint)}
                      </li>
                      <li>UV index: {context.weatherData.currently.uvIndex}</li>
                    </>
                  )}
                </ul>
              </div>
              {"currently" in context.weatherData && (
                <CurrentImage icon={context.weatherData.currently.icon} />
              )}
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
