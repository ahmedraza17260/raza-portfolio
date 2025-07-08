import React from "react";
// import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";


import {
  SkillsContainer,
  Heading,
  AllSkills,
  SkillElement,
  SkillIcons,
  SkillIcon,
  SubPart,
} from "./SkillsElements";
import skillElement from "../../images/5.gif";
import { BackendTools, Dyeing, FrontendTools, Languages, Quality } from "../../Data";

import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;


function Skills() {
  return (
     <Section alt id="skills">
    <SkillsContainer id="skills">

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AllSkills>
          <Heading>What I do</Heading>

          {/* <p>Quality Control who wants to explore every tech stack</p> */}
          <SkillIcons>
            Textile Sector
            <SubPart>
              {Dyeing.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
          </SkillIcons>

          <SkillIcons>
            Quality Control / Assurance
            <SubPart>
              {Quality.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
          </SkillIcons>

          {/* <p>Frontend Developer who wants to explore every tech stack</p> */}
          <SkillIcons>
            Languages
            <SubPart>
              {Languages.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
            Frontend Tools
            <SubPart>
              {FrontendTools.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
            Backend Tools
            <SubPart>
              {BackendTools.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
          </SkillIcons>

          {/* <p>
            ⚡ Developing high quality Front end / User Interface for web
            applications. <br />⚡ Integration of third party services such as
            Firebase. <br />
          </p> */}
        </AllSkills>
        </motion.div>
       <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillElement>
          <img src={skillElement} alt="skillImage" />
        </SkillElement>
      </motion.div>
    </SkillsContainer>
    </Section>
  );
}

export default Skills;
