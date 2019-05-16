import React from 'react'
import AppContext from '../context/AppContext';
import HourlyItem from './HourlyItem';

export default function Hourly() {
  return (
    <div className="container">
      <h2>Hourly forecast</h2>
      <div className="row">
        <AppContext.Consumer>
          {context =>
            "hourly" in context.weatherData &&
            context.weatherData.hourly.data.map((hour, index) => <HourlyItem data={hour} key={index} all={context.weatherData} />)

          }
        </AppContext.Consumer>
      </div>
    </div>
  )
}
