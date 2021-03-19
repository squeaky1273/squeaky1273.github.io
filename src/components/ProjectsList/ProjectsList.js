import React from 'react'
import Project from '../Project/Project';
import data from '../../projects.js';

function ProjectsList() {
    const projects = data.map(({ ID, name, description, disclaimer, technologies, project, github }) => {
        return (
            <Project
                key = {ID}
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
        <div className = "Projects">
            { projects }
        </div>
    )
}

export default ProjectsList