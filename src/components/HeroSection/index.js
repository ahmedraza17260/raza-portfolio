import React from "react";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { BsArrowRightShort } from "react-icons/bs";

import {
  HeroContainer,
  HeroH1,
  HeroP,
  HomeElement,
  HeroContent,
  SocialIcons,
  NavBtn,
  ResumeSection,
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

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Fade right>
          <div>
            <HeroH1>
              Hey!, I'm <br />
              {Name}
            </HeroH1>
            <HeroP>
              I'm <Typical loop={Infinity} wrapper="b" steps={MainSkills} />
            </HeroP>
            <SocialIcons>
              <NavBtn href={githubURL} target="_blank">
                <img
                  style={{
                    filter: "invert(100%)",
                    webkitFilter: "invert(100%)",
                  }}
                  src={github}
                  alt="Github"
                />
              </NavBtn>
              <NavBtn href={linkedinURL} target="_blank">
                <img src={linkedin} alt="Linkedin" />
              </NavBtn>
              <NavBtn href={mailtoURL} target="_blank">
                <img src={gmail} alt="Gmail" />
              </NavBtn>
              <NavBtn href={twitterURL} target="_blank">
                <img src={twitter} alt="Twitter" />
              </NavBtn>
              <NavBtn href={fbURL} target="_blank">
                <img src={facebook} alt="Facebook" />
              </NavBtn>
              <NavBtn href={instagramURL} target="_blank">
                <img src={instagram} alt="Instagram" />
              </NavBtn>
              <NavBtn href={pinterestURL} target="_blank">
                <img src={pinterest} alt="Instagram" />
              </NavBtn>
            </SocialIcons>

            <ResumeSection>
              <span> See my Resume</span>
              <a href={resumeURL} target="__blank" alt="Cv Preview">
                <BsArrowRightShort />
              </a>
            </ResumeSection>
          </div>
          <HomeElement src={homeElement} alt="image" />
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
