import React from 'react'

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container'
import { Navbar } from './components'
import './App.css'

const App = () => (
  <div id="top">
    <Navbar />
    <main>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </main>
    <Footer />
  </div>
)

export default App
