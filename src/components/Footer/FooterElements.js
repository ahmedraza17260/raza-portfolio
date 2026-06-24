import styled from "styled-components";

export const FooterContainer = styled.div`
  /* Fixed: Swapped custom 'alt' prop to safe transient '$alt' token */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  text-decoration: none !important;
  text-align: center;
  font-size: 1.4rem;
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
  color: ${({ theme }) => theme.text};
  display: inline-block; /* Essential to allow CSS transform animations to scale smoothly */
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:active {
    text-decoration: underline;
    transform: scale(1.05); /* Softened from 1.2 to keep text clear and prevent layout overlap */
    color: ${({ theme }) => theme.text};
  }
`;