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
    if (!params.hasOwnProperty("id") || typeof params.id !== 'string' || params.id.length <= 0) {
      navigate(`/darksky/2950159`)
    }
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
  const selectSource = (e) => {
    const nextSrc = e.target.value
    const key = weatherContext.selectedCity.key
    if (nextSrc === "OWM") navigate(`/owm/${key}`)
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
            <InputBox inputRef={inputRef} onInputHandler={filterData} />
            <PlaceSelector city={context.selectedCity} onChangeHandler={selectCity} cityList={viewData} />
            &nbsp;
            <RefreshButton onClickHandler={context.handleClick} />
            <UnitSelector unit={context.unit} onSelectHandler={selectUnit} />
            <SourceSelector source="DS" onChangeHandler={selectSource} />
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
      : weatherContext.cities.find(city => city.key === "2950159")``
    if (!params.hasOwnProperty("id") || typeof params.id !== 'string' || params.id.length <= 0) {
      navigate(`/owm/2950159`)
    }
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
  const selectSource = (e) => {
    const nextSrc = e.target.value
    const key = weatherContext.selectedCity.key
    if (nextSrc === "DS") navigate(`/darksky/${key}`)
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
            <InputBox inputRef={inputRef} onInputHandler={filterData} />
            <PlaceSelector city={context.selectedCity} onChangeHandler={selectCity} cityList={viewData} />
            &nbsp;
            <RefreshButton onClickHandler={context.handleClick} />
            <UnitSelector unit={context.unit} onSelectHandler={selectUnit} />
            <SourceSelector source="OWM" onChangeHandler={selectSource} />
          </Collapse>
        </Navbar>
      )}
    </OWMContext.Consumer>
  )
}

function InputBox ({ inputRef, onInputHandler }) {
  return (
    <input
      type="text"
      name="placefilter"
      ref={inputRef}
      onInput={onInputHandler}
      style={{ 
        width: "228px",
        height: "30px",
        backgroundColor: "#444444",
        color: "white",
        border: "2px solid white",
        marginInline: "8px"
      }}
    />
  )
}

function PlaceSelector ({ city, onChangeHandler, cityList }) {
  return (
    <select
      name="placeselect"
      id="placeselect"
      value={city}
      onChange={onChangeHandler}
      style={{
        width: "333px",
        height: "30px",
        backgroundColor: "transparent",
        color: "white",
        border: "2px solid white",
        marginInline: "8px"
      }}
    >
      {Array.isArray(cityList) && cityList.length > 0 && cityList.map(singleCity => (
        <option value={singleCity.key} style={{ color: "white" }}>{singleCity.dropname}</option>
      ))}
    </select>
  )
}

function RefreshButton ({ onClickHandler }) {
  return (
    <button 
      onClick={onClickHandler} 
      style={{ 
        border: "2px solid white", 
        backgroundColor: "transparent", 
        color: "white", 
        marginLeft: "8px", 
        marginRight: "8px", 
        height: "30px", 
        width: "70px" 
      }}
    >
        Refresh
    </button>
  )
}

function UnitSelector ({ unit, onSelectHandler }) {
  return (
    <select 
      value={unit} 
      onChange={onSelectHandler}
      style={{
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        marginInline: "8px",
        width: "50px"
      }}
    >
      <option value="celsius">°C</option>
      <option value="fahrenheit">°F</option>
    </select>
  )
}

function SourceSelector ({ source, onChangeHandler }) {
  const sources = source === 'DS' ? ['DS', 'OWM'] : ['OWM', 'DS']
  return (
    <select 
      value={source} 
      onChange={onChangeHandler}
      style={{
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        marginInline: "8px",
        width: "75px"
      }}
    >
      {sources.map(singleSource => (<option value={singleSource} key={singleSource}>{singleSource}</option>))}
    </select>
  )
}