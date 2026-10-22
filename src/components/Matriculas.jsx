import React, { useState, useEffect } from 'react';
import { anosDeTradicao } from '../base';
import { trackLead, trackWhatsApp } from '../track';

// Landing de matrículas 2027 (/matriculas) — destino dos anúncios de Meta e Google.
// Todo caminho de contato dispara conversão, senão não dá para saber qual anúncio
// trouxe qual matrícula.

const UNIDADES = [
  {
    id: 'jardim-america',
    nome: 'Jardim América',
    endereco: 'Av. Brasil, 103 — Jardim América',
    whatsapp: '5598992005609',
    telefone: '(98) 99200-5609'
  },
  {
    id: 'chacara-brasil',
    nome: 'Turu / Chácara Brasil',
    endereco: 'R. Paraíba, 342 — Chácara Brasil',
    whatsapp: '5598991946783',
    telefone: '(98) 99194-6783'
  }
];

const SERIES = [
  'Maternal I', 'Maternal II', 'Infantil I', 'Infantil II',
  '1º ano', '2º ano', '3º ano', '4º ano', '5º ano',
  '6º ano', '7º ano', '8º ano', '9º ano'
];

// A escada de desconto é a própria tabela do colégio: quem decide antes paga menos.
const PRAZOS = [
  { quando: 'Até 30 de novembro', desconto: '15%', nota: 'O maior desconto ainda disponível', destaque: true },
  { quando: 'Em dezembro', desconto: '10%', nota: 'O desconto cai cinco pontos', destaque: false },
  { quando: 'A partir de janeiro', desconto: 'sem desconto', nota: 'Só o abatimento de pontualidade', destaque: false }
];

const DIFERENCIAIS = [
  { icone: 'fa-solid fa-heart', titulo: `${anosDeTradicao} anos de história`, texto: 'Desde 1998 no Jardim América, educando com amor e responsabilidade.' },
  { icone: 'fa-solid fa-futbol', titulo: 'Muito além da sala', texto: 'Futsal, robótica, ballet e natação fazem parte da rotina da escola.' },
  { icone: 'fa-solid fa-school', titulo: 'Duas unidades', texto: 'Jardim América e Turu / Chácara Brasil, perto de onde sua família já vive.' },
  { icone: 'fa-solid fa-graduation-cap', titulo: 'Do maternal ao 9º ano', texto: 'Seu filho cresce na mesma escola, com professores que conhecem o nome dele.' }
];

const encode = (dados) =>
  Object.keys(dados)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(dados[k])}`)
    .join('&');

const Matriculas = () => {
  const [form, setForm] = useState({ nome: '', telefone: '', unidade: UNIDADES[0].nome, serie: SERIES[0] });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    document.title = 'Matrículas 2027 | Colégio Menino Jesus — São Luís (MA)';
  }, []);

  const mudar = (campo) => (e) => setForm((f) => ({ ...f, [campo]: e.target.value }));

  const enviar = async (e) => {
    e.preventDefault();
    if (enviando) return;
    setErro('');
    setEnviando(true);

    const unidade = UNIDADES.find((u) => u.nome === form.unidade) || UNIDADES[0];
    const mensagem =
      `Olá! Me chamo ${form.nome}. Vim pela página de matrículas e quero informações ` +
      `sobre a vaga de ${form.serie} na unidade ${form.unidade} para 2027.`;

    try {
      // Netlify Forms: o registro do lead fica guardado mesmo se a pessoa
      // não terminar a conversa no WhatsApp.
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'matriculas', ...form })
      });
    } catch {
      // Sem conexão com o Netlify (dev local, por exemplo): não trava o visitante,
      // que segue para o WhatsApp, que é onde a matrícula fecha de verdade.
      setErro('Não conseguimos registrar seus dados, mas você já pode falar com a gente no WhatsApp.');
    }

    trackLead('formulario-matriculas');
    setEnviando(false);
    setEnviado(true);
    window.open(`https://wa.me/${unidade.whatsapp}?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
  };

  return (
    <div className="mat">
      <section className="mat-hero">
        <div className="container mat-hero-inner">
          <span className="mat-badge">Matrículas 2027 abertas</span>
          <h1>
            O lugar dele <span>já tem nome</span>
          </h1>
          <p className="mat-lead">
            Reserve agora a vaga do seu filho no Colégio Menino Jesus e garanta o maior desconto
            do ano. Depois de 30 de novembro, a mesma vaga custa mais caro.
          </p>
          <div className="mat-hero-actions">
            <a className="mat-btn mat-btn-primary" href="#reservar">
              <i className="fa-solid fa-calendar-check"></i> Reservar a vaga
            </a>
            <a
              className="mat-btn mat-btn-ghost"
              href={`https://wa.me/${UNIDADES[0].whatsapp}?text=${encodeURIComponent('Olá! Vim pela página de matrículas e gostaria de saber os valores para 2027.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(UNIDADES[0].id)}
            >
              <i className="fa-brands fa-whatsapp"></i> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mat-prazos">
        <div className="container">
          <div className="mat-section-head">
            <h2>Quanto antes, <span>mais barato</span></h2>
            <p>O desconto de matrícula antecipada diminui a cada mês. É a mesma vaga, na mesma sala.</p>
          </div>
          <div className="mat-prazos-grid">
            {PRAZOS.map((p) => (
              <div key={p.quando} className={`mat-prazo ${p.destaque ? 'is-destaque' : ''}`}>
                <span className="mat-prazo-quando">{p.quando}</span>
                <strong className="mat-prazo-desconto">{p.desconto}</strong>
                <span className="mat-prazo-nota">{p.nota}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mat-diferenciais">
        <div className="container">
          <div className="mat-section-head">
            <h2>Por que o <span>Menino Jesus</span></h2>
          </div>
          <div className="mat-dif-grid">
            {DIFERENCIAIS.map((d) => (
              <div key={d.titulo} className="mat-dif">
                <span className="mat-dif-icone" aria-hidden="true"><i className={d.icone}></i></span>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mat-form-section" id="reservar">
        <div className="container mat-form-wrap">
          <div className="mat-form-texto">
            <h2>Receba os valores e <span>reserve a vaga</span></h2>
            <p>
              Preencha e a gente te manda a tabela de 2027 da unidade que você escolher, já com o
              desconto que está valendo. Leva menos de um minuto.
            </p>
            <ul className="mat-form-lista">
              <li><i className="fa-solid fa-check"></i> Sem compromisso de matrícula</li>
              <li><i className="fa-solid fa-check"></i> Resposta no mesmo dia</li>
              <li><i className="fa-solid fa-check"></i> Visita à escola quando quiser</li>
            </ul>
          </div>

          <form className="mat-form" onSubmit={enviar} noValidate={false}>
            <label>
              Seu nome
              <input type="text" value={form.nome} onChange={mudar('nome')} required placeholder="Como podemos te chamar" />
            </label>
            <label>
              WhatsApp
              <input type="tel" value={form.telefone} onChange={mudar('telefone')} required placeholder="(98) 90000-0000" />
            </label>
            <label>
              Unidade
              <select value={form.unidade} onChange={mudar('unidade')}>
                {UNIDADES.map((u) => <option key={u.id} value={u.nome}>{u.nome}</option>)}
              </select>
            </label>
            <label>
              Série em 2027
              <select value={form.serie} onChange={mudar('serie')}>
                {SERIES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>

            <button type="submit" className="mat-btn mat-btn-primary mat-btn-full" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Quero reservar a vaga'}
            </button>

            {enviado && (
              <p className="mat-form-ok" role="status">
                Recebemos seus dados. Abrimos o WhatsApp para você falar com a unidade agora mesmo.
              </p>
            )}
            {erro && <p className="mat-form-erro" role="status">{erro}</p>}

            <p className="mat-form-lgpd">
              Usamos seus dados só para falar com você sobre a matrícula de 2027.
            </p>
          </form>
        </div>
      </section>

      <section className="mat-unidades">
        <div className="container">
          <div className="mat-section-head">
            <h2>Fale direto com a <span>unidade</span></h2>
          </div>
          <div className="mat-unidades-grid">
            {UNIDADES.map((u) => (
              <div key={u.id} className="mat-unidade">
                <h3>{u.nome}</h3>
                <p><i className="fa-solid fa-location-dot"></i> {u.endereco}</p>
                <p><i className="fa-solid fa-phone"></i> {u.telefone}</p>
                <a
                  className="mat-btn mat-btn-primary"
                  href={`https://wa.me/${u.whatsapp}?text=${encodeURIComponent(`Olá! Vim pela página de matrículas e gostaria de informações sobre a unidade ${u.nome}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(u.id)}
                >
                  <i className="fa-brands fa-whatsapp"></i> Falar com esta unidade
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matriculas;
