/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import React from 'react'
import AppContext from '../context/AppContext';
import clear from '../images/clear.jpg';
import clouds from '../images/clouds.jpg';
import fog from '../images/fog.jpg';
import rain from '../images/rain.jpg';
import sleet from '../images/sleet.jpg';
import snow from '../images/snow.jpg';
import sun from '../images/sun.jpg';
import thunderstorm from '../images/thunderstorm.jpg';
import wind from '../images/wind.jpg';

export default function CurrentImage(props) {
  return (
    <div className="img-container" id="todayImage">
      <AppContext.Consumer>
        {context => {
          if (props.icon) {
            switch (props.icon) {
              case "rain":
                return (<img src={rain} alt="rain" />);
                break;
              case "sleet":
                return (<img src={sleet} alt="sleet" />);
                break;
              case "cloudy":
                return (<img src={clouds} alt="cloudy" />);
                break;
              case "partly cloudy":
                return (<img src={clouds} alt="partly cloudy" />);
                break;
              case "partly-cloudy-day":
                return (<img src={clouds} alt="partly-cloudy-day" />);
                break;
              case "partly-cloudy-night":
                return (<img src={clouds} alt="partly-cloudy-night" />);
                break;
              case "clear-day":
                return (<img src={clear} alt="clear-day" />);
                break;
              case "clear-night":
                return (<img src={clear} alt="clear-night" />);
                break;
              case "sun":
                return (<img src={sun} alt="sun" />);
                break;
              case "thunderstorm":
                return (<img src={thunderstorm} alt="thunderstorm" />);
                break;
              case "snow":
                return (<img src={snow} alt="snow" />);
                break;
              case "fog":
                return (<img src={fog} alt="fog" />);
                break;
              case "wind":
                return (<img src={wind} alt="wind" />);
                break;
            }
          }
        }
        }
      </AppContext.Consumer>
    </div>
  )
}
