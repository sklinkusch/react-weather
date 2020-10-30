import React from 'react'

const PrecipType = ({type = undefined}) => {
  if(type){
    return (
    <li>
      precipitation type: {type}
    </li>
    )
  }
  return ""
}

export default PrecipType