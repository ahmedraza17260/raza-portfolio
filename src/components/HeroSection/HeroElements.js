// HeroElements.js
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: transparent; /* inherited from Section */
  // background: ${({ themeMode }) => (themeMode === "dark" ? "#353d47" : "#FAF9F6")};
  color: ${({ themeMode }) => (themeMode === "dark" ? "#c5c6c7" : "#0b0c10")};


`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  // background: ${({ themeMode }) => (themeMode === "dark" ? "#353d47" : "#F8F8FF")};
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  flex-wrap: wrap;
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text}; /* ✅ dynamic color */
`;

export const HeroP = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text}; /* ✅ dynamic color */
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

`;

export const NavBtn = styled.a`
  img {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ResumeSection = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.text}; /* ✅ dynamic color */

  span {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  a {
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.text};
  padding: 0.5rem;
  aspect-ratio: 1/1; /* Maintain square shape */
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  border: 2px solid ${({ theme }) => theme.text};
  padding: 0px 0px;
  border-radius: 999px; /* 🔁 Makes it fully rounded */
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
}
`;

export const HeroTextWrapper = styled.div`
  max-width: 600px;
`;

export const HomeElement = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 2rem;
  
`;


// import styled from "styled-components";

// export const HeroContainer = styled.div`
//   background: #1f2833;
//   font-family: "BioRhyme", "Roboto Slab", cursive, Pangolin, serif;

//   letter-spacing: 0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100%;

//   position: relative;
//   z-index: 1;
//   overflow-x: hidden;

//   :before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 2;
//   }
// `;

// export const HeroTextWrapper = styled.div`
//   max-width: 100%;
//   margin-left: 0rem;

//   @media screen and (max-width: 930px) {
//     margin-left: 0;
//     max-width: 100%;
//     text-align: center;
//   }
// `;

// export const HomeElement = styled.img`
//   width: 500px;

//   @media screen and (max-width: 1180px) {
//     width: 350px;
//   }
//   @media screen and (max-width: 930px) {
//     display: none;
//   }
// `;

// export const HeroContent = styled.div`
//   z-index: 1;
//   width: 100%;
//   position: relative;
//   display: flex;
//   padding: 8px 24px;
//   align-items: center;
//   justify-content: space-around;
// `;

// export const HeroH1 = styled.h1`
//   color: #66fcf1;
//   font-size: 70px;
//   text-align: left;

//   @media screen and (max-width: 1180px) {
//     font-size: 40px;
//   }
//   @media screen and (max-width: 930px) {
//     font-size: 60px;
//   }
//   @media screen and (max-width: 600px) {
//     font-size: 40px;
//     letter-spacing: 0.3rem;
//   }
//   @media screen and (max-width: 365px) {
//     font-size: 45px;
//     letter-spacing: 0.1rem;
//   }
// `;

// export const HeroP = styled.p`
//   margin-top: 24px;
//   height: 40px;
//   color: #66fcf1;
//   font-size: 25px;
//   text-align: left;
//   width: 725px;
//   max-width: 750px;


//   @media screen and (max-width: 1180px) {
//     font-size: 16px;
//     width: 500px;
//   }
//   @media screen and (max-width: 930px) {
//     font-size: 20px;
//     width: 600px;
//   }
//   @media screen and (max-width: 600px) {
//     font-size: 18px;
//     width: 350px;
//     letter-spacing: 0.3rem;
//   }
//   @media screen and (max-width: 365px) {
//     font-size: 18px;
//     width: 300px;
//     letter-spacing: 0.1rem;
//   }
// `;

// export const SocialIcons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   position: relative;
//   z-index: 2;
// `;

// export const NavBtn = styled.a`
//   cursor: pointer;
//   padding: 8px;
//   position: relative;
//   z-index: 2;
//   margin-right: 10px;
//   transition: all 0.2s ease-in-out;

//   img {
//     width: 40px;
//     cursor: pointer;

//     :hover {
//       transform: scale(1.05);
//       filter: brightness(150%);
//     }
//   }
// `;

// export const ResumeSection = styled.div`
//   display: flex;
//   letter-spacing: 0rem;
//   align-items: center;
//   font-size: 1.3rem;
//   justify-content: space-between;
//   width: 220px;
//   margin-top: 10px;
//   background-color: #0b0c10;
//   color: #66fcf1;
//   border-radius: 50px;
//   position: relative;
//   z-index: 2;

//   span {
//     margin-left: 10px;
//   }

//   a {
//     padding: 10px 10px;
//     background-color: #66fcf1;
//     border-radius: 50px;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     * {
//       color: #0b0c10;
//       font-size: 1.6rem;
//     }
//     :hover {
//       background-color: #c5c6c7;
//       filter: brightness(120%);
//     }
//   }
// `;
