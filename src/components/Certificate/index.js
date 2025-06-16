import React from "react";

import { motion } from "framer-motion";

import { GoRepo } from "react-icons/go";

import {
  CertificateContainer,
  Heading,
  Certificate,
  AllCertificate,
  CertificateTitle,
  MoreButton,
} from "./CertificateElements";
import { certificate } from "../../Data";

import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Certificates() {
  return (
    <Section alt id="Certificate">
      <CertificateContainer alt id="Certificate">
        <Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            CERTIFICATE
          </motion.div>
        </Heading>

        <AllCertificate>
          {certificate.map((values) => (

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Certificate id={values.id}>
                <CertificateTitle>
                  <GoRepo />
                  {values.title}
                </CertificateTitle>
                <img src={values.image} alt="certificates" />
              </Certificate>
            </motion.div>

          ))}
        </AllCertificate>
        <MoreButton
          href="https://drive.google.com/drive/folders/1AFSUpGwUWIf2IIm_Jup5tcHA3eVzgcTM?usp=sharing"
          target="_blank"
          aria-label="More Certificate"
        >
          More Certificates
        </MoreButton>
      </CertificateContainer>
    </Section>
  );
}

export default Certificates;
