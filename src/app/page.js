"use client";

import { useState, useContext } from "react";
import { ThemeToggleContext } from "../../lib/ThemeWrapper";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Certificates from "../components/Certificate";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
`;

// In your styled elements file
export const Separator = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.text}; // Uses your theme's text color
  opacity: 0.2; // Makes it subtle
  margin: 0.5rem 0;
`;

export default function Home() {
  const { isDarkMode, toggleTheme } = useContext(ThemeToggleContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <HeroSection $alt />
      <Separator />

      <Skills />
      <Separator />

      <Experience $alt />
      <Separator />

      <Certificates />
      <Separator />

      <Projects $alt />
      <Separator />

      <Contact />
      <Footer />
    </Container>
  );
}
