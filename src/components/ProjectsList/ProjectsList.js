import React from 'react'
import Project from '../Project/Project';
import data from '../../projects.js';
import Typist from 'react-typist';
import './ProjectsList.css';

function ProjectsList() {
    const projects = data.map(({ ID, image, name, description, disclaimer, technologies, project, github }) => {
        return (
            <Project
                key = {ID}
                image = {image[0]}
                name = {name}
                description = {description}
                disclaimer = {disclaimer}
                technologies = {technologies}
                project = {project}
                github = {github}
            />
        )
    })

    return (
        <div className = "List">
            <Typist
              className="ProjectTitle"
              avgTypingDelay={40}
              startDelay={2000}>
                  Projects
            </Typist>
            <hr />
            <div className = "Projects">
                { projects }
            </div>
        </div>
    )
}

export default ProjectsList