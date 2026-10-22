import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Stats from './components/Stats'
import Units from './components/Units'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FloatingContacts from './components/FloatingContacts'
import CookieBanner from './components/CookieBanner'
import Matriculas from './components/Matriculas'
import './App.css'

// O site é uma página só com âncoras, mais a landing de matrículas em /matriculas.
// Como o Netlify devolve o index.html para qualquer caminho, basta olhar o pathname
// aqui — não vale a pena trazer um router para duas telas.
const ehMatriculas = () => /^\/matriculas\/?$/.test(window.location.pathname)

function App() {
  const matriculas = ehMatriculas()

  return (
    <>
      <Header />
      <main>
        {matriculas ? (
          <Matriculas />
        ) : (
          <>
            <Hero />
            <Features />
            <About />
            <Stats />
            <Units />
            <Gallery />
          </>
        )}
      </main>
      <Footer />
      <FloatingContacts />
      <CookieBanner />
    </>
  )
}

export default App
