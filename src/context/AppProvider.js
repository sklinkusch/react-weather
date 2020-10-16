import React, { Component } from "react"
import AppContext from "./AppContext"
import cities from "cities15000-json"

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: this.getCities(cities),
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
    this.fetchData(this.state.selectedCity)
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
