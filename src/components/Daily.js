import React from "react"
import { DarkSkyContext, OWMContext } from "../context/AppContext"
import { DailyItemDarkSky, DailyItemOWM } from "./DailyItem"

export  function DailyDarkSky() {
  return (
    <div className="container">
      <h2>Daily forecast</h2>
      <div className="row">
        <DarkSkyContext.Consumer>
          {(context) =>
            "daily" in context.weatherData &&
            context.weatherData.daily.data.map((day, index) => (
              <DailyItemDarkSky data={day} key={index} all={context.weatherData} unit={context.unit} />
            ))
          }
        </DarkSkyContext.Consumer>
      </div>
    </div>
  )
}

export  function DailyOWM() {
  return (
    <div className="container">
      <h2>Daily forecast</h2>
      <div className="row">
        <OWMContext.Consumer>
          {(context) =>
            "daily" in context.weatherData &&
            context.weatherData.daily.map((day, index) => (
              <DailyItemOWM data={day} key={index} all={context.weatherData} unit={context.unit} />
            ))
          }
        </OWMContext.Consumer>
      </div>
    </div>
  )
}