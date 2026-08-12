import React from 'react';

// Botões flutuantes de contato rápido (canto inferior direito).
// WhatsApp aponta para a unidade principal (Jardim América); Instagram para o perfil geral.
const WPP = '5598992005609';
const WPP_MSG = 'Olá! Vim pelo site do Colégio Menino Jesus e gostaria de mais informações.';
const INSTA = 'https://www.instagram.com/colegio.meninojesus/';

const FloatingContacts = () => (
  <div className="floating-contacts">
    <a
      className="fc-btn fc-wpp"
      href={`https://wa.me/${WPP}?text=${encodeURIComponent(WPP_MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
    <a
      className="fc-btn fc-insta"
      href={INSTA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram do Colégio Menino Jesus"
      title="Siga no Instagram"
    >
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
);

export default FloatingContacts;
