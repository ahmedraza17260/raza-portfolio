import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #1f2833;
  font-family: "BioRhyme", "Roboto Slab", cursive, Pangolin, serif;

  letter-spacing: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  position: relative;
  z-index: 1;
  overflow-x: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

export const HomeElement = styled.img`
  width: 550px;

  @media screen and (max-width: 1180px) {
    width: 400px;
  }
  @media screen and (max-width: 930px) {
    display: none;
  }


`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  display: flex;
  padding: 8px 24px;
  align-items: center;
  justify-content: space-around;
`;

export const HeroH1 = styled.h1`
  color: #66fcf1;
  font-size: 70px;
  text-align: left;

  @media screen and (max-width: 1180px) {
    font-size: 40px;
  }
  @media screen and (max-width: 930px) {
    font-size: 60px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
    letter-spacing: 0.3rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 45px;
    letter-spacing: 0.1rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  height: 40px;
  color: #66fcf1;
  font-size: 25px;
  text-align: left;
  width: 600px;
  max-width: 700px;


  @media screen and (max-width: 1180px) {
    font-size: 16px;
    width: 500px;
  }
  @media screen and (max-width: 930px) {
    font-size: 20px;
    width: 600px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    width: 350px;
    letter-spacing: 0.3rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 18px;
    width: 300px;
    letter-spacing: 0.1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  img {
    width: 40px;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      filter: brightness(150%);
    }
  }
`;

export const ResumeSection = styled.div`
  display: flex;
  letter-spacing: 0rem;
  align-items: center;
  font-size: 1.3rem;
  justify-content: space-between;
  width: 220px;
  margin-top: 10px;
  background-color: #0b0c10;
  color: #66fcf1;
  border-radius: 50px;

  span {
    margin-left: 10px;
  }

  a {
    padding: 10px 10px;
    background-color: #66fcf1;
    border-radius: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    * {
      color: #0b0c10;
      font-size: 1.6rem;
    }
    :hover {
      background-color: #c5c6c7;
      filter: brightness(120%);
    }
  }
`;
