import React, { useState, useEffect, useCallback } from 'react';
import { asset } from '../base';

const photos = [
  { src: '/unidades/jardim-america-passeio.jpg', caption: 'Passeio — Jardim América' },
  { src: '/atividades/ballet.jpg', caption: 'Ballet' },
  { src: '/unidades/chacara-brasil-1.jpg', caption: 'Unidade Chácara Brasil' },
  { src: '/unidades/jardim-america-3.jpg', caption: 'Eventos — Jardim América' },
  { src: '/atividades/natacao.jpg', caption: 'Natação' },
  { src: '/unidades/jardim-america-2.jpg', caption: 'Sala de aula — Jardim América' },
  { src: '/unidades/chacara-brasil-3.jpg', caption: 'Sala de aula — Chácara Brasil' },
  { src: '/atividades/robotica.jpg', caption: 'Robótica' },
  { src: '/atividades/natacao-2.jpg', caption: 'Natação' },
  { src: '/unidades/jardim-america-4.jpg', caption: 'Eventos — Jardim América' },
  { src: '/unidades/chacara-brasil-2.jpg', caption: 'Unidade Chácara Brasil' },
  { src: '/unidades/jardim-america-1.jpg', caption: 'Jardim América' },
  { src: '/unidades/chacara-brasil-4.jpg', caption: 'Atividades — Chácara Brasil' },
  { src: '/unidades/jardim-america-5.jpg', caption: 'Eventos — Jardim América' },
  { src: '/unidades/chacara-brasil-5.jpg', caption: 'Chácara Brasil' }
];

const VISIBLE = 5; // quantos cards ficam empilhados atrás do da frente

const Gallery = () => {
  const n = photos.length;
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir) => setActive((a) => (a + dir + n) % n), [n]);

  // autoplay do leque (pausa no hover e quando o lightbox está aberto)
  useEffect(() => {
    if (paused || lightbox !== null) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 4200);
    return () => clearInterval(t);
  }, [paused, lightbox, n]);

  // lightbox: teclado + trava de scroll
  const close = useCallback(() => setLightbox(null), []);
  const goLb = useCallback(
    (dir) => setLightbox((i) => (i === null ? i : (i + dir + n) % n)),
    [n]
  );
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goLb(1);
      if (e.key === 'ArrowLeft') goLb(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, goLb]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container gallery-header">
        <span className="section-subtitle">Nosso Dia a Dia</span>
        <h2 className="section-title">Galeria de Fotos</h2>
        <p className="gallery-intro">
          Momentos que revelam a rotina, os eventos e o carinho do Colégio Menino Jesus.
          Passe pelas fotos e clique para ampliar.
        </p>
      </div>

      <div className="deck-panel">
      <div
        className="deck"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="deck-arrow deck-prev" onClick={() => go(-1)} aria-label="Foto anterior">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="deck-stage">
          {photos.map((photo, i) => {
            const d = (i - active + n) % n; // 0 = card da frente
            const shown = d <= VISIBLE;
            const style = {
              transform:
                `translate(-50%, -50%) ` +
                `translate3d(${d * 46}px, ${d * -30}px, ${d * -70}px) ` +
                `rotate(${d * 1.5}deg) scale(${Math.max(1 - d * 0.05, 0.6)})`,
              opacity: shown ? Math.max(1 - d * 0.15, 0) : 0,
              zIndex: n - d,
              pointerEvents: d === 0 ? 'auto' : 'none'
            };
            return (
              <button
                key={photo.src}
                type="button"
                className={`deck-card ${d === 0 ? 'is-front' : ''}`}
                style={style}
                onClick={() => setLightbox(i)}
                aria-label={`Ampliar foto: ${photo.caption}`}
                aria-hidden={!shown}
              >
                <img src={asset(photo.src)} alt={photo.caption} draggable="false" />
              </button>
            );
          })}
        </div>

        <button className="deck-arrow deck-next" onClick={() => go(1)} aria-label="Próxima foto">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="deck-dots">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={`deck-dot ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Ir para a foto ${i + 1}`}
          ></button>
        ))}
      </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Fechar">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goLb(-1); }}
            aria-label="Foto anterior"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(photos[lightbox].src)} alt={photos[lightbox].caption} />
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => { e.stopPropagation(); goLb(1); }}
            aria-label="Próxima foto"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
