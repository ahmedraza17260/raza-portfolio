import React from "react";
import Fade from "react-reveal/Fade";

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
      <Fade left>
        <AllSkills>
          <Heading>What I do</Heading>

          <p>Quality Control who wants to explore every tech stack</p>
          <SkillIcons>
            Quality Control / Assurance
            <SubPart>
              {Quality.map((data) => (
                <SkillIcon>
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
                <SkillIcon>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
            Frontend Tools
            <SubPart>
              {FrontendTools.map((data) => (
                <SkillIcon>
                  {data.icon}
                  <p>{data.name}</p>
                </SkillIcon>
              ))}
            </SubPart>
            Backend Tools
            <SubPart>
              {BackendTools.map((data) => (
                <SkillIcon>
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
      </Fade>
      <Fade right>
        <SkillElement>
          <img src={skillElement} alt="skillImage" />
        </SkillElement>
      </Fade>
    </SkillsContainer>
  );
}

export default Skills;
