import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Book a Table</Link></li> {/* Enlace a BookingPage */}
      </ul>
    </nav>
  );
}

export default Nav;