import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* che provider STORE is store eee */}     {/* TOMAA AHORA TENES UN ESTADO GLOBAL */}
  <BrowserRouter>                                                      {/* Y TAMBIEN TENES RUTAS */}
  <App />
  </BrowserRouter>                                         
  </Provider>                        
  
)
