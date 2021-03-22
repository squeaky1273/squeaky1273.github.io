import React from 'react'
import Article from '../Article/Article';
import data from '../../articles.js';
import Typist from 'react-typist';
import './ArticlesList.css';

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
        <div className = "List">
            <Typist
            className="ArticleTitle"
            avgTypingDelay={40}
            startDelay={2000}>
                Articles
            </Typist>
            <div className = "Articles">
                { articles }
            </div>
        </div>
    )
}

export default ArticlesList