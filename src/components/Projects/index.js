import React from "react";
import { GoRepo } from "react-icons/go";
// import { Button } from "@material-ui/core";
import { Button } from "@mui/material";

import { motion } from "framer-motion";

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
      {/* <Heading>
        <Zoom>PROJECTS</Zoom>
      </Heading> */}
      <Heading>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.div>
      </Heading>

      <AllProject>
        {projects.map((values) => (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>
        ))}
      </AllProject>
      <MoreButton
        href="https://github.com/ahmedraza17260?tab=repositories"
        target="_blank"
        aria-label="More Repositories"
      >
        More Projects
      </MoreButton>
    </ProjectsContainer>
  );
}

export default Projects;
