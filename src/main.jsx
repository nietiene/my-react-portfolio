import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedMode = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('prefers-color-scheme: dark)').matches;
const initialMode = savedMode !== null ? JSON.parse(savedMode) : prefersDark
document.documentElement.classList.toggle('dark', initialMode);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
