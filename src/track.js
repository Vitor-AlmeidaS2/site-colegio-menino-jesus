// Disparo de conversões para o Google (gtag) e para a Meta (fbq).
// As duas tags já respeitam o consentimento do banner de cookies — o Google
// pelo Consent Mode e a Meta pelo fbq('consent', ...) —, então aqui basta
// chamar. Medição nunca pode quebrar a página, por isso tudo vai em try/catch.

// Rótulo da ação de conversão "Lead WhatsApp (site)", criada na conta do Google
// Ads em 17/11. Contagem "Uma" por clique: se a pessoa manda o formulário e
// depois clica no WhatsApp, o Google conta um lead só.
const ADS_LEAD = 'AW-10831681084/lNZeCKSamrodELys-awo';

export const trackLead = (origem) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { origem });
      // Conversão do Google Ads. Os botões de WhatsApp abrem em outra aba
      // (target="_blank") e o formulário usa window.open, então a página não
      // sai do ar e o evento tem tempo de subir — não precisa de event_callback.
      window.gtag('event', 'conversion', { send_to: ADS_LEAD });
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
