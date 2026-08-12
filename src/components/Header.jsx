import React from 'react';
import { asset } from '../base';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-contact">
            <span>
              <i className="fa-solid fa-map-marker-alt"></i>
              São Luís - MA
            </span>
            <span>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:meninojesus_2007@hotmail.com">meninojesus_2007@hotmail.com</a>
            </span>
            <span>
              <i className="fa-solid fa-phone"></i>
              (98) 99200-5609
            </span>
          </div>
          <div className="top-bar-social">
            <span>Siga-nos:</span>
            <a href="https://www.facebook.com/meninojesusSlz/?locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/colegio.meninojesus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="/" className="logo">
            <img src={asset('/logo-cmj.png')} alt="Colégio Menino Jesus" className="brand-logo" />
            <span className="logo-text">Colégio Menino <span>Jesus</span></span>
          </a>
          
          <div className="nav-links">
            <a href="#home">Início</a>
            <a href="#about">História</a>
            <a href="#courses">Atividades</a>
            <a href="#units">Unidades</a>
            <a href="#gallery">Galeria</a>
            <a href="#contact" className="btn btn-primary">Fale Conosco</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
