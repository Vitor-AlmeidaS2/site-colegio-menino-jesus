import React, { useState, useEffect, useCallback } from 'react';
import { asset } from '../base';

const photos = [
  { src: '/unidades/jardim-america-passeio.jpg', caption: 'Passeio — Jardim América' },
  { src: '/atividades/ballet.jpg', caption: 'Ballet' },
  { src: '/unidades/jardim-america-fachada.jpg', caption: 'Fachada — Jardim América' },
  { src: '/unidades/chacara-brasil-1.jpg', caption: 'Unidade Chácara Brasil' },
  { src: '/unidades/jardim-america-3.jpg', caption: 'Eventos — Jardim América' },
  { src: '/atividades/natacao.jpg', caption: 'Natação' },
  { src: '/unidades/chacara-brasil-fachada.jpg', caption: 'Fachada — Chácara Brasil' },
  { src: '/unidades/jardim-america-2.jpg', caption: 'Sala de aula — Jardim América' },
  { src: '/unidades/chacara-brasil-3.jpg', caption: 'Sala de aula — Chácara Brasil' },
  { src: '/atividades/robotica.jpg', caption: 'Robótica' },
  { src: '/unidades/jardim-america-4.jpg', caption: 'Eventos — Jardim América' },
  { src: '/unidades/chacara-brasil-2.jpg', caption: 'Unidade Chácara Brasil' },
  { src: '/unidades/jardim-america-1.jpg', caption: 'Jardim América' },
  { src: '/unidades/chacara-brasil-4.jpg', caption: 'Atividades — Chácara Brasil' },
  { src: '/unidades/jardim-america-5.jpg', caption: 'Eventos — Jardim América' },
  { src: '/unidades/chacara-brasil-5.jpg', caption: 'Chácara Brasil' }
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // índice da foto aberta ou null

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (dir) => setLightbox((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, go]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="section-subtitle">Nosso Dia a Dia</span>
          <h2 className="section-title">Galeria de Fotos</h2>
          <p className="gallery-intro">
            Momentos que revelam a rotina, os eventos e o carinho do Colégio Menino Jesus.
            Clique em qualquer foto para ampliar.
          </p>
        </div>
      </div>

      <div className="gallery-masonry">
        {photos.map((photo, i) => (
          <button
            type="button"
            key={photo.src}
            className="gallery-item"
            onClick={() => setLightbox(i)}
            aria-label={`Ampliar foto: ${photo.caption}`}
          >
            <img src={asset(photo.src)} alt={photo.caption} loading="lazy" />
            <span className="gallery-item-overlay">
              <i className="fa-solid fa-expand"></i>
            </span>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Fechar">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Foto anterior"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(photos[lightbox].src)} alt={photos[lightbox].caption} />
            <figcaption>{photos[lightbox].caption}</figcaption>
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => { e.stopPropagation(); go(1); }}
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
