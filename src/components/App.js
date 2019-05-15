import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import TitleImage from './TitleImage';
import Current from './Current';
import Hourly from './Hourly';

function App() {
  return (
    <div className="App">
      <Header />
      <TitleImage />
      <Current />
      <Hourly />
    </div>
  );
}

export default App;
