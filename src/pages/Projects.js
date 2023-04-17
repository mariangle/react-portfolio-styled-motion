import React, { useEffect } from 'react';
import styled from 'styled-components';
// components
import ScrollTop from '../components/ScrollTop';
// animations
import {motion} from "framer-motion";
import { projectState } from '../projectState';
import Project from '../components/Project';

function Projects() {
const projects = projectState();

  return (
    <StyledProjects id="projects">
      <h2>Projects</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <Project project={project} key={index}/> 
        ))}
      </ProjectGrid>
      <ScrollTop></ScrollTop>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
    max-width: 1080px;
    padding: 1rem;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2{
      margin-bottom: 2rem;
    }
`

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;

`


export default Projects;