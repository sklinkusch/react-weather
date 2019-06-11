/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import React from "react";
import AppContext from "../context/AppContext";
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
                return <i className="wi wi-rain" title="rain" />;
              case "sleet":
                return <i className="wi wi-sleet" title="sleet" />;
              case "cloudy":
                return <i className="wi wi-cloudy" title="cloudy" />;
              case "partly cloudy":
                return <i className="wi wi-cloud" title="partly cloudy" />;
              case "partly-cloudy-day":
                return (
                  <i className="wi wi-day-cloudy" title="partly-cloudy-day" />
                );
              case "partly-cloudy-night":
                return (
                  <i
                    className="wi wi-night-partly-cloudy"
                    title="partly-cloudy-night"
                  />
                );
              case "clear-day":
                return <i className="wi wi-day-sunny" title="clear-day" />;
              case "clear-night":
                return <i className="wi wi-night-clear" title="clear-night" />;
              case "sun":
                return <i className="wi wi-day-sunny" title="sun" />;
              case "thunderstorm":
                return (
                  <i className="wi wi-thunderstorm" title="thunderstorm" />
                );
              case "snow":
                return <i className="wi wi-snow" title="snow" />;
              case "fog":
                return <i className="wi wi-fog" title="fog" />;
              case "wind":
                return <i className="wi wi-strong-wind" title="wind" />;
            }
          }
        }}
      </AppContext.Consumer>
    </div>
  );
}
