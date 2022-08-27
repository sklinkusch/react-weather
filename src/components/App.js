import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DarkSkyProvider, OWMProvider } from "../context/AppProvider"
import '../styles/App.css';
import { HeaderDarkSky, HeaderOWM } from './Header';
import TitleImage from './TitleImage';
import { CurrentDarkSky, CurrentOWM } from './Current';
// import Hourly from './Hourly';
import { DailyDarkSky, DailyOWM } from './Daily';

function DarkSky() {
  return (
    <DarkSkyProvider>
      <HeaderDarkSky />
      <TitleImage />
      <CurrentDarkSky />
      <DailyDarkSky />
      {/* <HourlyDarkSky /> */}
    </DarkSkyProvider>
  )
}

function OpenWeatherMap() {
  return (
    <OWMProvider>
      <HeaderOWM />
      <TitleImage />
      <CurrentOWM />
      <DailyOWM />
      {/* <HourlyOWM /> */}
      {/* <MinutelyOWM /> */}
    </OWMProvider>
  )
}

function App() {
  // let pathProps
  // switch(process.env.NODE_ENV) {
  //   case "development":
  //     pathProps = { basename: process.env.PUBLIC_URL }
  //     break
  //   case "production":
  //     pathProps = { basename: process.env.PUBLIC_URL }
  //     break
  //   default:
  //     pathProps = { basename: process.env.PUBLIC_URL }
  // }
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Routes>
            <Route path='/darksky' element={<DarkSky />} />
            <Route path='/owm' element={<OpenWeatherMap />} />
            <Route path='' element={<DarkSky />} />
            <Route path='*' element={<DarkSky />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
