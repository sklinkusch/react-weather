import React, { useRef, useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { DarkSkyContext, OWMContext } from "../context/AppContext"
import {Collapse, Navbar, NavbarToggler, NavbarBrand} from "reactstrap"
/* eslint-disable react-hooks/exhaustive-deps */

/*function Header() {
  const inputRef = useRef(null)
  const location = useLocation()
  const { pathname } = location
  const { id } = useParams()
  const contextName = pathname.includes("own") ? OWMContext : DarkSkyContext
  const weatherContext = useContext(contextName)
  const remainingCities = weatherContext.cities.filter(
    city => city.key !== weatherContext.selectedCity.key
  )
  const [viewData, setViewData] = useState([
    weatherContext.selectedCity,
    ...remainingCities
  ])
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => (setIsOpen(!isOpen))
  const selectCity = (e) => {
    const key = e.target.value
    const currentCity = weatherContext.cities.filter(city => city.key === key)[0]
    weatherContext.handleChange(currentCity)
    const remaining = weatherContext.cities.filter((city) => city.key !== key)
    const newViewCities = [currentCity, ...remaining]
    inputRef.current.value = ""
    setViewData(newViewCities)
  }
  const selectUnit = (e) => {
    const unit = e.target.value
    weatherContext.setUnit(unit)
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
  const Context = pathname.includes("owm") ? OWMContext : DarkSkyContext
  return (
    <Context.Consumer>
      {context => (
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand></NavbarBrand>
        </Navbar>
      )}
    </Context.Consumer>
  )
}*/

export function HeaderDarkSky() {
  const inputRef = useRef(null)
  const params = useParams()
  const navigate = useNavigate()
  const weatherContext = useContext(DarkSkyContext)
  const [viewData, setViewData] = useState([...weatherContext.cities])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const selection = params.hasOwnProperty("id") && typeof params.id === 'string' && params.id.length > 0
      ? weatherContext.cities.find(city => city.key === params.id)
      : weatherContext.cities.find(city => city.key === "2950159")
    weatherContext.handleChange(selection)
    const remainingCities = weatherContext.cities.filter(city => city.key !== selection.key)
    setViewData([selection, ...remainingCities])
  }, [])
  const toggleOpen = () => {setIsOpen(!isOpen)}
  const selectCity = (e) => {
    const key = e.target.value
    navigate(`/darksky/${key}`)
    const currentCity = weatherContext.cities.filter(
      (city) => city.key === key
    )[0]
    weatherContext.handleChange(currentCity)
    const remaining = weatherContext.cities.filter((city) => city.key !== key)
    const newViewCities = [currentCity, ...remaining]
    inputRef.current.value = ""
    setViewData(newViewCities)
  }
  const selectUnit = (e) => {
    const unit = e.target.value
    weatherContext.setUnit(unit)
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
    <DarkSkyContext.Consumer>
      {(context) => (
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">
            Weather online
          </NavbarBrand>
          <NavbarToggler onClick={toggleOpen} />
          <Collapse isOpen={isOpen} navbar>
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
            value={context.selectedCity}
            onChange={selectCity}
          >
            {viewData.map((city, index) => {
              return (
                <option key={index} value={city.key}>
                  {city.dropname}
                </option>
              )
            })}
          </select>
          &nbsp;
          <button onClick={context.handleClick}>Refresh</button>
          <select value={context.unit} onChange={selectUnit}>
            <option value="celsius">°C</option>
            <option value="fahrenheit">°F</option>
          </select>
          </Collapse>
        </Navbar>
      )}
    </DarkSkyContext.Consumer>
  )
}

export function HeaderOWM() {
  const inputRef = useRef(null)
  const params = useParams()
  const navigate = useNavigate()
  const weatherContext = useContext(OWMContext)
  const [viewData, setViewData] = useState([...weatherContext.cities])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const selection = params.hasOwnProperty("id") && typeof params.id === 'string' && params.id.length > 0
      ? weatherContext.cities.find(city => city.key === params.id)
      : weatherContext.cities.find(city => city.key === "2950159")
    weatherContext.handleChange(selection)
    const remainingCities = weatherContext.cities.filter(city => city.key !== selection.key)
    setViewData([selection, ...remainingCities])
  }, [])
  const toggleOpen = () => {setIsOpen(!isOpen)}
  const selectCity = (e) => {
    const key = e.target.value
    navigate(`/owm/${key}`)
    const currentCity = weatherContext.cities.filter(
      (city) => city.key === key
    )[0]
    weatherContext.handleChange(currentCity)
    const remaining = weatherContext.cities.filter((city) => city.key !== key)
    const newViewCities = [currentCity, ...remaining]
    inputRef.current.value = ""
    setViewData(newViewCities)
  }
  const selectUnit = (e) => {
    const unit = e.target.value
    weatherContext.setUnit(unit)
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
    <OWMContext.Consumer>
      {(context) => (
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">
            Weather online
          </NavbarBrand>
          <NavbarToggler onClick={toggleOpen} />
          <Collapse isOpen={isOpen} navbar>
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
            value={context.selectedCity}
            onChange={selectCity}
          >
            {viewData.map((city, index) => {
              return (
                <option key={index} value={city.key}>
                  {city.dropname}
                </option>
              )
            })}
          </select>
          &nbsp;
          <button onClick={context.handleClick}>Refresh</button>
          <select value={context.unit} onChange={selectUnit}>
            <option value="celsius">°C</option>
            <option value="fahrenheit">°F</option>
          </select>
          </Collapse>
        </Navbar>
      )}
    </OWMContext.Consumer>
  )
}
