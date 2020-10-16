/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import React from "react";
import AppContext from "../context/AppContext";
import { WiRain, WiSleet, WiCloudy, WiCloud, WiDayCloudy, WiNightCloudy, WiDaySunny, WiNightClear, WiThunderstorm, WiSnow, WiFog, WiStrongWind } from "weather-icons-react"

export default function CurrentImage(props) {
  const { icon, style } = props
  return (
    <div className="img-container" id="todayImage">
      <AppContext.Consumer>
        {context => {
          if (icon) {
            switch (icon) {
              case "rain":
                return <WiRain style={{...style}} />
              case "sleet":
                return <WiSleet style={{...style}} />;
              case "cloudy":
                return <WiCloudy style={{...style}} />;
              case "partly cloudy":
                return <WiCloud style={{...style}} />;
              case "partly-cloudy-day":
                return <WiDayCloudy style={{...style}} />;
              case "partly-cloudy-night":
                return <WiNightCloudy style={{...style}} />;
              case "clear-day":
                return <WiDaySunny style={{...style}} />;
              case "clear-night":
                return <WiNightClear style={{...style}} />;
              case "sun":
                return <WiDaySunny style={{...style}} />;
              case "thunderstorm":
                return <WiThunderstorm style={{...style}} />;
              case "snow":
                return <WiSnow style={{...style}} />;
              case "fog":
                return <WiFog style={{...style}} />;
              case "wind":
                return <WiStrongWind style={{...style}} />;
            }
          }
        }}
      </AppContext.Consumer>
    </div>
  );
}
