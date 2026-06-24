import styled from "styled-components";

export const AboutContainer = styled.div`
  /* Fixed: Changed 'alt' to '$alt' to prevent HTML console property warnings */
  // background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
  
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  padding: 30px;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({ theme }) => theme.sectionAlt}; 
  border-radius: 16px;
  box-shadow: ${({ theme }) => 
    theme.mode === "dark" 
      ? "0 6px 20px rgba(255, 255, 255, 0.15)" 
      : "0 6px 20px rgba(0, 0, 0, 0.3)"
  };

  .sub {
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
    width: 150px;
  }

  @media screen and (max-width: 700px) {
    .location,
    .sub {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 350px) {
    .location,
    .sub {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Column2 = styled.div`
  // padding: 0 15px;
  margin-right: 20px;
  background: ${({ theme }) => theme.sectionAlt}; /* Matches card theme */
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);


  img {
    width: 100%;
    max-width: 260px;
    height: auto;
    padding-right: 0;
    border-radius: 10%;
    border: 3px solid #c5c6c7;
    box-shadow: ${({ theme }) => 
    theme.background === "#0b0c1a" || theme.mode === "dark"
      ? "0 6px 20px rgba(255, 255, 255, 0.45)" 
      : "0 6px 20px rgba(0, 0, 0, 0.45)"
  };
    

    @media screen and (max-width: 940px) {
      max-width: 250px;
    }

    @media screen and (max-width: 350px) {
      max-width: 200px;
    }
  }
`;

export const Heading = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 770px) {
    box-shadow: none; /* Clear component box shadow rule boundaries if needed */
    font-size: 32px;
  }

  @media screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.div`
  font-size: 18px;
  max-width: 800px;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 940px) {
    text-align: justify;
  }

  @media screen and (max-width: 770px) {
    font-size: 15px;
    text-align: justify;
  }

  @media screen and (max-width: 350px) {
    font-size: 13px;
    text-align: justify;
  }
`;

export const Justify = styled.div`
  text-align: justify;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 350px) {
    padding-right: 30px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
    justify-content: center;
  } /* Fixed: Closed missing media query bracket safely here */
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  img {
    width: 40px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;

    /* Fixed: Consolidated hover properties into clean modern structure */
    &:hover {
      transform: scale(1.2);
      filter: brightness(150%);
    }

    @media screen and (max-width: 770px) {
      width: 30px;
    }
  }
`;