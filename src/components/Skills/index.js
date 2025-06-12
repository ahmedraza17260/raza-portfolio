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
import { BackendTools, FrontendTools, Languages, Quality } from "../../Data";

function Skills() {
  return (
    <SkillsContainer id="skills">
      {/* <Fade left> */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AllSkills>
          <Heading>What I do</Heading>

          <p>Quality Control who wants to explore every tech stack</p>
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

          <p>Frontend Developer who wants to explore every tech stack</p>
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

          <p>
            ⚡ Developing high quality Front end / User Interface for web
            applications. <br />⚡ Integration of third party services such as
            Firebase. <br />
          </p>
        </AllSkills>
        </motion.div>
      {/* </Fade> */}
      {/* <Fade right> */}
       <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillElement>
          <img src={skillElement} alt="skillImage" />
        </SkillElement>
      {/* </Fade> */}
      </motion.div>
    </SkillsContainer>
  );
}

export default Skills;
