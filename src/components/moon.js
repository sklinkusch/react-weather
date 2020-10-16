import React from 'react'
import { WiMoonNew, 
  WiMoonWaxingCrescent4 as WiMoonWaxCres, 
  WiMoonWaxingGibbous4 as WiMoonWaxGibb, 
  WiMoonFirstQuarter, 
  WiMoonThirdQuarter, 
  WiMoonWaningCrescent2 as WiMoonWanCres, 
  WiMoonWaningGibbous3 as WiMoonWanGibb, 
  WiMoonFull } from "weather-icons-react"

const getMoonPhase = (moon, latitude) => {
  const styleObject = { fontSize: "1.5em" }
  if (moon === 0 || moon === 1) {
    return <WiMoonNew style={{ ...styleObject }} />
  } else if (moon > 0 && moon < 0.25) {
    return latitude >= 0 ? (
      <WiMoonWaxCres style={{ ...styleObject }} />
    ) : (
      <WiMoonWanCres style={{ ...styleObject }} />
    )
  } else if (moon === 0.25) {
    return latitude >= 0 ? (
      <WiMoonFirstQuarter style={{ ...styleObject }} />
    ) : (
      <WiMoonThirdQuarter style={{ ...styleObject }} />
    )
  } else if (moon > 0.25 && moon < 0.5) {
    return latitude >= 0 ? (
      <WiMoonWaxGibb style={{ ...styleObject }} />
    ) : (
      <WiMoonWanGibb style={{ ...styleObject }} />
    )
  } else if (moon === 0.5) {
    return <WiMoonFull style={{ ...styleObject }} />
  } else if (moon > 0.5 && moon < 0.75) {
    return latitude >= 0 ? (
      <WiMoonWanGibb style={{ ...styleObject }} />
    ) : (
      <WiMoonWaxGibb style={{ ...styleObject }} />
    )
  } else if (moon === 0.75) {
    return latitude >= 0 ? (
      <WiMoonThirdQuarter style={{ ...styleObject }} />
    ) : (
      <WiMoonFirstQuarter style={{ ...styleObject }} />
    )
  } else if (moon > 0.75 && moon < 1) {
    return latitude >= 0 ? (
      <WiMoonWanCres style={{ ...styleObject }} />
    ) : (
      <WiMoonWaxCres style={{ ...styleObject }} />
    )
  }
  return null
}

export { getMoonPhase }