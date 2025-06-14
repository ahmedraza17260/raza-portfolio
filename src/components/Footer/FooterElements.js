import styled from "styled-components";

export const FooterContainer = styled.div`
  // background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%) !important;
  // background: #0b0c10;
  // background: #1f2833;
  // color: #66fcf1 !important;
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  padding: 10px;
  text-decoration: none !important;
  text-align: center;
  font-size: 1.4rem;
  // font-weight: bolder;
  // font-family: "BioRhyme", cursive, Pangolin, serif !important;
  // box-shadow: black 5px 5px 5px 5px !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #66fcf1;

  &:hover,
  &:active {
    text-decoration: underline;
    color: #45a29e;
  }
`;



  // a:link {
  //   text-decoration: none;
  //   color: #66fcf1;
  // }

  // a:visited {
  //   text-decoration: none;
  //   color: #66fcf1;
  // }

  // a:hover {
  //   text-decoration: underline;
  //   color: #45a29e;
  // }

  // a:active {
  //   text-decoration: underline;
  //   color: #45a29e;
  // }

  // p {
  //   letter-spacing: 0.04rem;

  //   @media screen and (max-width: 700px) {
  //     font-size: 1.1rem;
  //   }
  //   @media screen and (max-width: 350px) {
  //     font-size: 1rem;
  //   }
  //   @media screen and (max-width: 300px) {
  //     font-size: 0.6rem;
  //   }
  // }

