import React from 'react'
import './Article.css';

function Article(props) {
    const { image, name, description, medium} = props
    return (
        <div className="Article">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Hello" />
            <h4>{ name }</h4>
            <p>{ description }</p>
            <a href={ medium }>Read More</a>
        </div>
    )
}

export default Article