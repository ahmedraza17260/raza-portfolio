"use client";
import React from 'react';
import {
  Column1,
  Column2,
  Heading,
  AboutContainer,
  AboutWrapper,
  Subtitle,
  NavBtn,
  SocialIcons,
  Justify,
} from "./ContactElements";

import { motion } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";

// REMOVED: Old standard relative imports
// FIXED: Using absolute routes mapping directly to public/images/
const profile = "/images/profile1.jpg";
const github = "/images/github.png";
const gmail = "/images/gmail.png";
const instagram = "/images/instagram.png";
const linkedin = "/images/linkedin.png";
const facebook = "/images/facebook.png";
const twitter = "/images/twitter.png";
const pinterest = "/images/pinterest.png";

import {
  fbURL,
  githubURL,
  instagramURL,
  linkedinURL,
  twitterURL,
  mailtoURL,
  pinterestURL,
} from "../../Data";

import styled, { useTheme } from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Contact() {
  const theme = useTheme();
  
  // Safe theme mode fallback logic
  const isDarkMode = theme?.mode === "dark" || theme?.background === "#0b0c1a"; 

  return (
    <Section $alt={true} id="contact">
      <AboutContainer>
        <AboutWrapper>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Column1>
              <Heading>Reach Out to Me</Heading>
              <span className="sub">
                DISCUSS? E-MAIL ME <BiMailSend size={25} />
              </span>
              <Subtitle>
                <Justify>
                  Applied Chemist with experience in edible oil quality control, laboratory testing, and process monitoring across textile and food industries. Skilled in analytical testing, documentation, and compliance with quality standards. Looking to contribute to product quality, regulatory compliance, and continuous improvement in a manufacturing environment.
                </Justify>
                <br />
                Open for opportunities: Yes
              </Subtitle>

              <span className="location">
                <ImLocation2 size={25} /> Karachi, Pakistan
              </span>

              <SocialIcons>
                <NavBtn href={githubURL} target="_blank" aria-label="Github_Logo">
                  <img
                    style={{ filter: isDarkMode ? "invert(100%)" : "invert(0%)" }}
                    src={github}
                    alt="Github_Logo"
                  />
                </NavBtn>
                <NavBtn href={linkedinURL} target="_blank" aria-label="Linkedin_Logo">
                  <img src={linkedin} alt="Linkedin_Logo" />
                </NavBtn>
                <NavBtn href={mailtoURL} target="_blank" aria-label="Gmail_Logo">
                  <img src={gmail} alt="Gmail_Logo" />
                </NavBtn>
                <NavBtn href={twitterURL} target="_blank" aria-label="Twitter_Logo">
                  <img src={twitter} alt="Twitter_Logo" />
                </NavBtn>
                <NavBtn href={instagramURL} target="_blank" aria-label="Instagram_Logo">
                  <img src={instagram} alt="Instagram_Logo" />
                </NavBtn>
                <NavBtn href={fbURL} target="_blank" aria-label="Facebook_Logo">
                  <img src={facebook} alt="Facebook_Logo" />
                </NavBtn>
                <NavBtn href={pinterestURL} target="_blank" aria-label="Pinterest_Logo">
                  <img src={pinterest} alt="Pinterest_Logo" />
                </NavBtn>
              </SocialIcons>
            </Column1>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Column2>
              <img src={profile} alt="ahmed raza" />
            </Column2>
          </motion.div>
        </AboutWrapper>
      </AboutContainer>
    </Section>
  );
}

export default Contact;