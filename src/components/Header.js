import React, { useRef } from "react"
import AppContext from "../context/AppContext"

export default function Header() {
  const inputRef = useRef(null)
  return (
    <AppContext.Consumer>
      {(context) => (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="./index.html" className="navbar-brand">
            Weather online
          </a>
          <input
            type="text"
            name="placefilter"
            style={{ width: "228px" }}
            ref={inputRef}
            onInput={context.handleFilter}
          />
          <select
            name="placeselect"
            id="placeselect"
            style={{ width: "333px" }}
            onChange={(e) => {
              context.handleChange(e)
              inputRef.current.value = ""
            }}
          >
            {context.viewCities.map((city, index) => {
              if (city.key === context.selectedCity.key) {
                return (
                  <option key={index} value={city.key} selected>
                    {city.dropname}
                  </option>
                )
              }
              return (
                <option key={index} value={city.key}>
                  {city.dropname}
                </option>
              )
            })}
          </select>
          &nbsp;
          <button onClick={context.handleClick}>Refresh</button>
        </nav>
      )}
    </AppContext.Consumer>
  )
}
