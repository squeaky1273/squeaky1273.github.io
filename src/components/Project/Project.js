import React from 'react'

function Project(props) {
    const { name, description, disclaimer, technologies, project, github} = props
    return (
        <div className="Project">
            <h3> { name } </h3>
            <p> { description } </p>
            <p>{ disclaimer }</p>
            <p>Technologies: { technologies }</p>
            <p> { project }</p>
            <p> { github }</p>
        </div>
    )
}

export default Project