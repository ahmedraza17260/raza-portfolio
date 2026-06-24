import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  /* Fixed: Converted 'alt' and 'isOpen' to secure transient prop formats */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  display: grid;
  align-items: center;
  left: 0;
  transition: all 0.3s ease-in-out;
  
  /* Fixed: Corrected string percentage value to numeric standard scale */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  top: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 20px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: color 0.2s ease-in-out;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverColor || "#c5c6c7"};
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.div`
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }

  @media screen and (max-width: 400px) {
    padding: 12px 32px;
    font-size: 14px;
  }
`;