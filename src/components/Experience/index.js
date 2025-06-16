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
} from "./ExperienceElements";

import { motion } from "framer-motion";

import { ExperienceContainer, Heading } from "./ExperienceElements";
import { experience } from "../../Data";
import { work } from "../../Data";

import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;


function Experience() {
  const theme = useTheme(); // ⬅️ Grab current theme
  return (
    <Section alt id="experience">
      <ExperienceContainer alt id="experience">
        <Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            EXPERIENCE
          </motion.div>
        </Heading>

        <VerticalTimeline alt>
          {work.slice().reverse().map((values) => (
            <VerticalTimelineElement
              key={values.title + values.date} // Added key for better list rendering
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
                  <li key={index}>{item}<br /></li>
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
          {experience
            .slice()
            .reverse()
            .map((values) => (
              <VerticalTimelineElement
                key={values.title + values.date} // Added key for better list rendering
                className={`vertical-timeline-element--${values.type}`}
                contentStyle={getTimelineContentStyle(theme)}
                contentArrowStyle={getTimelineArrowStyle(theme)}
                // contentStyle={
                //   values.bckgrnd
                //     ? { background: "#0b0c10", color: "#66fcf1" }
                //     : { background: "#0b0c10", color: "#66fcf1" }
                // }
                // contentArrowStyle={
                //   values.bckgrnd
                //     ? { borderRight: "7px solid  #45a29e" }
                //     : { borderRight: "7px solid  #45a29e" }
                // }
                date={values.date}
                dateClassName="dateClass"
                iconStyle={getTimelineIconStyle(theme)}
                // iconStyle={{
                //   background: "#c5c6c7",
                //   color: "#0b0c10",
                //   border: "3px solid  #0b0c10",
                // }}
                icon={values.icon}
              >
                <h3 className="vertical-timeline-element-title">
                  {values.title}
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  {values.subtitle}
                </h4>

                <p>
                  <ul>
                    <li>{values.desc}<br /></li>
                  </ul>
                  {values.workdesc.length > 0 ? (
                    <ul>
                      {values.workdesc.map((work) => (
                        <li key={work}>{work}</li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </ExperienceContainer>
    </Section>

  );
}


export default Experience;
