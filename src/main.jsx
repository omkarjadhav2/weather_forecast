import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Weatherprovider } from './context/weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weatherprovider>
    <App />
    </Weatherprovider>
  </StrictMode>,
)
