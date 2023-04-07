import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App'
//primero instalo npm install react-router-dom, luego lo importo
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


// luego Abrazo mi App con BrowserRouter
ReactDOM.render(
  <Provider store = {store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>,
  
  
  document.getElementById('root')
)
