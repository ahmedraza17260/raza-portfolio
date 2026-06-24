"use client";
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Toggle from "react-toggle";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollNav(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  return (
    <Nav $scrollNav={scrollNav} $themeMode={isDarkMode ? "dark" : "light"} style={{ zIndex: 1000 }}>
      <NavbarContainer>
        {/* Left Group: Logo + Theme Toggle */}
        <LeftGroup>
          <NavLinks as="a" href="#home" onClick={toggleHome}>
            <b style={{ fontSize: "clamp(1.5rem, 8vw, 2.5rem)" }}>PORTFOLIO</b>
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
          {mounted && [
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