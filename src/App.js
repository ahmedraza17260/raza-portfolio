import { useState } from "react";
// import Contact from './components/Contact.js';
// import Experience from './components/Experience.js';
// import Footer from './components/Footer.js';
// import HeroSection from './components/HeroSection.js';
// import Navbar from './components/Navbar.js';
// import Projects from './components/Projects.js';
// import Certificates from './components/Certificate.js';
// import Sidebar from './components/Sidebar.js';
// import Skills from './components/Skills.js';
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

// import DayNightToggle from "react-day-and-night-toggle";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Skills />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
