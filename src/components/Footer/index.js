"use client";
import React, { useState, useEffect } from 'react';
import { FooterContainer, FooterLink } from "./FooterElements";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Footer() {
  // Fixed: Initialize state to prevent server/client timestamp mismatch
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Section $alt>
      <FooterContainer>
        <FooterLink
          title="Styleshout"
          aria-label="GitHub Profile"
          href="https://github.com/ahmedraza17260"
        >
          &#169; Ahmed Raza {year}
        </FooterLink>
      </FooterContainer>
    </Section>
  );
}

export default Footer;