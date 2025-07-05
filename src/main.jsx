import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router.jsx'
import './styles/index.css'
import {DataProvider} from "./context/DataContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
        <Router />
    </DataProvider>
  </StrictMode>,
)
