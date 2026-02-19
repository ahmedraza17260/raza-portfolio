import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

// import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./GlobalStyles"; // Make sure the path is correct
import './index.css'; // must match file path and be at the top level
import styled from "styled-components";
import { lightTheme, darkTheme } from "./theme"; // path might vary


const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  transition: background-color 0.4s ease, color 0.4s ease;
`;

// const Section = styled.section`
//   background-color: ${({ theme }) => theme.background};
//   color: ${({ theme }) => theme.text};
// `;

// const Text = styled.p`
//   color: ${({ isDarkMode }) => (isDarkMode ? "#c5c6c7" : "#0b0c10")};
// `;


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   console.log("Theme updated:", isDarkMode ? "Dark" : "Light");
  //   document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  // }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroSection $alt />
        <Skills />
        <Experience $alt />
        <Certificates />
        <Projects $alt />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
