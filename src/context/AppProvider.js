import React, { Component } from "react"
import AppContext from "./AppContext"
import cities from "cities15000-json"

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: cities
        .filter((city) => city.population >= 50000)
        .map((city) => {
          const { name, lat, lon, country, adminCode, id } = city
          return {
            name,
            dropname: this.getDropName(name, adminCode, country),
            key: id,
            lat,
            lng: lon,
          }
        })
        .sort((cityA, cityB) => {
          if (cityA.dropname.toLowerCase() < cityB.dropname.toLowerCase()) {
            return -1
          } else if (
            cityB.dropname.toLowerCase() < cityA.dropname.toLowerCase()
          ) {
            return +1
          } else {
            return 0
          }
        }),
      selectedCity: {
        name: "Berlin",
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
