import React from 'react'

function Article(props) {
    const { name, description, medium} = props
    return (
        <div className="Article">
            <h3>{ name }</h3>
            <p>{ description }</p>
            <a href={ medium }>Read More</a>
        </div>
    )
}

export default Article