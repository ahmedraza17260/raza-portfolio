import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  /* Fixed: Swapped themeMode to transient prop format $themeMode */
  background: ${({ $themeMode }) => ($themeMode === "dark" ? "#353d47" : "#F8F8FF")};
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#c5c6c7" : "#0b0c10")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  overflow: hidden;
  opacity: ${({ $scrollNav }) => ($scrollNav ? 1 : 0)};
  transform: translateY(${({ $scrollNav }) => ($scrollNav ? "0" : "-100%")});

  box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 7px 9px 1px rgba(0, 0, 0, 0.2);
  
  /* Consolidated into a single transition definition for safety */
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: all 0.4s ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px; /* Constrain width */
  padding: 0 24px;
  margin: 0 auto;
  flex-wrap: nowrap; /* ADD THIS: Prevents wrapping */
  position: relative;
  box-sizing: border-box; /* Crucial to prevent padding from increasing width */

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    justify-content: space-between; /* Ensures logo is left, hamburger is right */
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px; /* Slightly tighter on very small screens */
  }

`;

export const NavLogo = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  height: 40px; /* Force a height to prevent it from growing too large */
  display: flex;
  width: auto;
  // margin-left: 10px; /* Reduced from 24px */
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 480px) {
    height: 25px; /* Smaller logo on mobile */
    margin-left: 10px;
  }
    
`;

// If it's a text logo:
export const NavLogoText = styled.h1`
  font-size: 1.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem; /* Shrinks the text so it fits */
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
    /* Fixed: Changed parameter lookup from themeMode to safe transient property format */
    color: ${({ $themeMode }) => ($themeMode === "dark" ? "#c5c6c7" : "#0b0c10")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px; /* Adjusts alignment */

  @media screen and (max-width: 1024px) {
    display: none !important; /* Forces hiding on mobile/tablet */
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: flex;
  font-size: 1.1rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  /* Fixed: Appended modern nesting indicators onto pseudo selectors */
  &:hover {
    color: ${({ theme }) => theme.hoverColor || "#c5c6c7"};
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.text};
    font-weight: bold;
  }
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 30px;
    padding: 15px;

    &:hover {
      background-color: #224191;
    }
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1.5rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 80px;
    z-index: 1001;
    // transform: scale(1.1);
    margin-right: 0.5rem; /* Shrink the right margin on mobile */
    transform: scale(0.9); /* Slightly shrink toggle so it doesn't collide */
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.8); /* Slightly shrink toggle on mobile */
    margin-right: 10px;
  }


  .react-toggle {
    transform: scale(1.1);
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 80%;
  height: 100%;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;