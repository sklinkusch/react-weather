import React from "react"

const getCelsius = (fahrenheit) => {
  // const celsius = ((fahrenheit - 32) * 5) / 9;
  const celsius = fahrenheit
  // if (celsius.toFixed(0) === "-0") {
  // return `${(-1 * celsius).toFixed(0)} °C`;
  // } else {
  return `${celsius.toFixed(1)}°C`
  // }
}
const getFahrenheit = (celsius) => {
  const fahrenheit = (9 * celsius) / 5 + 32
  if (fahrenheit.toFixed(0) === "-0") {
    return `${(-1 * fahrenheit).toFixed(0)} °F`
  } else {
    return `${fahrenheit.toFixed(1)}°F`
  }
}
const getPercent = (decimal) => {
  return `${(100 * decimal).toFixed(0)}%`
}
const getDirection = (angle) => {
  if (angle === undefined) {
    return ""
  } else if (angle >= 0 && angle < 15) {
    return "N"
  } else if (angle >= 15 && angle < 30) {
    return "NNE"
  } else if (angle >= 30 && angle < 60) {
    return "NE"
  } else if (angle >= 60 && angle < 75) {
    return "ENE"
  } else if (angle >= 75 && angle < 105) {
    return "E"
  } else if (angle >= 105 && angle < 120) {
    return "ESE"
  } else if (angle >= 120 && angle < 150) {
    return "SE"
  } else if (angle >= 150 && angle < 165) {
    return "SSE"
  } else if (angle >= 165 && angle < 195) {
    return "S"
  } else if (angle >= 195 && angle < 210) {
    return "SSW"
  } else if (angle >= 210 && angle < 240) {
    return "SW"
  } else if (angle >= 240 && angle < 255) {
    return "WSW"
  } else if (angle >= 255 && angle < 285) {
    return "W"
  } else if (angle >= 285 && angle < 300) {
    return "WNW"
  } else if (angle >= 300 && angle < 330) {
    return "NW"
  } else if (angle >= 330 && angle < 345) {
    return "NNW"
  } else if (angle >= 345) {
    return "N"
  }
}
const getBeaufort = (speed) => {
  if (speed < 1.85) {
    return "0 Bft"
  } else if (speed < 7.41) {
    return "1 Bft"
  } else if (speed < 12.96) {
    return "2 Bft"
  } else if (speed < 20.37) {
    return "3 Bft"
  } else if (speed < 29.63) {
    return "4 Bft"
  } else if (speed < 40.74) {
    return "5 Bft"
  } else if (speed < 51.86) {
    return "6 Bft"
  } else if (speed < 62.97) {
    return "7 Bft"
  } else if (speed < 75.93) {
    return "8 Bft"
  } else if (speed < 88.9) {
    return "9 Bft"
  } else if (speed < 103.71) {
    return "10 Bft"
  } else if (speed < 118.53) {
    return "11 Bft"
  } else if (speed >= 118.53) {
    return "12 Bft"
  } else {
    return ""
  }
}
const getKph = (speed) => {
  if (speed) {
    return `${speed.toFixed(1)} kph`
  }
  return ""
}
const getMph = (speed) => {
  if (speed) {
    const mph = speed / 1.609344
    return `${mph.toFixed(1)} mph`
  }
  return ""
}
const getMiles = (length) => {
  const miles = length / 1.609344
  return `${miles.toFixed(1)} mi`
}
const getInch = (length) => {
  const inch = length / 25.4
  return `${inch.toFixed(4)}"`
}
const getTime = (timestamp, timezone) => {
  const date = new Date(timestamp * 1000)
  const isoString = date.toLocaleString("en-GB", { timeZone: timezone })
  const outputTime = isoString.substring(0, 17).replace(",", "")
  return outputTime
}
const getDate = (timestamp, timezone) => {
  const date = new Date(timestamp * 1000)
  const isoString = date.toLocaleString("en-GB", { timeZone: timezone })
  const isoDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }))
  const dayNumber = isoDate.getDay()
  const day = dayNumberToString(dayNumber)
  const outputDate = `${day} ${isoString.substring(0, 10)}`
  return outputDate
}

const dayNumberToString = (number) => {
  switch (number) {
    case 0:
      return "Sun"
    case 1:
      return "Mon"
    case 2:
      return "Tue"
    case 3:
      return "Wed"
    case 4:
      return "Thu"
    case 5:
      return "Fri"
    case 6:
      return "Sat"
    default:
      return number
  }
}

const getMoonPhase = (moon, latitude) => {
  const styleObject = { fontSize: "1em" }
  if (moon === 0 || moon === 1) {
    return <i className="wi wi-moon-new" style={{ ...styleObject }} />
  } else if (moon > 0 && moon < 0.25) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-waxing-crescent-3" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-waning-crescent-3" style={{ ...styleObject }} />
    )
  } else if (moon === 0.25) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-first-quarter" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-third-quarter" style={{ ...styleObject }} />
    )
  } else if (moon > 0.25 && moon < 0.5) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-waxing-gibbous-4" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-waning-gibbous-4" style={{ ...styleObject }} />
    )
  } else if (moon === 0.5) {
    return <i className="wi wi-moon-full" style={{ ...styleObject }} />
  } else if (moon > 0.5 && moon < 0.75) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-waning-gibbous-4" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-waxing-gibbous-4" style={{ ...styleObject }} />
    )
  } else if (moon === 0.75) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-third-quarter" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-first-quarter" style={{ ...styleObject }} />
    )
  } else if (moon > 0.75 && moon < 1) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-waning-crescent-3" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-waxing-crescent-3" style={{ ...styleObject }} />
    )
  }
  return null
}

export {
  getCelsius,
  getFahrenheit,
  getPercent,
  getDirection,
  getBeaufort,
  getKph,
  getMph,
  getMiles,
  getInch,
  getTime,
  getDate,
  getMoonPhase,
}
