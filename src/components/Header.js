import React from 'react'
import AppContext from '../context/AppContext';

export default function Header() {
  return (
    <AppContext.Consumer>
      {context => (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="./index.html" className="navbar-brand">Weather online</a>
          <select name="placeselect" id="placeselect" onChange={context.handleChange}>
            {context.cities.map((city, index) => (<option key={index} value={city.key}>{city.dropname}</option>))}
          </select>
        </nav>
      )}
    </AppContext.Consumer>
  )
}
