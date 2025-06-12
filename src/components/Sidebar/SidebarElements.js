import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  background: hsla(228, 19%, 5%, 1);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1E3A82", endColorstr="#213D87", GradientType=1 );
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  overflow-y: auto;
`;

export const CloseIcon = styled(FaTimes)`
  color: #c5c6c7;
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
  color: #c5c6c7;
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 20px;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-rows: repeat(6, 70px);
  text-align: center;

  @media screen and (max-width: 280px) {
  grid-template-rows: repeat(6, 50px);
}

`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #45a29e;
  cursor: pointer;

  &:hover {
    color: #c5c6c7;
    transition: 0.2s ease-in-out;
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
  background: #c5c6c7 !important;
  white-space: nowrap;
  padding: 16px 64px;
  color: #c5c6c7;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #c5c6c7;
    // color: #c5c6c7;
  }

  @media screen and (max-width: 400px) {
  padding: 12px 32px;
  font-size: 14px;
}
`;



// background: hsla(223, 62%, 31%, 1);
  // background: linear-gradient(
  //   315deg,
  //   hsla(228, 19%, 5%, 1) 7%,
  //   hsla(228, 19%, 5%, 1) 23%,
  //   hsla(228, 19%, 5%, 1) 45%,
  //   hsla(228, 19%, 5%, 1) 66%,
  //   hsla(228, 19%, 5%, 1) 81%,
  //   hsla(228, 19%, %, 1) 98%
  // );

  // background: -moz-linear-gradient(
  //   315deg,
  //   hsla(223, 62%, 31%, 1) 7%,
  //   hsla(224, 61%, 33%, 1) 23%,
  //   hsla(225, 55%, 39%, 1) 45%,
  //   hsla(228, 50%, 49%, 1) 66%,
  //   hsla(229, 62%, 57%, 1) 81%,
  //   hsla(230, 90%, 68%, 1) 98%
  // );

  // background: -webkit-linear-gradient(
  //   315deg,
  //   hsla(223, 62%, 31%, 1) 7%,
  //   hsla(224, 61%, 33%, 1) 23%,
  //   hsla(225, 55%, 39%, 1) 45%,
  //   hsla(228, 50%, 49%, 1) 66%,
  //   hsla(229, 62%, 57%, 1) 81%,
  //   hsla(230, 90%, 68%, 1) 98%
  // );