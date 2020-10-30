import React from "react"
import { WiWindDeg, WiMoonNew, WiWindBeaufort0, WiWindBeaufort1, WiWindBeaufort2, WiWindBeaufort3, WiWindBeaufort4, WiWindBeaufort5, WiWindBeaufort6, WiWindBeaufort7, WiWindBeaufort8, WiWindBeaufort9, WiWindBeaufort10, WiWindBeaufort11, WiWindBeaufort12 } from "weather-icons-react"

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
  const styleObject = { fontSize: "1.6em" }
  if (speed < 1.85) {
    return <WiWindBeaufort0 style={{...styleObject}} />
  } else if (speed < 7.41) {
    return <WiWindBeaufort1 style={{...styleObject}} />
  } else if (speed < 12.96) {
    return <WiWindBeaufort2 style={{...styleObject}} />
  } else if (speed < 20.37) {
    return <WiWindBeaufort3 style={{...styleObject}} />
  } else if (speed < 29.63) {
    return <WiWindBeaufort4 style={{...styleObject}} />
  } else if (speed < 40.74) {
    return <WiWindBeaufort5 style={{...styleObject}} />
  } else if (speed < 51.86) {
    return <WiWindBeaufort6 style={{...styleObject}} />
  } else if (speed < 62.97) {
    return <WiWindBeaufort7 style={{...styleObject}} />
  } else if (speed < 75.93) {
    return <WiWindBeaufort8 style={{...styleObject}} />
  } else if (speed < 88.9) {
    return <WiWindBeaufort9 style={{...styleObject}} />
  } else if (speed < 103.71) {
    return <WiWindBeaufort10 style={{...styleObject}} />
  } else if (speed < 118.53) {
    return <WiWindBeaufort11 style={{...styleObject}} />
  } else if (speed >= 118.53) {
    return <WiWindBeaufort12 style={{...styleObject}} />
  } else {
    return "?"
  }
}
const getKph = (speed) => {
  if (speed) {
    return `${speed.toFixed(1)} km/h`
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
const getVelocity = (speed, unit) => {
  if (unit === "celsius"){
    return getKph(speed)
  } else {
    return getMph(speed)
  }
}

export { getDirection, getBeaufort, getKph, getMph, getVelocity }