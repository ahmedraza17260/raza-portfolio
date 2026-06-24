import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 24px;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 28px; /* Smaller font on mobile prevents wrapping */
    line-height: 1.1;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 16px; /* Adjust subtitle size for mobile */
  }
`;


export const HeroH1 = styled.h1`
  font-size: 3.5rem;
  // line-height: 1.2;
  line-height: 1.1; /* Tighten line height to stop gap/overlap */
  font-weight: 700;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 1180px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 600px) {
    // font-size: 2.2rem;
    font-size: 2rem; /* Significant reduction for mobile */
  }
`;

export const HeroP = styled.div`
  font-size: 1.6rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  min-height: 40px; /* Stabilizes layouts against vertical shifts during text typing loops */

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 2rem;

  @media screen and (max-width: 930px) {
    justify-content: center;
  }
`;

export const NavBtn = styled.a`
  cursor: pointer;
  display: inline-block;

  img {
    width: 36px;
    height: 36px;
    transition: transform 0.2s ease-in-out;
    
    /* Fixed: Added context indicator prefix safely */
    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const ResumeSection = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 930px) {
    justify-content: center;
    margin-bottom: 2rem;
  }

  span {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    margin-right: 0.75rem;
  }

  a {
    color: ${({ theme }) => theme.text};
    font-size: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.text};
    padding: 4px;
    aspect-ratio: 1/1;
    border-radius: 999px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      transform: scale(1.05);
    }
  }
`;

export const HeroTextWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 0 15px; /* Add padding to prevent text hitting screen edges */
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    word-wrap: break-word; /* Ensure long words break */
    overflow-wrap: break-word;
  }

`;

export const HomeElement = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 2rem;

  @media screen and (max-width: 1180px) {
    max-width: 320px;
  }
  @media screen and (max-width: 930px) {
    max-width: 280px;
  }
`;