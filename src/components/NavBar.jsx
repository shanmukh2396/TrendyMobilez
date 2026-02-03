// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const username = localStorage.getItem("username");
  const isLoggedIn = !!username;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBrandsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/"; // or use useNavigate if inside component
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-area">
          <i className="fa-solid fa-cart-shopping logo-icon"></i>
          <div className="logo-text">
            <div className="mobile-name">Trendy Mobilez</div>
            <div className="tagline">"Find Latest Mobiles"</div>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </li>

          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="active">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="active">
              Contact Us
            </Link>
          </li>

          {/* Brands Dropdown */}
          <li className="nav-item dropdown" ref={dropdownRef}>
            <a
              href="#"
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setIsBrandsOpen(!isBrandsOpen);
              }}
            >
              Brands
            </a>
            <ul className={`dropdown-menu ${isBrandsOpen ? "show" : ""}`}>
              <li>
                <Link className="dropdown-item" to="/">
                  Vivo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Oppo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Iqoo
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Samsung
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Realme
                </Link>
              </li>
            </ul>
          </li>

          {/* Conditional links */}
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/cart" className="active">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/orders" className="active">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/profile" className="active">
                  Profile ({username})
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="active">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
