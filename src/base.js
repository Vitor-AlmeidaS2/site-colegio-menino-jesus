// Prefixa os assets de /public com o base do Vite (import.meta.env.BASE_URL).
// Em dev e no Vercel (raiz) o base é "/"; no GitHub Pages é "/<repo>/".
// Assim o mesmo código funciona nos dois lugares sem quebrar os caminhos.
export const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\//, '')}`;

// Anos de tradição calculados a partir da fundação (18/02/1998).
// Assim o número se atualiza sozinho a cada ano — nunca fica desatualizado.
export const ANO_FUNDACAO = 1998;

export const anosDeTradicao = (() => {
  const fundacao = new Date(ANO_FUNDACAO, 1, 18); // mês 1 = fevereiro
  const hoje = new Date();
  let anos = hoje.getFullYear() - fundacao.getFullYear();
  const aindaNaoFezAniversario =
    hoje.getMonth() < fundacao.getMonth() ||
    (hoje.getMonth() === fundacao.getMonth() && hoje.getDate() < fundacao.getDate());
  if (aindaNaoFezAniversario) anos -= 1;
  return anos;
})();
