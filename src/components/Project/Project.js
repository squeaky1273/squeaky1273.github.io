import React from 'react'
import './Project.css';

function Project(props) {
    const { name, description, disclaimer, technologies, project, github} = props
    return (
        <div className="Project">
            <h3>{ name }</h3>
            <p>{ description }</p>
            <p>{ disclaimer }</p>
            <p>Technologies: { technologies }</p>
            <a href= { project }>View Project</a>
            <br />
            <a href= { github }>View Github</a>
        </div>
    )
}

export default Project