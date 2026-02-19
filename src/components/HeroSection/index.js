import React from "react";
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

import homeElement from "../../images/6.gif";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import pinterest from "../../images/pinterest.png";

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

// Styled section with transient prop $alt
const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function HeroSection() {
  const theme = useTheme();
  const isDarkMode = theme.mode === "dark";

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
                  <Typewriter
                    words={MainSkills}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </HeroP>

              <SocialIcons>
                <NavBtn href={githubURL} target="_blank" aria-label="Github_Logo">
                  <img
                    src={github}
                    alt="Visit my GitHub profile"
                    style={{ filter: isDarkMode ? "invert(100%)" : "invert(25%)" }}
                  />
                </NavBtn>
                <NavBtn href={linkedinURL} target="_blank" aria-label="Linkedin_Logo">
                  <img src={linkedin} alt="LinkedIn profile" />
                </NavBtn>
                <NavBtn href={mailtoURL} target="_blank" aria-label="Gmail_Logo">
                  <img src={gmail} alt="Gmail" />
                </NavBtn>
                <NavBtn href={twitterURL} target="_blank" aria-label="Twitter_Logo">
                  <img src={twitter} alt="Twitter profile" />
                </NavBtn>
                <NavBtn href={fbURL} target="_blank" aria-label="Facebook_Logo">
                  <img src={facebook} alt="Facebook profile" />
                </NavBtn>
                <NavBtn href={instagramURL} target="_blank" aria-label="Instagram_Logo">
                  <img src={instagram} alt="Instagram profile" />
                </NavBtn>
                <NavBtn href={pinterestURL} target="_blank" aria-label="Pinterest_Logo">
                  <img src={pinterest} alt="Pinterest profile" />
                </NavBtn>
              </SocialIcons>

              <ResumeSection>
                <span> See my Resume</span>
                <a
                  href={resumeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CV Preview"
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
            <HomeElement src={homeElement} alt="Hero Animation" />
          </motion.div>

        </HeroContent>
      </HeroContainer>
    </Section>
  );
}

export default HeroSection;


//  <HeroContainer id="home">
//       <HeroContent>
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div style={{}}>
//             <div>
//               <HeroH1>
//                 Hey!, I'm <br />
//                 {Name}
//               </HeroH1>
//               <HeroP>
//                 I'm{" "}
//                 <span style={{ color: "#00FFAB", fontWeight: "bold" }}>
//                   <Typewriter
//                     words={MainSkills}
//                     loop={Infinity}
//                     cursor
//                     cursorStyle="_"
//                     typeSpeed={70}
//                     deleteSpeed={50}
//                     delaySpeed={1000}
//                   />
//                 </span>
//               </HeroP>
          
//               <SocialIcons>
//                 <NavBtn href={githubURL} target="_blank" aria-label="Github_Logo">
//                   <img
//                     style={{
//                       filter: "invert(100%)",
//                       WebkitFilter: "invert(100%)",
//                     }}
//                     src={github}
//                     alt="Github"
//                   />
//                 </NavBtn>
//                 <NavBtn href={linkedinURL} target="_blank" aria-label="Linkedin_Logo" >
//                   <img src={linkedin} alt="Linkedin" />
//                 </NavBtn>
//                 <NavBtn href={mailtoURL} target="_blank" aria-label="Gmail_Logo">
//                   <img src={gmail} alt="Gmail" />
//                 </NavBtn>
//                 <NavBtn href={twitterURL} target="_blank" aria-label="Twitter_Logo">
//                   <img src={twitter} alt="Twitter" />
//                 </NavBtn>
//                 <NavBtn href={fbURL} target="_blank" aria-label="Facebook_Logo">
//                   <img src={facebook} alt="Facebook" />
//                 </NavBtn>
//                 <NavBtn href={instagramURL} target="_blank" aria-label="Instagram_Logo">
//                   <img src={instagram} alt="Instagram" />
//                 </NavBtn>
//                 <NavBtn href={pinterestURL} target="_blank" aria-label="Pinterest_Logo">
//                   <img src={pinterest} alt="Pinterest" />
//                 </NavBtn>
//               </SocialIcons>

//               <ResumeSection>
//                 <span> See my Resume</span>
//                 <a href={resumeURL} target="__blank" alt="Cv Preview" aria-label="Cv Preview">
//                   <BsArrowRightShort />
//                 </a>
//               </ResumeSection>
//             </div>
//             <HomeElement src={homeElement} alt="image" />
//           </div>
//         </motion.div>
//       </HeroContent>
//     </HeroContainer>