import React from 'react';
import { asset } from '../base';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img about-img-1">
              <img src={asset('/unidades/jardim-america-1.jpg')} alt="Colégio Menino Jesus - Unidade Jardim América" loading="lazy" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="about-img about-img-2">
                <img src={asset('/unidades/chacara-brasil-2.jpg')} alt="Aluno em atividade no Colégio Menino Jesus" loading="lazy" />
              </div>
              <div className="about-img about-img-3">
                <img src={asset('/unidades/jardim-america-2.jpg')} alt="Alunos em sala de aula no Colégio Menino Jesus" loading="lazy" />
              </div>
            </div>
            <div className="about-badge">
              <div className="about-badge-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <div className="about-badge-text">
                <h4>26 Anos de <br/>Tradição</h4>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <span className="section-subtitle">Nossa História</span>
            <h2>Colégio Menino Jesus: Uma trajetória de <span>sucesso</span>.</h2>
            <p className="about-desc">
              Inaugurado em 18 de fevereiro de 1998, no bairro Jardim América (São Luís-MA), o Colégio Menino Jesus surgiu 
              do sonho de acolher crianças e oferecer uma formação de qualidade. Nosso nome homenageia Jesus Cristo, nossa 
              maior inspiração. O início foi um caminho de provações, mas sempre pautado na responsabilidade e no compromisso.
            </p>
            
            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div className="about-feature-content">
                  <h4>Nossa Missão</h4>
                  <p>Educar jovens, atingir a qualidade social, garantir a apropriação do conhecimento acumulado e desenvolver diversas habilidades alicerçadas em valores éticos.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <div className="about-feature-content">
                  <h4>Desenvolvimento Integral</h4>
                  <p>Contribuímos para a formação de sujeitos históricos com visão de mundo coesa, conscientes, críticos, criativos e responsáveis para transformar a sociedade.</p>
                </div>
              </div>
            </div>
            
            <div className="about-action">
              <div className="call-now">
                <div className="call-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="call-text">
                  <span>Entre em contato</span>
                  <strong>(98) 9999-9999</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
