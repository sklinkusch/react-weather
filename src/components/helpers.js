import React from "react"
import "weather-icons-lite/css/weather-icons-lite.min.css"

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
      <i className="wi wi-moon-wax-cres" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-wan-cres" style={{ ...styleObject }} />
    )
  } else if (moon === 0.25) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-first-quart" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-third-quart" style={{ ...styleObject }} />
    )
  } else if (moon > 0.25 && moon < 0.5) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-wax-gibb" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-wan-gibb" style={{ ...styleObject }} />
    )
  } else if (moon === 0.5) {
    return <i className="wi wi-moon-full" style={{ ...styleObject }} />
  } else if (moon > 0.5 && moon < 0.75) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-wan-gibb" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-wax-gibb" style={{ ...styleObject }} />
    )
  } else if (moon === 0.75) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-third-quart" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-first-quart" style={{ ...styleObject }} />
    )
  } else if (moon > 0.75 && moon < 1) {
    return latitude >= 0 ? (
      <i className="wi wi-moon-wan-cres" style={{ ...styleObject }} />
    ) : (
      <i className="wi wi-moon-wax-cres" style={{ ...styleObject }} />
    )
  }
  return null
}

const getTimezone = (offset) => {
  const sign = offset >= 0 ? "+" : "-"
  const absolute = Math.abs(offset)
  let hours = Math.floor(absolute)
  hours = hours < 10 ? `0${hours}` : `${hours}`
  const remainder = absolute - hours
  let minutes = 60 * remainder
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const string = `UTC${sign}${hours}:${minutes}`
  return string
}

const getCoordinates = (value, identifier) => {
  let sign
  if (identifier === "lat") {
    sign = value > 0 ? "N" : value < 0 ? "S" : ""
  } else if (identifier === "lng") {
    sign = value > 0 ? "E" : value < 0 ? "W" : ""
  } else {
    sign = ""
  }
  const abs = Math.abs(value)
  const deg = Math.floor(abs)
  const degRem = abs - deg
  const minRaw = 60 * degRem
  const min = Math.floor(minRaw)
  const minRem = minRaw - min
  const sec = 60 * minRem.toFixed(1)
  const string = `${deg}° ${min}' ${sec}" ${sign}`
  return string
}

export {
  getCelsius,
  getFahrenheit,
  getPercent,
  getMiles,
  getInch,
  getTime,
  getDate,
  getMoonPhase,
  getTimezone,
  getCoordinates,
}
