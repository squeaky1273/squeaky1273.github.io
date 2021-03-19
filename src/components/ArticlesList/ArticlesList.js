import React from 'react'
import Article from '../Article/Article';
import data from '../../articles.js';

function ArticlesList() {
    const articles = data.map(({ ID, name, description, medium }) => {
        return (
            <Article
                key = {ID}
                name = {name}
                description = {description}
                medium = {medium}
            />
        )
    })

    return (
        <div className = "Articles">
            { articles }
        </div>
    )
}

export default ArticlesList