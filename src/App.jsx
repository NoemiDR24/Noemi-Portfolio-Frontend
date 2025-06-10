import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import './App.css'
import About from './components/sections/About.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
