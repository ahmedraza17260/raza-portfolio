import styled from "styled-components";

export const ProjectsContainer = styled.div`
  /* Fixed: Changed 'alt' to safe transient prop format '$alt' */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Stacked on mobile */
    align-items: center;
  }
`;



export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AllProject = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
  // max-width: 1500px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; 
  width: 100%;
  max-width: 1200px;
  padding: 20px;

`;

export const Project = styled.div`
  background: ${({ theme }) => theme.sectionAlt};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => 
    theme.background === "#0b0c1a" || theme.mode === "dark"
      ? "0 6px 20px rgba(255, 255, 255, 0.15)" 
      : "0 6px 20px rgba(0, 0, 0, 0.3)"
  };
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%; /* Let the Grid manage the width */
  box-sizing: border-box;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  
`;

export const PrjTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};

  * {
    margin-right: 10px;
  }
`;

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: -5px;
  text-align: justify;
  // text-justify: inter-word;
`;

export const PrjDetails = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Stacks = styled.div`
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  color: ${({ theme }) => theme.text};

  /* Fixed: Appended context operator directly prefixing structural child elements */
  & > * {
    padding: 8px;
    margin: 0px 5px;
  }
`;

export const SourceButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
  justify-content: space-between;

  /* Fixed: Combined proper nesting structure for custom MUI components */
  & .MuiButton-root {
    background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
    padding: 8px;
    font-weight: 600;
    margin-right: 8px;
    color: ${({ theme }) => theme.text};
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      transform: scale(1.05);
    }
  }
`;

export const StyledBtn = styled.a`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
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
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transform: scale(1.04);
  }
`;