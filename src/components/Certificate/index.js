import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { GoRepo } from "react-icons/go";

// import { Button } from "@material-ui/core";

// import GD from "../../images/GD CERTIFICATE.jpg";
// import LINUX from "../../images/LINUX CERTIFICATE.jpg";
// import NOOR from "../../images/";
// import AGILE from "../../images/GD CERTIFICATE.jpg";
// import BBSYDP from "../../images/GD CERTIFICATE.jpg";
// import SDC from "../../images/GD CERTIFICATE.jpg";
// import SDC_MS from "../../images/GD CERTIFICATE.jpg";

// import {
//   CertificateContainer,
//   Heading,
//   CertificateProject,
//   Certificate,
//   AllCertificate,
//   CertificateDesc,
//   CertificateTitle,
//   Stacks,
//   SourceButtons,
//   CertificateDetails,
//   MoreButton,
// } from "./CertificateElements";

import {
  CertificateContainer,
  Heading,
  Certificate,
  AllCertificate,
  CertificateTitle,
  MoreButton,
} from "./CertificateElements";
import { certificate } from "../../Data";

function Certificates() {
  return (
    <CertificateContainer id="Certificate">
      <Heading>
        <Zoom>CERTIFICATE</Zoom>
      </Heading>

      <AllCertificate>
        {certificate.map((values) => (
          <Fade top>
            <Certificate id={values.id}>
              <CertificateTitle>
                <GoRepo />
                {values.title}
              </CertificateTitle>
              <img src={values.image} alt="certificates" />
            </Certificate>
          </Fade>
        ))}
      </AllCertificate>
      <MoreButton
        href="https://drive.google.com/drive/folders/1AFSUpGwUWIf2IIm_Jup5tcHA3eVzgcTM?usp=sharing"
        target="_blank"
      >
        More Certificates
      </MoreButton>
    </CertificateContainer>
  );
}

export default Certificates;
