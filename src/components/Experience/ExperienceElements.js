import styled from "styled-components";

export const ExperienceContainer = styled.div`
  // background: #1f2833;
  // color: #66fcf1;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
  box-shadow: 0%;
  .vertical-timeline::before {
    background: #c5c6c7;
  }

  .vertical-timeline::after {
    background: #c5c6c7;
  }

  .dateClass {
    font-weight: bold;
  }
`;

export const Heading = styled.h1`
   margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.accent || "#66fcf1"};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const VerticalTimeline = styled.div`
  color: #c5c6c7;
  background: #0b0c10;
`;
