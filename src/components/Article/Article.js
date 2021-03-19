import React from 'react'

function Article(props) {
    const { name, description, medium} = props
    return (
        <div className="Article">
            <h3> { name } </h3>
            <p> { description } </p>
            <p>{ medium }</p>
        </div>
    )
}

export default Article