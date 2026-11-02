// Gera um HTML proprio para cada rota que nao e a home.
//
// O site e uma pagina so (o App olha o window.location.pathname) e o netlify.toml
// devolve o index.html para qualquer caminho. Com isso /matriculas servia o HTML
// identico ao da home, incluindo o <link rel="canonical"> apontando para "/" —
// ou seja, a propria pagina dizia ao Google que era copia da home e nao era
// indexada. O titulo e a descricao na busca tambem sairiam errados.
//
// Duplicar o index.html no repositorio resolveria, mas ele carrega gtag, Meta
// Pixel e o consent mode da LGPD: as duas copias sairiam do ar na primeira vez
// que alguem editasse so uma. Entao aqui o build copia o index.html ja pronto e
// troca apenas as tags de cabecalho.
//
// O Netlify serve dist/matriculas/index.html quando pedem /matriculas, porque
// arquivo existente tem precedencia sobre o redirect de fallback.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(raiz, 'dist')
const site = 'https://colegiomeninojesus.com'

const paginas = [
  {
    rota: 'matriculas',
    title: 'Matrículas 2027 | Colégio Menino Jesus — São Luís (MA)',
    description:
      'Matrículas 2027 abertas no Colégio Menino Jesus, em São Luís (MA): do maternal ao 9º ano, nas unidades Jardim América e Turu / Chácara Brasil. Fale com a escola e garanta o desconto de quem decide antes.',
    ogTitle: 'Matrículas 2027 | Colégio Menino Jesus',
    ogDescription:
      'Matrículas 2027 abertas: do maternal ao 9º ano, nas unidades Jardim América e Turu / Chácara Brasil, em São Luís (MA).'
  }
]

// Troca uma tag do cabecalho pela versao da rota. Se a tag sumir do index.html,
// o build quebra aqui de proposito — melhor do que publicar a pagina com o
// canonical da home de novo, que e justamente o bug que isto conserta.
const trocar = (html, padrao, nova) => {
  if (!padrao.test(html)) {
    throw new Error(`gerar-paginas: nao achei ${padrao} no index.html`)
  }
  return html.replace(padrao, nova)
}

const gerar = (html, pagina) => {
  const url = `${site}/${pagina.rota}`
  let saida = html

  saida = trocar(saida, /<title>[^<]*<\/title>/, `<title>${pagina.title}</title>`)
  saida = trocar(saida, /<meta name="description"[^>]*>/, `<meta name="description" content="${pagina.description}" />`)
  saida = trocar(saida, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  saida = trocar(saida, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${pagina.ogTitle}" />`)
  saida = trocar(saida, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${pagina.ogDescription}" />`)
  saida = trocar(saida, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  saida = trocar(saida, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${pagina.ogTitle}" />`)
  saida = trocar(saida, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${pagina.ogDescription}" />`)

  return saida
}

const html = await readFile(join(dist, 'index.html'), 'utf8')

for (const pagina of paginas) {
  const destino = join(dist, pagina.rota)
  await mkdir(destino, { recursive: true })
  await writeFile(join(destino, 'index.html'), gerar(html, pagina), 'utf8')
  console.log(`gerar-paginas: dist/${pagina.rota}/index.html`)
}
