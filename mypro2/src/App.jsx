import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
function App() {


  return (
    <>
     <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
     </div>

    </>
  )
}

export default App
