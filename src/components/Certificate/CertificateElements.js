import styled from "styled-components";

export const CertificateImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for uniformity */
  object-fit: cover; /* Ensures image fills the area without stretching */
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)).
  gap: 20px;
  max-width: 1100px; /* Constrains the grid */
  margin: 0 auto;    /* Centers it */
  padding: 20px;
`;



export const CertificateContainer = styled.div`
  // background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  // color: ${({ theme }) => theme.text};
  // padding: 40px 20px;
  // width: 100%;
  // /* Removed fixed max-width on mobile, use box-sizing to keep it contained */
  // box-sizing: border-box; 
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // overflow-x: hidden; /* Stops horizontal scrollbar */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AllCertificate = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: flex-start;
  // gap: 30px;
  // width: 100%; /* Changed from max-width: 1500px to 100% */
  // margin: 0 auto;
  // padding: 20px;
  // box-sizing: border-box;

  display: grid;
  /* This creates a responsive grid that stays neat */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

`;

export const Certificate = styled.div`
  // width: 400px;
  // display: flex;
  // flex-direction: column;
  // padding: 20px;
  // border-radius: 10px;
  // box-sizing: border-box; /* IMPORTANT: Keeps padding inside the width */
  // background-color: ${({ theme }) => theme.sectionAlt}; /* Use sectionAlt to make cards pop */
  // flex-shrink: 0; 

  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background}; /* Use background color for card contrast */
  width: 100%; /* Fill the grid cell */
  box-sizing: border-box; /* Ensures padding doesn't push the card out of the grid */
  box-shadow: ${({ theme }) => 
    theme.background === "#0b0c1a" || theme.mode === "dark"
      ? "0 6px 20px rgba(255, 255, 255, 0.15)" 
      : "0 6px 20px rgba(0, 0, 0, 0.3)"
  };
  
  // @media screen and (max-width: 460px) {
  //   width: 100%; /* Makes card fill 100% of mobile screen width */
  //   max-width: 320px; /* Prevents it from getting too wide */
  // }
`;

export const CertificateTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};

  * {
    margin-right: 10px;
  }
`;

export const CertificateDesc = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: -5px;
  min-height: 50px;
`;

export const CertificateDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Stacks = styled.div`
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  color: ${({ theme }) => theme.text};

  > * {
    padding: 8px;
    margin: 0px 5px;
  }
`;

export const SourceButtons = styled.div`
  display: flex;
  justify-content: space-between;

  .MuiButton-root {
    background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
    padding: 8px;
    font-weight: 600;
    margin-right: 8px;
    color: ${({ theme }) => theme.text};

    /* Fixed: Added '&' context selector */
    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      transform: scale(1.01);
    }
  }
`;

export const MoreButton = styled.a`
  margin: 10px 0px;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;

  /* Fixed: Added '&' context selector */
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transform: scale(1.04);
  }
`;