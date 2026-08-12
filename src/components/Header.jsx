import React, { useState } from 'react';
import { asset } from '../base';

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
          <a href="/" className="logo" onClick={close}>
            <img src={asset('/logo-cmj.png')} alt="Colégio Menino Jesus" className="brand-logo" />
            <span className="logo-text">Colégio Menino <span>Jesus</span></span>
          </a>

          <button
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            <a href="#home" onClick={close}>Início</a>
            <a href="#about" onClick={close}>História</a>
            <a href="#courses" onClick={close}>Atividades</a>
            <a href="#units" onClick={close}>Unidades</a>
            <a href="#gallery" onClick={close}>Galeria</a>
            <a href="#units" className="btn btn-primary" onClick={close}>Fale Conosco</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
