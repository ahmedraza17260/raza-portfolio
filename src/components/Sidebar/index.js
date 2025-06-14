import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

// import styled from "styled-components";


// const Section = styled.section`
//   background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
//   color: ${({ theme }) => theme.text};
//   padding: 2rem;
// `;

function Sidebar({ isOpen, toggle }) {
  // console.log("SidebarElements loaded"); // move here

  return (
    // <Section alt>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="experience" onClick={toggle}>
              Experience
            </SidebarLink>
            <SidebarLink to="Certificate" onClick={toggle}>
              Certificates
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    // </Section>
  );
}

export default Sidebar;
