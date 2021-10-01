import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { GoRepo } from "react-icons/go";
import { Button } from "@material-ui/core";

import {
  ProjectsContainer,
  Heading,
  AllProject,
  Project,
  ProjectDesc,
  PrjTitle,
  Stacks,
  SourceButtons,
  PrjDetails,
  MoreButton,
} from "./ProjectsElements";
import { projects } from "../../Data";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Heading>
        <Zoom>PROJECTS</Zoom>
      </Heading>

      <AllProject>
        {projects.map((values) => (
          <Fade top>
            <Project id={values.id}>
              <PrjTitle>
                <GoRepo />
                {values.title}
              </PrjTitle>
              <ProjectDesc>{values.desc}</ProjectDesc>
              <PrjDetails>
                <SourceButtons>
                  <Button href={values.source} target="_blank">
                    Source
                  </Button>
                  <Button href={values.demo} target="_blank">
                    Demo
                  </Button>
                </SourceButtons>
              </PrjDetails>{" "}
              <br />
              <Stacks>
                {values.stacks.map((stack) => (
                  <>{stack}</>
                ))}
              </Stacks>
            </Project>
          </Fade>
        ))}
      </AllProject>
      <MoreButton
        href="https://github.com/ahmedraza17260?tab=repositories"
        target="_blank"
      >
        More Projects
      </MoreButton>
    </ProjectsContainer>
  );
}

export default Projects;
