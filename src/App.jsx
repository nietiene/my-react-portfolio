import { useState } from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Navbar from './pages/navbar'
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
     setIsMenuOpen(prevState => !prevState)
 } 

 const closeMenu = () => {
  setIsMenuOpen(false)
 }
  return (
    <Router>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <main onClick={closeMenu}>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />} />
           <Route path='/skills' element={<Skills />}/>
           <Route path='/projects' element={<Projects />}/>
           <Route path='navbar' element={<Navbar />}/>
       </Routes>
      </main>
    </Router>
  )
}

export default App
