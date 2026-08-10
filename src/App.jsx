import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Stats from './components/Stats'
import Units from './components/Units'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Units />
      </main>
      <Footer />
    </>
  )
}

export default App
