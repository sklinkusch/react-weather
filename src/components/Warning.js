import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

const Warning = ({title = undefined, style}) => {
  return (
      <FontAwesomeIcon icon={faExclamationTriangle} style={style} title={title} />
  )
}

const WindWarning = ({velocity}) => {
  // 7 Bft
  if(velocity >= 51.86 && velocity < 62.97) {
    return <Warning style={{ color: "yellow" }} title="High wind" />
  }
  // 8 Bft
  if(velocity >= 62.97 && velocity < 75.93){
    return <Warning style={{ color: "orange" }} title="Gale" />
  }
  // 9 Bft
  if(velocity >= 75.93 && velocity < 88.90){
    return <Warning style={{ color: "orange"}} title="Severe gale" />
  }
  // 10 Bft
  if(velocity >= 88.90 && velocity < 103.71){
    return <Warning style={{ color: "orange"}} title="Storm" />
  }
  // 11 Bft
  if(velocity >= 103.71 && velocity < 118.53){
    return <Warning style={{color: "red"}} title="Violent storm" />
  }
  // 12 Bft
  if(velocity >= 118.53 && velocity < 140){
    return <Warning style={{color: "red"}} title="Hurricane force" />
  }
  // extreme storms
  if(velocity >= 140){
    return <Warning style={{color: "purple"}} title="Extreme hurricane force" />
  }
  return ""
}

const PersistentPrecipWarning = ({precipType, precipIntensity}) => {
  if(precipType === "rain" || precipType === "sleet"){
    if(precipIntensity >= 30 && precipIntensity < 50){
      return <Warning style={{color: "orange"}} title="Persistent rain" />
    } else if(precipIntensity >= 50 && precipIntensity < 80){
      return <Warning style={{color: "red"}} title="Massive persistent rain" />
    } else if(precipIntensity >= 80){
      return <Warning style={{color: "purple"}} title="Extreme persistent rain" />
    } else {
      return ""
    }
  } else if (precipType === "snow"){
    if(precipIntensity > 0 && precipIntensity <= 150){
      return <Warning style={{color: "yellow"}} title="Light snowfall" />
    } else if(precipIntensity > 150 && precipIntensity <= 300 ) {
      return <Warning style={{color: "orange"}} title="Snowfall" />
    } else if(precipIntensity > 300 && precipIntensity <= 400) {
      return <Warning style={{color: "red"}} title="Heavy snowfall" />
    } else if(precipIntensity > 400) {
      return <Warning style={{color: "purple"}} title="Extreme snowfall" />
    } else {
      return ""
    }
  } else {
    return ""
  }
}

const RainWarning = ({precipIntensity}) => {
  if(precipIntensity >= 15 && precipIntensity <= 25){
    return <Warning style={{color: "orange"}} title="Heavy rain" />
  } else if (precipIntensity > 25 && precipIntensity <= 40){
    return <Warning style={{color: "red"}} title="Very heavy rain" />
  } else if (precipIntensity > 40){
    return <Warning style={{color: "purple"}} title="Extremely heavy rain" />
  } else {
    return ""
  }
}

const SnowWarning = () => {
  return <Warning style={{color: "yellow"}} title="Snow" />
}

const LowTemperatureWarning = ({temperature}) => {
  if(temperature >= -10 && temperature <= 0){
    return <Warning style={{color: "yellow"}} title="Frost" />
  } else if(temperature < -10){
    return <Warning style={{color: "orange"}} title="Severe frost" />
  } else {
    return ""
  }
}

const HighTemperatureWarning = ({temperature}) => {
  if(temperature >= 32 && temperature <= 38){
    return <Warning style={{color: "yellow"}} title="Heavy thermal pollution" />
  } else if(temperature > 38){
    return <Warning style={{color: "orange"}} title="Extreme thermal pollution" />
  } else {
    return ""
  }
}

const HotAndHumidWarning = ({temperature}) => {
  if(temperature >= 16) {
    return <Warning style={{color: "green"}} title="hot and humid" />
  }
  return ""
}

const FogWarning = ({visibility}) => {
  if(visibility <= 0.150){
    return <Warning style={{color: "yellow"}} title="fog" />
  }
  return ""
}

const UvWarning = ({uvIndex}) => {
  if(uvIndex >= 3 && uvIndex <= 5){
    return <Warning style={{color: "yellow"}} title="moderate risk of harm from sun exposure" />
  }
  if(uvIndex === 6 || uvIndex === 7){
    return <Warning style={{color: "orange"}} title="high risk of harm from sun exposure" />
  }
  if(uvIndex >= 8 && uvIndex <= 10){
    return <Warning style={{color: "red"}} title="very high risk of harm from sun exposure" />
  }
  if(uvIndex >= 11){
    return <Warning style={{color: "purple"}} title="extreme risk of harm from sun exposure" />
  }
  return ""
}

const OtherWarning = ({id = null, icon = "", summary = "", temperature = 10, precipIntensity = 0}) => {
  switch(id){
    case 200:
      return <Warning style={{color: "yellow" }} title="thunderstorm with light rain" />
    case 201:
      return <Warning style={{color: "orange"}} title="thunderstorm with rain" />
    case 202:
      return <Warning style={{color: "red"}} title="thunderstorm with heavy rain" />
    case 210:
      return <Warning style={{color: "yellow"}} title="light thunderstorm" />
    case 211:
      return <Warning style={{color: "yellow"}} title="thunderstorm" />
    case 212:
      return <Warning style={{color: "red"}} title="heavy thunderstorm" />
    case 221:
      return <Warning style={{color: "red"}} title="ragged thunderstorm" />
    case 230:
      return <Warning style={{color: "yellow"}} title="thunderstorm with light drizzle" />
    case 231:
      return <Warning style={{color: "yellow"}} title="thunderstorm with drizzle" />
    case 232:
      return <Warning style={{color: "orange"}} title="thunderstorm with heavy drizzle" />
    case 502:
      return <Warning style={{color: "orange"}} title="heavy intensity rain" />
    case 503:
      return <Warning style={{color: "red"}} title="very heavy rain" />
    case 504:
      return <Warning style={{color: "purple"}} title="extreme rain" />
    case 511:
      return <Warning style={{color: "red"}} title="freezing rain" />
    case 522:
      return <Warning style={{color: "orange"}} title="heavy intensity shower rain" />
    case 531:
      return <Warning style={{color: "red"}} title="ragged shower rain" />
    case 600:
      return <Warning style={{color: "yellow"}} title="light snow" />
    case 601:
      return <Warning style={{color: "orange"}} title="snow" />
    case 602:
      return <Warning style={{color: "red"}} title="heavy snow" />
    case 620:
      return <Warning style={{color: "yellow"}} title="light shower snow" />
    case 621:
      return <Warning style={{color: "orange"}} title="shower snow" />
    case 622:
      return <Warning style={{color: "red"}} title="heavy shower snow" />
    case 701:
      return <Warning style={{color: "yellow"}} title="mist" />
    case 711:
      return <Warning style={{color: "green"}} title="smoke" />
    case 721:
      return <Warning style={{color: "yellow"}} title="haze" />
    case 731:
      return <Warning style={{color: "green"}} title="dust/sand whirls" />
    case 741:
      return <Warning style={{color: "yellow"}} title="fog" />
    case 751:
      return <Warning style={{color: "green"}} title="sand" />
    case 761:
      return <Warning style={{color: "green"}} title="dust" />
    case 762:
      return <Warning style={{color: "green"}} title="volcanic ash" />
    case 771:
      return <Warning style={{color: "orange"}} title="squall" />
    case 781:
      return <Warning style={{color: "purple"}} title="tornado" />
    default:
      return null
  }
}

export { FogWarning, HotAndHumidWarning, WindWarning, PersistentPrecipWarning, RainWarning, LowTemperatureWarning, HighTemperatureWarning, UvWarning, OtherWarning, SnowWarning }