import React from 'react';

const stats = [
  { id: 1, icon: 'fa-solid fa-school', number: '2', label: 'Unidades' },
  { id: 2, icon: 'fa-solid fa-graduation-cap', number: '2500+', label: 'Nossos Alunos' },
  { id: 3, icon: 'fa-solid fa-book-open', number: '150+', label: 'Professores Qualificados' },
  { id: 4, icon: 'fa-solid fa-trophy', number: '45+', label: 'Prêmios Conquistados' }
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
