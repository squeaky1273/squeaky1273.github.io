import React from 'react'
import Typist from 'react-typist';
import './Home.css';

function Home() {
    return (
        <Typist
            className="header"
            avgTypingDelay={100}
            startDelay={2000}>
            <h1>padyn</h1>
        </Typist>
    )
}

export default Home