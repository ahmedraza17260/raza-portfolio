import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import Slide from "react-reveal/Slide";

import Logo from "../../images/logo.png";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <></>
        <NavLinks onClick={toggleHome}>
          <b style={{ fontSize: "2.5rem" }}>PORTFOLIO</b>
        </NavLinks>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
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
              to="projects"
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
