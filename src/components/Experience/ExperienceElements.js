import styled from "styled-components";

export const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  /* Fixed: Changed 'alt' to '$alt' and replaced invalid '0%' with 'none' */
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-shadow: none;

  .vertical-timeline-element-content li {
    text-align: justify !important;
    margin-bottom: 8px;
    padding: 8px;
  }


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
  display: block !important;
  margin: 40px auto !important; 
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 100 !important; /* Forces it above the timeline canvas */
  text-align: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

/* Dynamic Object style injection for React-Vertical-Timeline components */
export const getTimelineContentStyle = (theme) => ({
  background: theme.sectionAlt,
  color: theme.text,
  borderRadius: "10px",
  boxShadow: `0 6px 20px ${theme.background === "#0b0c1a" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"}`,
  padding: "1.5rem",
});

export const getTimelineArrowStyle = (theme) => ({
  borderRight: `7px solid ${theme.sectionAlt}`, /* Point matching background color edge */
});

export const getTimelineIconStyle = (theme) => ({
  background: theme.text,
  color: theme.background,
  border: `3px solid ${theme.text}`,
  boxShadow: `0 0 0 4px ${theme.sectionAlt}`,
});


export const ExperienceList = styled.ul`
  &.vertical-timeline-element-content ul {
    margin: 0;
    padding: 0;
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    text-align: justify !important;
    text-justify: inter-word !important;
    line-height: 1.6;
    margin-bottom: 8px;
    display: list-item !important;
  }
`;