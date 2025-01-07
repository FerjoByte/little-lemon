import React from "react";
import logo from "../assets/logo.png"; // Asegúrate de que el logo esté en la carpeta assets

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;