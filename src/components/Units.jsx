import React from 'react';
import { asset } from '../base';

const units = [
  {
    id: 1,
    name: 'Unidade I — Jardim América',
    year: '1998',
    segments: 'Educação Infantil e Ensino Fundamental',
    address: 'Av. Brasil, 103 — Jardim América, São Luís - MA, 65058-284',
    phone: '(98) 99200-5609',
    whatsapp: '5598992005609',
    instagram: 'https://www.instagram.com/colegio.meninojesus/',
    mapUrl: 'https://www.google.com/maps/dir//Col%C3%A9gio+Menino+Jesus+Und+I+-+Av.+Brasil,+103+-+Jardim+Am%C3%A9rica,+S%C3%A3o+Lu%C3%ADs+-+MA,+65058-284',
    fachada: '/unidades/jardim-america-fachada.jpg'
  },
  {
    id: 2,
    name: 'Unidade II — Turu / Chácara Brasil',
    year: '2021',
    segments: 'Educação Infantil e Ensino Fundamental',
    address: 'R. Paraíba, 342 — Chácara Brasil, São Luís - MA, 65065-760',
    phone: '(98) 99194-6783',
    whatsapp: '5598991946783',
    instagram: 'https://www.instagram.com/colegio.meninojesus3/',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Col%C3%A9gio+Menino+Jesus+Ch%C3%A1cara+Brasil+S%C3%A3o+Lu%C3%ADs+MA',
    fachada: '/unidades/chacara-brasil-fachada.jpg'
  }
];

const UnitCard = ({ unit }) => {
  return (
    <div className="unit-card">
      <div className="unit-gallery">
        <div className="unit-image">
          <img
            src={asset(unit.fachada)}
            alt={`Fachada — ${unit.name}`}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="unit-image-fallback">
            <i className="fa-solid fa-school"></i>
          </div>
          <span className="unit-year">Desde {unit.year}</span>
        </div>
      </div>

      <div className="unit-body">
        <h3>{unit.name}</h3>
        <p className="unit-segments">
          <i className="fa-solid fa-graduation-cap"></i> {unit.segments}
        </p>

        <ul className="unit-info">
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>{unit.address}</span>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <span>{unit.phone}</span>
          </li>
        </ul>

        <div className="unit-actions">
          <a
            href={`https://wa.me/${unit.whatsapp}`}
            className="btn unit-btn-wpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href={unit.instagram}
            className="btn unit-btn-insta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
          <a
            href={unit.mapUrl}
            className="btn unit-btn-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-map-location-dot"></i> Ver no mapa
          </a>
        </div>
      </div>
    </div>
  );
};

const Units = () => {
  return (
    <section id="units" className="units-section">
      <div className="container">
        <div className="units-header">
          <span className="section-subtitle">Onde Estamos</span>
          <h2 className="section-title">Nossas Unidades</h2>
          <p className="units-intro">
            Estamos presentes em dois pontos de São Luís, prontos para acolher a sua família
            com a mesma dedicação e cuidado de sempre.
          </p>
        </div>

        <div className="units-grid">
          {units.map((unit) => (
            <UnitCard unit={unit} key={unit.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;
