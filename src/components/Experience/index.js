import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "styled-components";
import {
  getTimelineContentStyle,
  getTimelineArrowStyle,
  getTimelineIconStyle,
  ExperienceContainer,
  Heading,
} from "./ExperienceElements";

import { motion } from "framer-motion";
import { experience, work } from "../../Data";

import styled from "styled-components";

// Transient prop $alt avoids unknown DOM prop warning
const Section = styled.section`
  background-color: ${({ theme, $alt }) => ($alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Experience() {
  const theme = useTheme();

  return (
    <Section $alt id="experience">
      <ExperienceContainer>
        <Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            EXPERIENCE
          </motion.div>
        </Heading>

        <VerticalTimeline>
          {work.slice().reverse().map((values) => (
            <VerticalTimelineElement
              key={`${values.title}-${values.date}`} // unique key
              className={`vertical-timeline-element--${values.type}`}
              contentStyle={getTimelineContentStyle(theme)}
              contentArrowStyle={getTimelineArrowStyle(theme)}
              date={values.date}
              dateClassName="dateClass"
              iconStyle={getTimelineIconStyle(theme)}
              icon={values.icon}
            >
              <h3 className="vertical-timeline-element-title">{values.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{values.subtitle}</h4>
              <ul>
                {values.workdesc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            EDUCATION
          </motion.div>
        </Heading>

        <VerticalTimeline>
          {experience.slice().reverse().map((values) => (
            <VerticalTimelineElement
              key={`${values.title}-${values.date}`}
              className={`vertical-timeline-element--${values.type}`}
              contentStyle={getTimelineContentStyle(theme)}
              contentArrowStyle={getTimelineArrowStyle(theme)}
              date={values.date}
              dateClassName="dateClass"
              iconStyle={getTimelineIconStyle(theme)}
              icon={values.icon}
            >
              <h3 className="vertical-timeline-element-title">{values.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{values.subtitle}</h4>
              
              {/* Education/Work description */}
              {values.desc && (
                <ul>
                  <li>{values.desc}</li>
                </ul>
              )}
              {values.workdesc?.length > 0 && (
                <ul>
                  {values.workdesc.map((work, idx) => (
                    <li key={idx}>{work}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </ExperienceContainer>
    </Section>
  );
}

export default Experience;
