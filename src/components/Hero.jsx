import React from 'react';
import { asset, anosDeTradicao } from '../base';

const heroStyle = {
  backgroundImage: `linear-gradient(90deg, rgba(16, 10, 6, 0.68) 0%, rgba(16, 10, 6, 0.42) 34%, rgba(16, 10, 6, 0) 62%), url(${asset('/hero.jpg')})`
};

const Hero = () => {
  return (
    <section id="home" className="hero" style={heroStyle}>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Há {anosDeTradicao} anos educando com amor e responsabilidade.</span>
          <h1 className="hero-title">
            Comece o seu <span>Lindo</span> e <span>Brilhante</span> Futuro Conosco
          </h1>
          <p className="hero-desc">
            Oferecemos uma educação de excelência, focada no desenvolvimento integral do aluno, 
            preparando-o para os desafios do mundo moderno com valores éticos e humanistas.
          </p>
          <div className="hero-btns">
            <a href="#about" className="btn btn-primary">Nossa História</a>
            <a href="#courses" className="btn btn-white">Atividades</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
