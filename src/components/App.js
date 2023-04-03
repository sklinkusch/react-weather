import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { OWMProvider } from "../context/AppProvider"
import '../styles/App.css';
import { HeaderOWM } from './Header';
import TitleImage from './TitleImage';
import { CurrentOWM } from './Current';
import { HourlyOWM } from './Hourly';
import { DailyOWM } from './Daily';

/*
function DarkSky() {
  return (
    <DarkSkyProvider>
      <HeaderDarkSky />
      <TitleImage />
      <CurrentDarkSky />
      <DailyDarkSky />
      <HourlyDarkSky />
    </DarkSkyProvider>
  )
}*/

function OpenWeatherMap() {
  return (
    <OWMProvider>
      <HeaderOWM />
      <TitleImage />
      <CurrentOWM />
      <DailyOWM />
      <HourlyOWM />
    </OWMProvider>
  )
}

function App() {
  let pathProps
  switch(process.env.NODE_ENV) {
    case "development":
      pathProps = { basename: process.env.PUBLIC_URL }
      break
    case "production":
      pathProps = { basename: process.env.PUBLIC_URL }
      break
    default:
      pathProps = { basename: process.env.PUBLIC_URL }
  }
  return (
    <div className="App">
      <Router {...pathProps}>
        <Suspense>
          <Routes>
            {/*<Route path='/darksky/:id' element={<DarkSky />} />*/}
            <Route path='/owm/:id' element={<OpenWeatherMap />} />
            <Route path='' element={<OpenWeatherMap />} />
            <Route path='*' element={<OpenWeatherMap />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
