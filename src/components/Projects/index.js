import React from "react";
import { GoRepo } from "react-icons/go";
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

import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme, alt }) => (alt ? theme.sectionAlt : theme.background)};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

function Projects() {
  return (
    <Section alt id="projects">
      <ProjectsContainer alt id="projects">
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
          {projects.map((project) => (
            <motion.div
              key={project.id} // ✅ Unique key for each project
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Project id={project.id}>
                <PrjTitle>
                  <GoRepo /> {project.title}
                </PrjTitle>

                <ProjectDesc>{project.desc}</ProjectDesc>

                <PrjDetails>
                  <SourceButtons>
                    <Button href={project.source} target="_blank" variant="outlined">
                      Source
                    </Button>
                    <Button href={project.demo} target="_blank" variant="outlined">
                      Demo
                    </Button>
                  </SourceButtons>
                </PrjDetails>

                <Stacks>
                  {project.stacks.map((stack, index) => (
                    <span key={index}>{stack}</span> // ✅ Keys for stack items
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
    </Section>
  );
}

export default Projects;
