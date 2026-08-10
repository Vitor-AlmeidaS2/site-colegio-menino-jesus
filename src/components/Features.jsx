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

  return (
    <span className="feature-media-fallback" aria-hidden="true">
      <i className={`${icon} ${dark ? 'is-dark' : ''}`}></i>
    </span>
  );
};

const Features = () => {
  const [active, setActive] = useState(0);
  const n = features.length;

  const offsetOf = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const go = (dir) => setActive((prev) => (prev + dir + n) % n);

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

        <div className="activities-carousel">
          <div className="activities-stage">
            {features.map((feature, i) => {
              const offset = offsetOf(i);
              const abs = Math.abs(offset);
              // Com 4 cards um fica "sobrando"; escondemos ele atrás do centro
              // para o leque ficar simétrico (centro + 1 de cada lado).
              const hidden = abs >= 2;
              const style = hidden
                ? {
                    '--o': 0,
                    '--oa': 0,
                    transform: 'translateX(-50%) translateY(-26px) scale(0.82)',
                    zIndex: 60,
                    opacity: 0,
                    pointerEvents: 'none'
                  }
                : {
                    '--o': offset,
                    '--oa': abs,
                    zIndex: 100 - abs * 10,
                    opacity: 1,
                    pointerEvents: 'auto'
                  };
              return (
                <button
                  key={feature.id}
                  type="button"
                  className={`activity-card ${offset === 0 ? 'is-active' : ''}`}
                  style={style}
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${feature.title}`}
                >
                  <div className="activity-media" style={{ backgroundImage: feature.accent }}>
                    <FeatureMedia feature={feature} />
                  </div>
                  <div className="activity-overlay">
                    <span
                      className={`activity-icon ${feature.dark ? 'is-dark' : ''}`}
                      style={{ backgroundImage: feature.accent }}
                    >
                      <i className={feature.icon}></i>
                    </span>
                    <h3>{feature.title}</h3>
                    <p className="activity-desc">{feature.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="activities-controls">
            <button
              type="button"
              className="activity-arrow"
              onClick={() => go(-1)}
              aria-label="Atividade anterior"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="activity-dots">
              {features.map((feature, i) => (
                <button
                  key={feature.id}
                  type="button"
                  className={`activity-dot ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Ir para ${feature.title}`}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="activity-arrow"
              onClick={() => go(1)}
              aria-label="Próxima atividade"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
