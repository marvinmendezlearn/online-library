import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
