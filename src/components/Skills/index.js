import React from "react";
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
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Skills() {
  return (
    <Section $alt={true} id="skills">
      <SkillsContainer id="skills">
        {/* Left side: skill lists */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AllSkills>
            <Heading>What I Do</Heading>

            {/* Quality Control */}
            <SkillIcons>
              Quality Control / Assurance
              <SubPart>
                {Quality.map((data) => (
                  <SkillIcon key={data.name}>
                    {data.icon}
                    {/* <p>{data.name}</p> */}
                    <span>{data.name}</span>
                  </SkillIcon>
                ))}
              </SubPart>
            </SkillIcons>

            {/* Textile Sector */}
            <SkillIcons>
              Textile Sector
              <SubPart>
                {Dyeing.map((data) => (
                  <SkillIcon key={data.name}>
                    {data.icon}
                    <span>{data.name}</span>
                  </SkillIcon>
                ))}
              </SubPart>
            </SkillIcons>

            {/* Development Skills */}
            <SkillIcons>
              Languages
              <SubPart>
                {Languages.map((data) => (
                  <SkillIcon key={data.name}>
                    {data.icon}
                    <span>{data.name}</span>
                  </SkillIcon>
                ))}
              </SubPart>

              Frontend Tools
              <SubPart>
                {FrontendTools.map((data) => (
                  <SkillIcon key={data.name}>
                    {data.icon}
                    <span>{data.name}</span>
                  </SkillIcon>
                ))}
              </SubPart>

              Backend Tools
              <SubPart>
                {BackendTools.map((data) => (
                  <SkillIcon key={data.name}>
                    {data.icon}
                    <span>{data.name}</span>
                  </SkillIcon>
                ))}
              </SubPart>
            </SkillIcons>
          </AllSkills>
        </motion.div>

        {/* Right side: image/visual */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillElement>
            <img src={skillElement} alt="Skill Illustration" />
          </SkillElement>
        </motion.div>
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
