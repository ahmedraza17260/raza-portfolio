import React from "react";
import { FooterContainer, FooterLink } from "./FooterElements";
import styled from "styled-components";

// Use $alt so it doesn't get passed to DOM
const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Footer() {
  return (
    <Section $alt>
      <FooterContainer>
        <FooterLink
          title="Styleshout"
          aria-label="GitHub Profile"
          href="https://github.com/ahmedraza17260"
        >
          &#169; Ahmed Raza {new Date().getFullYear()}
        </FooterLink>
      </FooterContainer>
    </Section>
  );
}

export default Footer;
