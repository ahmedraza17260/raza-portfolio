import React from "react";
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

// import profile from "../../images/profile.jpg";

import profile from "../../images/profile1.jpg";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import pinterest from "../../images/pinterest.png";

import {
  fbURL,
  githubURL,
  instagramURL,
  linkedinURL,
  twitterURL,
  mailtoURL,
  pinterestURL,
} from "../../Data";


import styled from "styled-components";
import { useTheme } from 'styled-components';

const Section = styled.section`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;



function Contact() {
  const theme = useTheme(); // ✅ Now `theme` is defined
  const isDarkMode = theme.mode === "dark"; // depends on your theme object structure
  return (
    <Section alt id="contact">
    <AboutContainer alt id="contact">
      <AboutWrapper>
      <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
       
          <Column1>
            <Heading>Reach Out to Me</Heading>
            <p className="sub">
              DISCUSS A PROJECT? E-MAIL ME
              <BiMailSend size={25} />
            </p>
            <Subtitle>
              <Justify>
                Highly motivated professional with 2+ years of experience in process control, dyeing planning, and production costing within the textile industry. Seeking a role to improve operational efficiency, minimize rework, and drive continuous improvement in manufacturing operations.             
              </Justify>
              <br />
              Open for opportunities: Yes
            </Subtitle>

            <span className="location">
              <ImLocation2 size={25} />
              Karachi, Pakistan
            </span>

            <SocialIcons>
              <NavBtn href={githubURL} target="_blank" aria-label="Github_Logo">
                <img
                  style={{ filter: isDarkMode === "light" ? "invert(100%)" : "invert(0%)" }}
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
