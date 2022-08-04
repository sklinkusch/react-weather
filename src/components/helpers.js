
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

const getTemperature = (temperature, unit) => {
  if (unit === "celsius"){
    return getCelsius(temperature)
  } else {
    return getFahrenheit(temperature)
  }
}

const getPercent = (decimal) => {
  return `${(100 * decimal).toFixed(0)}%`
}

const getKilometers = (length) => {
  return `${length.toFixed(1)} km`
}

const getMiles = (length) => {
  const miles = length / 1.609344
  return `${miles.toFixed(1)} mi`
}

const getLength = (length, unit) => {
  if(unit === "celsius"){
    return getKilometers(length)
  } else {
    return getMiles(length)
  }
}
const getMm = (length) => {
  return `${length.toFixed(2)} mm`
}

const getInch = (length) => {
  const inch = length / 25.4
  return `${inch.toFixed(4)}"`
}

const getPrecip = (length, unit) => {
  if(unit === "celsius"){
    return getMm(length)
  } else {
    return getInch(length)
  }
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
  let deg = Math.floor(abs)
  const degRem = abs - deg
  const minRaw = 60 * degRem
  let min = Math.floor(minRaw)
  const minRem = minRaw - min
  let sec = (60 * minRem).toFixed(1)
  min = sec === '60.0' ? min + 1 : min
  sec = sec === '60.0' ? '0.0' : sec
  deg = min === 60 ? deg + 1 : deg
  min = min === 60 ? 0 : min
  const string = `${deg}° ${min}' ${sec}" ${sign}`
  return string
}

const getMbar = (pressure) => {
  return `${pressure.toFixed(1)} mbar`
}

const getInHg = (pressure) => {
  const pressureConverted = pressure / 33.86389
  return `${pressureConverted.toFixed(2)} inHg`
}

const getPressure = (pressure, unit) => {
  if(unit === "celsius"){
    return getMbar(pressure)
  } else {
    return getInHg(pressure)
  }
}

export {
  getCelsius,
  getFahrenheit,
  getTemperature,
  getPercent,
  getMiles,
  getLength,
  getInch,
  getPrecip,
  getTime,
  getDate,
  getTimezone,
  getCoordinates,
  getPressure
}
