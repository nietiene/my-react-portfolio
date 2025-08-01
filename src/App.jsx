import { useState } from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Skills from './pages/skills'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </Router>
  )
}

export default App
