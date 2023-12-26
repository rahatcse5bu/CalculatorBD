import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CalculatorWrapper from './components/CalculatorWrapper.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <CalculatorWrapper/>
   </Provider>
  </React.StrictMode>,
)
