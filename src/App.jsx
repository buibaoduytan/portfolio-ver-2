import React from 'react'
import GradualBlur from './components/GradualBlur';
import SplashCursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gray-900">
      {/* Splash Cursor Effect */}
      <SplashCursor 
        SPLAT_FORCE={3000}
        SPLAT_RADIUS={0.2}
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={1.5}
        COLOR_UPDATE_SPEED={5}
        BACK_COLOR={{ r: 0.1, g: 0.1, b: 0.2 }}
        TRANSPARENT={true}
        CURL={2}
      />
      
      {/* Gradual Blur Effects */}
      
      <GradualBlur 
        position="bottom"
        target="page"
        strength={2}
        height="4rem"
        divCount={5}
        curve="ease-out"
        opacity={1}
        zIndex={999}
      />
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;