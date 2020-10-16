import React from "react"
import { WiWindDeg, WiMoonNew } from "weather-icons-react"

const getDirection = (angle) => {
  if(typeof angle === "number"){
    const turnAngle = (180 + angle) % 360
    const styleObject = { fontSize: "1.5em", rotate: `${turnAngle}deg` }
    return <WiWindDeg style={{...styleObject}} />
  }
  const styleObject = { fontSize: "1.5em"}
  return <WiMoonNew style={{...styleObject}} />
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

export { getDirection, getBeaufort, getKph, getMph }