"use client";
import React from 'react';
import { motion } from "framer-motion";

import {
  SkillsContainer,
  Heading,
  AllSkills,
  SkillElement,
  SkillIcons,
  SkillIcon,
  SubPart,
  SkillCategoryTitle,
  SkillsMainWrapper,
  SkillsGrid,
  SkillCard
} from "./SkillsElements";

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
      <SkillsMainWrapper> {/* This restricts width to 1100px */}
        <Heading style={{ textAlign: 'center' }}>What I Do</Heading>
        
        <SkillsGrid>
          {/* Group 1: Industrial Skills */}
          <SkillCard>
            <SkillCategoryTitle>Quality Control / Assurance</SkillCategoryTitle>
            <SubPart>
              {Quality.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <span>{data.name}</span>
                </SkillIcon>
              ))}
            </SubPart>
          </SkillCard>

          <SkillCard>
            <SkillCategoryTitle>Textile Sector</SkillCategoryTitle>
            <SubPart>
              {Dyeing.map((data) => (
                <SkillIcon key={data.name}>
                  {data.icon}
                  <span>{data.name}</span>
                </SkillIcon>
              ))}
            </SubPart>
          </SkillCard>

          {/* Group 2: Tech Skills */}
          <SkillCard>
            <SkillCategoryTitle>Development</SkillCategoryTitle>
            <SubPart>
              {Languages.map((data, index) => (
                <SkillIcon key={`lang-${data.name}-${index}`}>{data.icon}<span>{data.name}</span></SkillIcon>
              ))}
              {FrontendTools.map((data, index) => (
                <SkillIcon key={`frontend-${data.name}-${index}`}>{data.icon}<span>{data.name}</span></SkillIcon>
              ))}
              {BackendTools.map((data, index) => (
                <SkillIcon key={`backend-${data.name}-${index}`}>{data.icon}<span>{data.name}</span></SkillIcon>
              ))}
            </SubPart>
          </SkillCard>
        </SkillsGrid>

        {/* Decorative GIF moved to a smaller, centered position */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img src="/images/5.gif" alt="Showcase" style={{ maxWidth: '300px', height: 'auto' }} />
        </div>
      </SkillsMainWrapper>
    </Section>
  );
}
export default Skills;
