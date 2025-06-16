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
  // background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
    background: #c5c6c7;
  }

  .vertical-timeline::after {
    background: #c5c6c7;
  // background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};

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
  // color: ${({ theme }) => theme.accent || "#66fcf1"};
  color: ${({ theme }) => theme.text};


  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const VerticalTimeline = styled.div`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
`;


export const getTimelineContentStyle = (theme) => ({
  background: theme.sectionAlt,
  color: theme.text,
  borderRadius: "10px",
  // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  boxShadow: `0 6px 20px ${theme.mode === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"}`,
  padding: "1.5rem",
});

export const getTimelineArrowStyle = (theme) => ({
  borderRight: `7px solid ${theme.colorAlt}`,
});

export const getTimelineIconStyle = (theme) => ({
  background: theme.colorAlt,
  color: theme.sectionAlt,
  border: `3px solid ${theme.text}`,
});