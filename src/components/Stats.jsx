import React from 'react';
import { anosDeTradicao, ANO_FUNDACAO } from '../base';

const stats = [
  { id: 1, icon: 'fa-solid fa-school', number: '2', label: 'Unidades' },
  { id: 2, icon: 'fa-solid fa-heart', number: `${anosDeTradicao}`, label: 'Anos de história' },
  { id: 3, icon: 'fa-solid fa-calendar-check', number: `${ANO_FUNDACAO}`, label: 'Fundado em' }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
