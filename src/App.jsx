import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NavbarMobile from './components/NavbarMobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
