import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './_app';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from './redux/store'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  , rootElement);
} else {
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , rootElement);
}
