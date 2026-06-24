"use client";
import React, { useState, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";

import {
  HeroContainer,
  HeroH1,
  HeroP,
  HomeElement,
  HeroContent,
  SocialIcons,
  NavBtn,
  ResumeSection,
  HeroTextWrapper,
} from "./HeroElements";

import {
  fbURL,
  githubURL,
  linkedinURL,
  mailtoURL,
  MainSkills,
  twitterURL,
  instagramURL,
  Name,
  resumeURL,
  pinterestURL,
} from "../../Data";

const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function HeroSection() {
  const theme = useTheme();
   const isDarkMode = theme?.mode === "dark" || theme?.background === "#0b0c1a"; 
  
  // const isDarkMode = theme?.mode === "dark";
  const [mounted, setMounted] = useState(false);

  // Prevent dynamic third-party text animations from breaking SSR layout streams
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section $alt id="home">
      <HeroContainer>
        <HeroContent>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTextWrapper>
              <HeroH1>
                Hey!, I'm <br /> {Name}
              </HeroH1>

              <HeroP>
                I'm{" "}
                <span style={{ fontWeight: "bold" }}>
                  {mounted ? (
                    <Typewriter
                      words={MainSkills}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  ) : (
                    MainSkills[0] || ""
                  )}
                </span>
              </HeroP>

              <SocialIcons>
                <NavBtn href={githubURL} target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
                  <img
                    src="/images/github.png"
                    alt="Visit my GitHub profile"
                    style={{ filter: isDarkMode ? "brightness(0) invert(1)" : "brightness(1) invert(0)" }}
                  />
                </NavBtn>
                <NavBtn href={linkedinURL} target="_blank" rel="noopener noreferrer" aria-label="Linkedin Profile">
                  <img src="/images/linkedin.png" alt="LinkedIn profile" />
                </NavBtn>
                <NavBtn href={mailtoURL} target="_blank" rel="noopener noreferrer" aria-label="Gmail Contact">
                  <img src="/images/gmail.png" alt="Gmail contact link" />
                </NavBtn>
                <NavBtn href={twitterURL} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                  <img src="/images/twitter.png" alt="Twitter profile" />
                </NavBtn>
                <NavBtn href={fbURL} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                  <img src="/images/facebook.png" alt="Facebook profile" />
                </NavBtn>
                <NavBtn href={instagramURL} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <img src="/images/instagram.png" alt="Instagram profile" />
                </NavBtn>
                <NavBtn href={pinterestURL} target="_blank" rel="noopener noreferrer" aria-label="Pinterest Profile">
                  <img src="/images/pinterest.png" alt="Pinterest profile" />
                </NavBtn>
              </SocialIcons>

              <ResumeSection>
                <span> See my Resume</span>
                <a
                  href={resumeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CV Preview File"
                >
                  <BsArrowRightShort />
                </a>
              </ResumeSection>
            </HeroTextWrapper>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HomeElement src="/images/6.gif" alt="Hero decorative animated graphic" />
          </motion.div>

        </HeroContent>
      </HeroContainer>
    </Section>
  );
}

export default HeroSection;