import styled from "styled-components";

export const ProjectsContainer = styled.div`
  // background: #1f2833;
  // background: #0b0c10;
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  // color: #66fcf1;
  color: ${({ theme }) => theme.text};


  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AllProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
`;

export const Project = styled.div`
  // background: #0b0c10;
  // background: #1f2833;
  // background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => 
    theme.mode === "dark" 
      ? "0 6px 20px rgba(255, 255, 255, 0.15)" 
      : "0 6px 20px rgba(0, 0, 0, 0.3)"
  };
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 5px 20px;
  margin: 0px 20px;
  width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
 
  // box-shadow: 3px 3px 0px -1px rgba(141, 121, 121, 0.75);
  // -webkit-box-shadow: 3px 3px 0px -1px rgba(141, 121, 121, 0.75);
  // -moz-box-shadow: 3px 3px 0px -1px rgba(141, 121, 121, 0.75);

  // :hover {
  //   -webkit-box-shadow: 10px 10px 26px -8px rgba(0, 0, 0, 0.75);
  //   -moz-box-shadow: 10px 10px 26px -8px rgba(0, 0, 0, 0.75);
  //   box-shadow: 10px 10px 26px -8px rgba(0, 0, 0, 0.75);
  // }

  @media screen and (max-width: 460px) {
    width: 300px;
  }
`;

export const PrjTitle = styled.h2`
  display: flex;
  align-items: center;
  // color: #66fcf1;
  color: ${({ theme }) => theme.text};


  * {
    margin-right: 10px;
  }
`;

export const ProjectDesc = styled.p`
  // color: #45a29e;
  color: ${({ theme }) => theme.text};
  margin-top: -5px;
  min-height: 50px;
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
  // color: #c5c6c7;
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
    // background: #c5c6c7;
    background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
    padding: 8px;
    font-weight: 600;
    margin-right: 8px;
    // color: #0b0c10;
    color: ${({ theme }) => theme.text};


    :hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      transform: scale(1.05);
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
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  // color: #66fcf1;
  // background: #1f2833;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;

  :hover {
    // filter: brightness(120%);
    // color: #c5c6c7;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transform: scale(1.04);
  }
`;
