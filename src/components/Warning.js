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
  }
}

export { WindWarning, PersistentPrecipWarning }