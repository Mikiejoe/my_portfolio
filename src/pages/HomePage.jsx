import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Portfolio from '../components/Homepage/Portfolio'
import Contact from '../components/Homepage/Contact'
import Skills from '../components/Homepage/Skills'
function HomePage() {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className="px-32 relative">
    <div className='h-screen'>
    
      <Hero/>
    </div>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default HomePage