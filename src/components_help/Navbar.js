import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PHILA
            <i className="fab fa-typo3" />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Artículos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chat"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Videos
              </NavLink>
            </li>{" "}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
