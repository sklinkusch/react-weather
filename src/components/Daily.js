import React from 'react'
import AppContext from '../context/AppContext';
import DailyItem from './DailyItem';

export default function Daily() {
  return (
    <div className="container">
      <h2>Daily forecast</h2>
      <div className="row">
        <AppContext.Consumer>
          {context =>
            "daily" in context.weatherData &&
            context.weatherData.daily.data.map((day, index) => <DailyItem data={day} key={index} />)

          }
        </AppContext.Consumer>
      </div>
    </div>
  )
}
