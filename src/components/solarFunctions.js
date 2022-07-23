export function getSunPosition(latitude, longitude, day, month, year, hour, minute, tzForm) {
  const deltaLong = 15
  const B = d2r(latitude)
  const hours = calcHours(hour, minute, tzForm)
  const T = yearday(day, month, year, hours)
  const L = 280.460 + 0.9856474 * T
  const Ln = normalizeDeg(L)
  const g = 357.528 + 0.09856003 * T
  const gn = normalizeDeg(g)
  const e = d2r(23.43929111 - 0.0000004 * T)
  const lambda = ((Math.sin(d2r(gn)))*1.915*Ln) + 0.020 * Math.sin(2*d2r(gn))
  const cosLambda = Math.cos(d2r(lambda))
  const declination = Math.asin(Math.sin(e)*Math.sin(d2r(lambda)))
  const rightAscensionRaw = Math.atan(Math.tan(d2r(lambda)*Math.cos(e)))
  const rightAscension = cosLambda < 0 ? rightAscensionRaw + Math.PI : rightAscensionRaw
  const tMidnight = yearday(day, month, year, 0)
  const tMidnightNorm = tMidnight / 36525
  const thetaGH = 6.697376 + 2400.05134 * tMidnightNorm
  const thetaG = deltaLong * thetaGH
  const theta = thetaG + longitude
  const thetaRad = d2r(theta)
  const tau = thetaRad - rightAscension
  const denominator = (Math.cos(tau)*Math.sin(B) - Math.tan(declination)*Math.cos(B))
  const azimuthRaw = Math.atan(Math.sin(tau)/denominator)
  const azimuthRaw2 = denominator < 0 ? azimuthRaw + Math.PI : azimuthRaw
  const azimuth = azimuthRaw2 > Math.PI ? azimuthRaw2 - (2*Math.PI) : azimuthRaw2 < (-1*Math.PI) ? azimuthRaw2 + (2*Math.PI) : azimuthRaw2 
  const elevation = Math.asin(Math.cos(declination)*Math.cos(tau)*Math.cos(B) + (Math.sin(declination)*Math.sin(B)))
  const azimuthDeg = r2d(azimuth)
  const elevationDeg = r2d(elevation)
  const formattedAzimuth = formatAngle(azimuthDeg)
  const formattedElevation = formatAngle(elevationDeg)
  return { azimuth: formattedAzimuth, elevation: formattedElevation }
}

function formatAngle(angle) {
  const sign = angle < 0 ? "-" : angle > 0 ? "+" : "±"
  const absolute = Math.abs(angle)
  const grad = Math.floor(absolute)
  const rest = Math.abs(absolute - grad)
  const arcmin = Math.floor(60 * rest)
  const remainder = Math.abs(60 * rest - arcmin)
  const arcsec = 60 * remainder
  return `${sign}${grad}° ${arcmin}’ ${arcsec.toFixed(2)}”`
} 

function r2d(radian) {
  return (radian * 180 / Math.PI)
}

function d2r(degree) {
  return (degree * Math.PI / 180)
}

function yearday (day, month, year, h) {
  let numdays = 0
  for(let y = 2000; y < year; y++) {
    numdays += leapyear(y) ? 366 : 365
  }
  const isLeap = leapyear(year)
  for(let m = 1; m < month; m++) {
    switch(m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        numdays += 31
        break
      case 4:
      case 6:
      case 9:
      case 11:
        numdays += 30
        break
      case 2:
        if (isLeap) {
          numdays += 29
        } else {
          numdays += 28
        }
        break
      default: 
        numdays += 30
    }
  }
  numdays += (day - 1)
  numdays += ((h - 12)/ 24)
  return numdays
}

function leapyear(year) {
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false
}

function normalizeDeg(angle) {
  let normAngle = angle
  while (normAngle < 0) {
    normAngle += 360
  }
  while (normAngle > 360) {
    normAngle -= 360
  }
  return normAngle
}

function calcHours(hour, minute, tzForm) {
  let res = 0
  res += (hour - tzForm)
  res += (minute / 60)
  return res
}