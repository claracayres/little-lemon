import { useState } from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
      <nav className="desktop-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order">Order Online</a>
        <a href="#login">Login</a>
      </nav>

        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#order">Order Online</a>
          <a href="#login">Login</a>
        </div>
      )}
    </header>
  );
};

export default Header;
