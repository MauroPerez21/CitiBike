import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


