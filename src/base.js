// Prefixa os assets de /public com o base do Vite (import.meta.env.BASE_URL).
// Em dev e no Vercel (raiz) o base é "/"; no GitHub Pages é "/<repo>/".
// Assim o mesmo código funciona nos dois lugares sem quebrar os caminhos.
export const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\//, '')}`;
