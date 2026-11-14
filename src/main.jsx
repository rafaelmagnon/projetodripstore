import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Importe o BrowserRouter aqui
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 2. Envolva o App com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)