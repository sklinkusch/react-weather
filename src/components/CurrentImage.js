/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import React from "react";
import AppContext from "../context/AppContext";
import "weather-icons-lite/css/weather-icons-lite.min.css"
// import clear from '../images/clear.jpg';
// import clouds from '../images/clouds.jpg';
// import fog from '../images/fog.jpg';
// import rain from '../images/rain.jpg';
// import sleet from '../images/sleet.jpg';
// import snow from '../images/snow.jpg';
// import sun from '../images/sun.jpg';
// import thunderstorm from '../images/thunderstorm.jpg';
// import wind from '../images/wind.jpg';

export default function CurrentImage(props) {
  return (
    <div className="img-container" id="todayImage">
      <AppContext.Consumer>
        {context => {
          if (props.icon) {
            switch (props.icon) {
              case "rain":
                return <i className="wi wi-darksky-rain" title="rain" />;
              case "sleet":
                return <i className="wi wi-darksky-sleet" title="sleet" />;
              case "cloudy":
                return <i className="wi wi-darksky-cloudy" title="cloudy" />;
              case "partly cloudy":
                return <i className="wi wi-darksky-cloud" title="partly cloudy" />;
              case "partly-cloudy-day":
                return (
                  <i className="wi wi-darksky-partly-cloudy-day" title="partly-cloudy-day" />
                );
              case "partly-cloudy-night":
                return (
                  <i
                    className="wi wi-darksky-partly-cloudy-night"
                    title="partly-cloudy-night"
                  />
                );
              case "clear-day":
                return <i className="wi wi-darksky-clear-day" title="clear-day" />;
              case "clear-night":
                return <i className="wi wi-darksky-clear-night" title="clear-night" />;
              case "sun":
                return <i className="wi wi-darksky-clear-day" title="sun" />;
              case "thunderstorm":
                return (
                  <i className="wi wi-darksky-thunderstorm" title="thunderstorm" />
                );
              case "snow":
                return <i className="wi wi-darksky-snow" title="snow" />;
              case "fog":
                return <i className="wi wi-darksky-fog" title="fog" />;
              case "wind":
                return <i className="wi wi-darksky-wind" title="wind" />;
            }
          }
        }}
      </AppContext.Consumer>
    </div>
  );
}
