import React from 'react'
import './Project.css';

function Project(props) {
    const { image, name, description, technologies, project, github} = props
    return (
        <div className="Project">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Hello" />
            <h4>{ name }</h4>
            <p>{ description }</p>
            {/* <p>{ disclaimer }</p> */}
            <p>Technologies: { technologies }</p>
            <a href= { project }>View Project</a>
            <br />
            <a href= { github }>View Github</a>
        </div>
    )
}

export default Project