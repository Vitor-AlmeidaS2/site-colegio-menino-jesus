// Disparo de conversões para o Google (gtag) e para a Meta (fbq).
// As duas tags já respeitam o consentimento do banner de cookies — o Google
// pelo Consent Mode e a Meta pelo fbq('consent', ...) —, então aqui basta
// chamar. Medição nunca pode quebrar a página, por isso tudo vai em try/catch.

export const trackLead = (origem) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { origem });
    }
  } catch {
    /* sem gtag na página — segue sem medir */
  }
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { origem });
    }
  } catch {
    /* pixel ainda não configurado — segue sem medir */
  }
};

// Clique em qualquer botão de WhatsApp. A unidade entra na origem para
// separar, no relatório, quem procurou o Jardim América e quem procurou o Turu.
export const trackWhatsApp = (unidade) => trackLead(`whatsapp-${unidade}`);
