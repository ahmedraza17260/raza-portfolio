import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Zoom from "react-reveal/Zoom";

import { ExperienceContainer, Heading } from "./ExperienceElements";
import { experience } from "../../Data";
import { work } from "../../Data";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <Heading>
        <Zoom>EXPERIENCE</Zoom>
      </Heading>
      <VerticalTimeline>
        {work
          .slice()
          .reverse()
          .map((values) => (
            <VerticalTimelineElement
              className={`vertical-timeline-element--${values.type}`}
              contentStyle={
                values.bckgrnd
                  ? { background: "#0b0c10", color: "#66fcf1" }
                  : { background: "#0b0c10", color: "#66fcf1" }
              }
              contentArrowStyle={
                values.bckgrnd
                  ? { borderRight: "7px solid  #45a29e" }
                  : { borderRight: "7px solid  #45a29e" }
              }
              date={values.date}
              dateClassName="dateClass"
              iconStyle={{
                background: "#c5c6c7",
                color: "#0b0c10",
                border: "3px solid  #0b0c10",
              }}
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
                <li>{values.desc1}<br /></li>
                <li>{values.desc2}<br /></li>
                <li>{values.desc3}<br /></li>
                <li>{values.desc4}<br /></li>
                </ul>
              </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline> <br />
      <Heading>
        <Zoom>EDUCATION</Zoom>
      </Heading>
      <VerticalTimeline>
        {experience
          .slice()
          .reverse()
          .map((values) => (
            <VerticalTimelineElement
              className={`vertical-timeline-element--${values.type}`}
              contentStyle={
                values.bckgrnd
                  ? { background: "#0b0c10", color: "#66fcf1" }
                  : { background: "#0b0c10", color: "#66fcf1" }
              }
              contentArrowStyle={
                values.bckgrnd
                  ? { borderRight: "7px solid  #45a29e" }
                  : { borderRight: "7px solid  #45a29e" }
              }
              date={values.date}
              dateClassName="dateClass"
              iconStyle={{
                background: "#c5c6c7",
                color: "#0b0c10",
                border: "3px solid  #0b0c10",
              }}
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
                      <li>{work}</li>
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
  );
}

export default Experience;
