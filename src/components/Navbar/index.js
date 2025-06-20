import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css";

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

import { ThemeToggleWrapper, LeftGroup } from "./NavbarElements"; // import this


function Navbar({ toggle, isDarkMode, toggleTheme }) {
  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollNav(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // ✅ LOG GOES HERE
  // console.log("NavbarElements loaded");

  return (
    <Nav style={{ zIndex: 1000 }} themeMode={isDarkMode ? "dark" : "light"} $scrollNav={scrollNav}>
      <NavbarContainer>
        <LeftGroup>
          <NavLinks as="a" href="#home" onClick={toggleHome}>
            <b style={{ fontSize: "2.5rem" }}>PORTFOLIO</b>
          </NavLinks>


          <ThemeToggleWrapper>
            <Toggle
              defaultChecked={isDarkMode}
              onChange={toggleTheme}
              icons={{ checked: "🌙", unchecked: "☀️" }}
            />
          </ThemeToggleWrapper>
        </LeftGroup>

        <MobileIcon onClick={toggle} themeMode={isDarkMode ? "dark" : "light"}>
          <FaBars />
        </MobileIcon>

        <NavMenu>

          <NavItem>
            <NavLinks
              to="home"
              href="#home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              href="#skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Skills
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="experience"
              href="#experience"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Experience
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="Certificate"
              href="#Certificate"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Certificates
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              href="#projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              href="#contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Me
            </NavLinks>
          </NavItem>

        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
