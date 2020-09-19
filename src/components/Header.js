import React, { useRef, useContext, useState } from "react"
import AppContext from "../context/AppContext"

export default function Header() {
  const inputRef = useRef(null)
  const weatherContext = useContext(AppContext)
  const remainingCities = weatherContext.cities.filter(
    (city) => city.key !== weatherContext.selectedCity.key
  )
  const [viewData, setViewData] = useState([
    weatherContext.selectedCity,
    ...remainingCities,
  ])
  const selectCity = (e) => {
    const key = e.target.value
    const currentCity = weatherContext.cities.filter(
      (city) => city.key === key
    )[0]
    weatherContext.handleChange(currentCity)
    const remaining = weatherContext.cities.filter((city) => city.key !== key)
    const newViewCities = [currentCity, ...remaining]
    inputRef.current.value = ""
    setViewData(newViewCities)
  }
  const filterData = (e) => {
    const filterValue = e.target.value
    const firstFilteredCity = weatherContext.cities.filter(
      (city) => city.dropname !== weatherContext.selectedCity.dropname
    )
    const filteredCities =
      filterValue && filterValue !== ""
        ? weatherContext.cities.filter((city) =>
            city.name.toLowerCase().includes(filterValue.toLowerCase())
          )
        : firstFilteredCity.slice()
    setViewData([weatherContext.selectedCity, ...filteredCities])
  }
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
            onInput={filterData}
          />
          <select
            name="placeselect"
            id="placeselect"
            style={{ width: "333px" }}
            onChange={selectCity}
          >
            {viewData.map((city, index) => {
              return index === 0 ? (
                <option key={index} value={city.key} selected>
                  {city.dropname}
                </option>
              ) : (
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
