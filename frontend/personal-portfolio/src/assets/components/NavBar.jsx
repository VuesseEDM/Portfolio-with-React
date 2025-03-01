import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/blob.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (event) => {
    if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-toggle")) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="naviga" onClick={closeMenu}>
      <nav className="navbar">
        <Link to="/">
          <div className="loading-1">
            <div className="cube">
              <div className="side front"></div>
              <div className="side back"></div>
              <div className="side top"></div>
              <div className="side bottom"></div>
              <div className="side left-1"></div>
              <div className="side right-1"></div>
            </div>
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects" id="different-a">Projects</Link>
          

          <div className="dropdown">
            <Link>Contact</Link>
            <div className="dropdown-content">
              <a href="https://www.facebook.com/vincenzo.sorrentino.5/">Facebook</a>
              <a href="https://www.instagram.com/vuesse_edm/">Instagram</a>
              <a href="https://github.com/VuesseEDM">GitHub</a>
            </div>
          </div>
        </div>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default NavBar;
