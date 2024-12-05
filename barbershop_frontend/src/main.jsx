import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
const value = {
  cssTransition: false,
}

axios.defaults.headers.post['Content-Type'] = 'application/json';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <PrimeReactProvider value={value}>
        <App/>
      </PrimeReactProvider>
    </StrictMode>,
)
