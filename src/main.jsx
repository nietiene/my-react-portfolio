import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedMode = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('prefers-color-scheme: dark)').matches;
const initialMode = savedMode !== null ? JSON.parse(savedMode) :  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
