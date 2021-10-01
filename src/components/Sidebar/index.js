import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
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
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Me
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
