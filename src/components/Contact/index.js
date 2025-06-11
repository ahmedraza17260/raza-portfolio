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
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
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

function Contact() {
  return (
    <AboutContainer id="contact">
      <AboutWrapper>
      <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        {/* <Fade left> */}
          <Column1>
            <Heading>Reach Out to Me</Heading>
            <p className="sub">
              DISCUSS A PROJECT? E-MAIL ME
              <BiMailSend size={25} />
            </p>
            <Subtitle>
              <Justify>
                I am Applied Chemistry Students, a passionate person when it
                comes to working and my goal is to expand my skills and
                knowledge in Quality Department, I am a hard worker and eager to
                learn to make a valuable asset in any team.
              </Justify>
              <br />
              Open for opportunities: Yes
            </Subtitle>

            <span className="location">
              <ImLocation2 size={25} />
              Karachi, Pakistan
            </span>

            <SocialIcons>
              <NavBtn href={githubURL} target="_blank">
                <img
                  style={{
                    filter: "invert(100%)",
                    webkitFilter: "invert(100%)",
                  }}
                  src={github}
                  alt=""
                />
              </NavBtn>
              <NavBtn href={linkedinURL} target="_blank">
                <img src={linkedin} alt="" />
              </NavBtn>
              <NavBtn href={mailtoURL} target="_blank">
                <img src={gmail} alt="" />
              </NavBtn>
              <NavBtn href={twitterURL} target="_blank">
                <img src={twitter} alt="" />
              </NavBtn>
              <NavBtn href={instagramURL} target="_blank">
                <img src={instagram} alt="" />
              </NavBtn>
              <NavBtn href={fbURL} target="_blank">
                <img src={facebook} alt="" />
              </NavBtn>
              <NavBtn href={pinterestURL} target="_blank">
                <img src={pinterest} alt="Instagram" />
              </NavBtn>
            </SocialIcons>
          </Column1>
        {/* </Fade> */}
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        {/* <Fade right> */}
          <Column2>
            <img src={profile} alt="ahmed raza" />
          </Column2>
        </motion.div>
        {/* </Fade> */}
      </AboutWrapper>
    </AboutContainer>
  );
}

export default Contact;
