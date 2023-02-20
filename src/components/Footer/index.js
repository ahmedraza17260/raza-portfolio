import React from "react";
import { FooterContainer } from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <div className="">
        {/* <p>All credit goes to Phoenix</p> */}
        <p>
          <a title="Styleshout" href="https://github.com/ahmedraza17260">
            &#169; Ahmed Raza
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
