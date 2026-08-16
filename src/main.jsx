import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TimeOfDayProvider } from './context/TimeOfDay.jsx'

createRoot(document.getElementById('root')).render( /* render opens JSX position */
  <StrictMode>
        <TimeOfDayProvider>
           <App />
        </TimeOfDayProvider>
  </StrictMode>,
)