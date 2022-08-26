import React, { Component } from "react"
import { DarkSkyContext, OWMContext } from "./AppContext"
import allCities from "cities15000-json"

export class DarkSkyProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: this.getCities(allCities),
      selectedCity: {
        name: "Berlin",
        adminCode: 16,
        country: "DE",
        dropname: "Berlin (DE)",
        key: "2950159",
        lat: "52.52437",
        lng: "13.41053",
      },
      handleChange: (city) => {
        this.setState({
          selectedCity: city,
        })
        this.fetchData(city)
      },
      weatherData: {},
      handleClick: () => {
        this.fetchData(this.state.selectedCity)
      },
      unit: "",
      setUnit: myUnit => {
        localStorage.setItem('unit', myUnit)
        this.setState({unit: myUnit})
      }
    }
  }
  setInitialUnit = () => {
    const initialUnit = localStorage.getItem('unit')
    if(initialUnit){
      this.setState({unit: initialUnit})
    } else {
      localStorage.setItem('unit', 'celsius')
      this.setState({unit: "celsius"})
    }
  }
  getCities = fullList => {
    const shortArray = fullList.filter(city => city.population >= 25000).map(city => {
      const { id, name, lat, lon, country, adminCode } = city
      const newCity = { key: id, name, lat, lng: lon, country, adminCode, dropname: this.getDropName(name, adminCode, country) }
      return newCity
    }).sort((cityA, cityB) => {
      if (cityA.dropname.toLowerCase() < cityB.dropname.toLowerCase()) {
        return -1
      } else if (
        cityB.dropname.toLowerCase() < cityA.dropname.toLowerCase()
      ) {
        return +1
      } else {
        return 0
      }
    })
    return shortArray
  }
  fetchData = (selectedCity) => {
    if (selectedCity) {
      const { lat, lng } = selectedCity
      const url = `https://darksky.sklinkusch.now.sh/?${lat},${lng}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ weatherData: data })
        })
        .catch((error) => console.error)
    }
  }
  getDropName = (name, adminCode, country) => {
    if (country === "US") {
      return `${name}, ${adminCode} (${country})`
    } else {
      return `${name} (${country})`
    }
  }
  componentDidMount() {
    this.setInitialUnit()
    this.fetchData(this.state.selectedCity)
  }
  render() {
    return (
      <DarkSkyContext.Provider value={this.state}>
        {this.props.children}
      </DarkSkyContext.Provider>
    )
  }
}

export class OWMProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: this.getCities(allCities),
      selectedCity: {
        name: "Berlin",
        adminCode: 16,
        country: "DE",
        dropname: "Berlin (DE)",
        key: "2950159",
        lat: "52.52437",
        lng: "13.41053",
      },
      handleChange: (city) => {
        this.setState({
          selectedCity: city,
        })
        this.fetchData(city)
      },
      weatherData: {},
      handleClick: () => {
        this.fetchData(this.state.selectedCity)
      },
      unit: "",
      setUnit: myUnit => {
        localStorage.setItem('unit', myUnit)
        this.setState({unit: myUnit})
      }
    }
  }
  setInitialUnit = () => {
    const initialUnit = localStorage.getItem('unit')
    if(initialUnit){
      this.setState({unit: initialUnit})
    } else {
      localStorage.setItem('unit', 'celsius')
      this.setState({unit: "celsius"})
    }
  }
  getCities = fullList => {
    const shortArray = fullList.filter(city => city.population >= 25000).map(city => {
      const { id, name, lat, lon, country, adminCode } = city
      const newCity = { key: id, name, lat, lng: lon, country, adminCode, dropname: this.getDropName(name, adminCode, country) }
      return newCity
    }).sort((cityA, cityB) => {
      if (cityA.dropname.toLowerCase() < cityB.dropname.toLowerCase()) {
        return -1
      } else if (
        cityB.dropname.toLowerCase() < cityA.dropname.toLowerCase()
      ) {
        return +1
      } else {
        return 0
      }
    })
    return shortArray
  }
  fetchData = (selectedCity) => {
    if (selectedCity) {
      const { lat, lng } = selectedCity
      const url = `https://owm-proxy.vercel.app/?lat=${lat}&lon=${lng}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ weatherData: data })
        })
        .catch((error) => console.error)
    }
  }
  getDropName = (name, adminCode, country) => {
    if (country === "US") {
      return `${name}, ${adminCode} (${country})`
    } else {
      return `${name} (${country})`
    }
  }
  componentDidMount() {
    this.setInitialUnit()
    this.fetchData(this.state.selectedCity)
  }
  render() {
    return (
      <OWMContext.Provider value={this.state}>
        {this.props.children}
      </OWMContext.Provider>
    )
  }
}
