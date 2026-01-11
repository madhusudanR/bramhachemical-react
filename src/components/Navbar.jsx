import React from 'react'
import logo from '/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
        <div className="container header-flex">
            <div className="logo-box">
                <img src={logo} alt="Bramha Chemicals Logo"/>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/facilities">Facilities</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
