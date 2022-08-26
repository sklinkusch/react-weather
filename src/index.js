import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
