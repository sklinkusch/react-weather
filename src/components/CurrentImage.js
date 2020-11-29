/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import React from "react";
import AppContext from "../context/AppContext";
import { WiRain, WiSleet, WiCloudy, WiCloud, WiDaySunny, WiNightClear, WiThunderstorm, WiSnow, WiFog, WiStrongWind, WiSprinkle, WiSmoke, WiDust, WiSandstorm, WiTornado } from "weather-icons-react"

export default function CurrentImage(props) {
  const { id, icon, style } = props
  return (
    <div className="img-container" id="todayImage">
      <AppContext.Consumer>
        {context => {
          if (id) {
            switch (id) {
              case 500:
              case 501:
              case 502:
              case 503:
              case 504:
              case 511:
              case 520:
              case 521:
              case 522:
              case 531:
                return <WiRain style={{...style}} />
              case 611:
              case 612:
              case 613:
              case 615:
              case 616:
                return <WiSleet style={{...style}} />;
              case 803:
              case 804:
                return <WiCloudy style={{...style}} />;
              case 801:
              case 802:
                return <WiCloud style={{...style}} />;
              case 800:
                if(icon === "01n"){
                  return <WiNightClear style={{...style}} />
                }
                return <WiDaySunny style={{...style}} />;
              case 200:
              case 201:
              case 202:
              case 210:
              case 211:
              case 212:
              case 221:
              case 230:
              case 231:
              case 232:
                return <WiThunderstorm style={{...style}} />;
              case 300:
              case 301:
              case 302:
              case 310:
              case 311:
              case 312:
              case 313:
              case 314:
              case 321:
                return <WiSprinkle style={{...style}} />
              case 600:
              case 601:
              case 602:
              case 620:
              case 621:
              case 622:
                return <WiSnow style={{...style}} />;
              case 701:
              case 721:
              case 741:
                return <WiFog style={{...style}} />;
              case 711:
                return <WiSmoke style={{...style}} />;
              case 731:
              case 761:
              case 762:
                return <WiDust style={{...style}} />
              case 751:
                return <WiSandstorm style={{...style}} />
              case 771:
                return <WiStrongWind style={{...style}} />;
              case 781:
                return <WiTornado style={{...style}} />
            }
          }
        }}
      </AppContext.Consumer>
    </div>
  );
}
