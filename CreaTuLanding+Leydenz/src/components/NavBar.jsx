import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logomyplants2.jpg';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="My Plants Logo" style={{ minWidth: 200, maxWidth: 200 }} />
      <div className="nav-links">
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
