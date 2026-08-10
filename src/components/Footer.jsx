import React from 'react';
import { asset } from '../base';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="/" className="footer-logo">
              <img src={asset('/logo-cmj.png')} alt="Colégio Menino Jesus" className="brand-logo-footer" />
              <span className="logo-text">Colégio Menino <span>Jesus</span></span>
            </a>
            <p className="footer-desc">
              Há 26 anos educando com amor e responsabilidade. Formando cidadãos críticos e conscientes em São Luís do Maranhão.
            </p>
            <div className="footer-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#courses">Atividades</a></li>
              <li><a href="#units">Nossas Unidades</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Nossas Unidades</h3>
            <ul className="footer-links">
              <li><a href="#units">Unidade I - Jardim América (1998)</a></li>
              <li><a href="#units">Unidade II - Chácara Brasil (2021)</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-units">
              <li>
                <i className="fa-solid fa-map-marker-alt"></i>
                <span><strong>Jardim América</strong><br/>Av. Brasil, 103 — (98) 99200-5609</span>
              </li>
              <li>
                <i className="fa-solid fa-map-marker-alt"></i>
                <span><strong>Chácara Brasil</strong><br/>R. Paraíba, 342 — (98) 99194-6783</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>contato@colegiomeninojesus.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Colégio Menino Jesus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
