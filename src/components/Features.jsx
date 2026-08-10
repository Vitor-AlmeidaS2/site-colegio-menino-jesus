import React, { useState } from 'react';
import { asset } from '../base';

const features = [
  {
    id: 1,
    title: 'Futsal',
    desc: 'Além da atividade física, promove o amadurecimento social e pessoal do aluno.',
    icon: 'fa-solid fa-futbol',
    accent: 'linear-gradient(135deg, #6B3FA0, #482277)',
    dark: false,
    media: { type: 'video', src: '/atividades/futsal.mp4' }
  },
  {
    id: 2,
    title: 'Robótica',
    desc: 'Leva o aluno a organizar pensamentos e decisões diante dos desafios da criação.',
    icon: 'fa-solid fa-robot',
    accent: 'linear-gradient(135deg, #FFB020, #F97316)',
    dark: false,
    media: { type: 'video', src: '/atividades/robotica.mp4' }
  },
  {
    id: 3,
    title: 'Ballet',
    desc: 'Desenvolve a sociabilidade e aprimora o senso de confiança do aluno(a).',
    icon: 'fa-solid fa-masks-theater',
    accent: 'linear-gradient(135deg, #F472B6, #DB2777)',
    dark: false,
    media: { type: 'image', src: '/atividades/ballet.jpg' }
  },
  {
    id: 4,
    title: 'Natação',
    desc: 'Estimula percepções e habilidades únicas para o desenvolvimento motor e cognitivo.',
    icon: 'fa-solid fa-person-swimming',
    accent: 'linear-gradient(135deg, #38BDF8, #0891B2)',
    dark: false,
    media: { type: 'image', src: '/atividades/natacao.jpg' }
  }
];

const FeatureMedia = ({ feature }) => {
  const [failed, setFailed] = useState(false);
  const { media, icon, dark } = feature;

  if (media.type === 'video') {
    return (
      <video
        className="feature-media-el"
        src={asset(media.src)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  if (media.type === 'image' && !failed) {
    return (
      <img
        className="feature-media-el"
        src={asset(media.src)}
        alt={`Atividade de ${feature.title}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  // sem mídia (ainda) — ícone sobre o gradiente da atividade
  return (
    <span className="feature-media-fallback" aria-hidden="true">
      <i className={`${icon} ${dark ? 'is-dark' : ''}`}></i>
    </span>
  );
};

const Features = () => {
  return (
    <section className="features-section" id="courses">
      <div className="container">
        <div className="features-header">
          <span className="section-subtitle">Atividades Extracurriculares</span>
          <h2 className="section-title">Muito além da sala de aula</h2>
          <p className="features-intro">
            Experiências que desenvolvem corpo, mente e emoções — para formar alunos completos,
            confiantes e criativos.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-media" style={{ backgroundImage: feature.accent }}>
                <FeatureMedia feature={feature} />
              </div>

              <div className="feature-body">
                <div
                  className={`feature-icon-badge ${feature.dark ? 'is-dark' : ''}`}
                  style={{ backgroundImage: feature.accent }}
                >
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <a href="#contact" className="feature-link">
                  Saiba mais <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
