"use client";
import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

import styled from "styled-components";

const Section = styled.section`
  /* Fixed: Swapped custom alt parameter to safe transient prop format */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 0; /* Clear padding so the overlay container fills the absolute layout bounds correctly */
`;

function Sidebar({ isOpen, toggle }) {
  return (
    <Section $alt>
      {/* Pass $isOpen as transient prop to avoid React warnings */}
      <SidebarContainer $isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Home
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Skills
            </SidebarLink>
            <SidebarLink to="experience" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Experience
            </SidebarLink>
            <SidebarLink to="Certificate" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Certificates
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} offset={-80}>
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </Section>
  );
}

export default Sidebar;