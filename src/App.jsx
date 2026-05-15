import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Platform from './components/Platform'
import Industries from './components/Industries'
import ProductSpotlight from './components/ProductSpotlight'
import CommonThread from './components/CommonThread'
import KPIIntelligence from './components/KPIIntelligence'
import Architecture from './components/Architecture'
import ProofPoints from './components/ProofPoints'
import CTASection from './components/CTASection'
import StickyBottomBar from './components/StickyBottomBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <Platform />
        <Industries />
        <ProductSpotlight />
        <CommonThread />
        <KPIIntelligence />
        <Architecture />
        <ProofPoints />
        <CTASection />
      </main>
      <Footer />
      <StickyBottomBar />
    </>
  )
}
