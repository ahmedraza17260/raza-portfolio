import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #0b0c10;
  // background: #1f2833;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  color: #66fcf1;
  padding: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  word-spacing: 0.5rem;
  letter-spacing: 0.1rem;
  margin-left: 10px;
  .sub {
    color: #45a29e;
    display: flex;
    align-items: center;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #66fcf1;
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
`;

export const Column2 = styled.div`
  padding: 0 15px;
  margin-right: 20px;

  img {
    width: 260px;
    padding-right: 0;
    border-radius: 10%;
    border: 3px solid #c5c6c7;
    // border: 5px solid #1f2833;
    @media screen and (max-width: 940px) {
      width: 250px;
    }
    @media screen and (max-width: 350px) {
      width: 200px;
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #c5c6c7;

  @media screen and (max-width: 770px) {
    font-size: 32px;
  }
  @media screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  color: "#45a29e";
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
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  // background: #1f2833;
  // width: auto; ;
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  img {
    width: 40px;
    cursor: pointer;
    @media screen and (max-width: 770px) {
      width: 30px;
    }

    :hover {
      transform: scale(1.05);
      filter: brightness(150%);
    }
  }
`;
