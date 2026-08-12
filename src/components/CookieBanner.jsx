import React, { useState, useEffect } from 'react';

const KEY = 'cmj-cookie-consent';

// Banner de consentimento de cookies (LGPD).
// Trabalha junto com o Consent Mode configurado no index.html:
// enquanto o usuário não aceita, a tag do Google não grava cookies.
const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  // Enquanto o banner está visível, marca o body para o CSS levantar
  // os botões flutuantes; quando some, eles voltam pro canto inferior.
  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', show);
    return () => document.body.classList.remove('cookie-banner-open');
  }, [show]);

  const decide = (accepted) => {
    try {
      localStorage.setItem(KEY, accepted ? 'accepted' : 'rejected');
    } catch {
      /* localStorage indisponível — segue sem persistir */
    }
    if (accepted && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p className="cookie-text">
        Usamos cookies para analisar o tráfego e melhorar sua experiência no site.
        Você pode aceitar ou recusar os cookies de análise a qualquer momento.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn cookie-reject" onClick={() => decide(false)}>
          Recusar
        </button>
        <button type="button" className="cookie-btn cookie-accept" onClick={() => decide(true)}>
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
