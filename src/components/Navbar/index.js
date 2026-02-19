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
  ThemeToggleWrapper,
  LeftGroup,
} from "./NavbarElements";

function Navbar({ toggle, isDarkMode, toggleTheme }) {
  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollNav(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav $scrollNav={scrollNav} $themeMode={isDarkMode ? "dark" : "light"} style={{ zIndex: 1000 }}>
      <NavbarContainer>
        {/* Left Group: Logo + Theme Toggle */}
        <LeftGroup>
          <NavLinks as="a" href="#home" onClick={toggleHome}>
            <b style={{ fontSize: "2.5rem" }}>PORTFOLIO</b>
          </NavLinks>

          <ThemeToggleWrapper>
            <Toggle
              checked={isDarkMode}
              onChange={toggleTheme}
              icons={{ checked: "🌙", unchecked: "☀️" }}
            />
          </ThemeToggleWrapper>
        </LeftGroup>

        {/* Mobile Hamburger Icon */}
        <MobileIcon onClick={toggle} $themeMode={isDarkMode ? "dark" : "light"}>
          <FaBars />
        </MobileIcon>

        {/* Navigation Menu */}
        <NavMenu>
          {[
            { name: "Home", href: "home" },
            { name: "Skills", href: "skills" },
            { name: "Experience", href: "experience" },
            { name: "Certificates", href: "Certificate" },
            { name: "Projects", href: "projects" },
            { name: "Contact Me", href: "contact" },
          ].map((item) => (
            <NavItem key={item.href}>
              <NavLinks
                to={item.href}
                href={`#${item.href}`}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {item.name}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
