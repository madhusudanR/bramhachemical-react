import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarMobile.css";
import logo from "/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-flex">
          {/* LEFT: Hamburger + Logo */}
          <div className="nav-left">
            <div
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="logo-box">
              <img src={logo} alt="Bramha Chemicals" />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* MOBILE FULL SCREEN DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <span className="nav-text">Home</span>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            <span className="nav-text">Products</span>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/facilities" onClick={() => setMenuOpen(false)}>
            <span className="nav-text">Facilities</span>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            <span className="nav-text">About Us</span>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
            <span className="nav-text">Contact Us</span>
            <span className="nav-arrow">→</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
