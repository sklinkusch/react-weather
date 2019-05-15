import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import TitleImage from './TitleImage';
import Current from './Current';

function App() {
  return (
    <div className="App">
      <Header />
      <TitleImage />
      <Current />
    </div>
  );
}

export default App;
