import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import "bootstrap/scss/bootstrap.scss";
import "weather-icons-sass/css/weather-icons.min.css";
import "weather-icons-sass/css/weather-icons-wind.min.css"
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import AppProvider from './context/AppProvider';

ReactDOM.render(<AppProvider><App /></AppProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
