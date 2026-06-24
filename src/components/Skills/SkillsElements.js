import styled from "styled-components";

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.sectionAlt};
  width: 100%; 
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: ${({ theme }) => 
    theme.background === "#0b0c1a" || theme.mode === "dark"
      ? "0 6px 20px rgba(255, 255, 255, 0.15)" 
      : "0 6px 20px rgba(0, 0, 0, 0.3)"
  };
  border: 1px solid rgba(255, 255, 255, 0.05); /* Adds a very faint border to define the card edge */

`;

export const SubPart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); /* Creates a nice, balanced grid */
  gap: 15px;
  justify-items: center; /* Centers icons horizontally */
  align-items: center;   /* Centers icons vertically */
  padding: 10px;
  box-sizing: border-box; /* Crucial for internal spacing */
`;

export const AllSkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  align-items: flex-start; /* Fixed invalid property value 'left' */
  justify-content: center;
  
  @media screen and (max-width: 1200px) and (min-width: 935px) {
    p {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 700px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 1200px) and (min-width: 935px) {
    font-size: 35px;
  }
  @media screen and (max-width: 700px) {
    font-size: 35px;
  }
`;

export const SkillCategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.05rem;
`;

export const SkillElement = styled.div`
  img {
    width: 600px;
    height: auto;

    @media screen and (max-width: 1310px) {
      width: 500px;
    }
    @media screen and (max-width: 1200px) {
      width: 400px;
    }
    @media screen and (max-width: 1035px) {
      width: 300px;
    }
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  /* Target embedded icons directly whether they are component objects or svg shapes */
  svg, .icon, i {
    font-size: 3rem;
  }

  span {
    margin-top: 8px;
    font-size: 0.7rem;
    font-weight: 600; /* Makes text pop */
    text-align: center;
    color: ${({ theme }) => theme.text};
  }

  /* Fixed: Appended explicit context nesting reference */
  &:hover {
    color: ${({ theme }) => theme.hoverColor || "#c5c6c7"};
    transform: scale(1.08);
  }

  @media screen and (max-width: 1200px) and (min-width: 935px) {
    svg, .icon, i {
      font-size: 2.5rem;
    }
    span {
      margin-top: 10px;
      font-size: 0.65rem;
    }
  }
  @media screen and (max-width: 700px) {
    svg, .icon, i {
      font-size: 2.5rem;
    }
    span {
      margin-top: 10px;
      font-size: 0.65rem;
    }
  }
`;

// This is your outer section wrapper
export const SkillsMainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// This is the grid that holds the cards
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; 
  width: 100%;
  margin-top: 20px;
  align-items: start;
`;
