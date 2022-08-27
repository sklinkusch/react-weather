import React from 'react'
import { DarkSkyContext, OWMContext } from '../context/AppContext';
import { HourlyItemDarkSky, HourlyItemOWM } from './HourlyItem';

export function HourlyDarkSky() {
  return (
    <div className="container">
      <h2>Hourly forecast</h2>
      <div className="row">
        <DarkSkyContext.Consumer>
          {context =>
            "hourly" in context.weatherData &&
            context.weatherData.hourly.data.map((hour, index) => <HourlyItemDarkSky data={hour} key={index} all={context.weatherData} unit={context.unit} />)

          }
        </DarkSkyContext.Consumer>
      </div>
    </div>
  )
}

export function HourlyOWM() {
  return (
    <div className="container">
      <h2>Hourly forecast</h2>
      <div className="row">
        <OWMContext.Consumer>
          {context =>
            "hourly" in context.weatherData &&
            context.weatherData.hourly.map((hour, index) => <HourlyItemOWM data={hour} key={index} all={context.weatherData} unit={context.unit} />)

          }
        </OWMContext.Consumer>
      </div>
    </div>
  )
}